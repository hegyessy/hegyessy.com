import { Handlers, PageProps } from "$fresh/server.ts";
import { BookmarkProps, UserProps } from "lib/data/types.ts";
import { SupabaseClient } from "supabase";

export const handler: Handlers = {
  async GET(req, ctx) {
    const state = ctx.state;
    const unauthenticated = new Headers({
      location: `http://${new URL(req.url).host}/admin/`,
    });

    if (Object.keys(state).length === 0) {
      return new Response("", {
        status: 303,
        headers: unauthenticated,
      });
    }
    const supabaseClient = state.supabase as SupabaseClient;
    const { data: profile, error: profile_error } = await supabaseClient.from(
      "profiles",
    ).select();
    const { data: bookmarks, error: bookmarks_error } = await supabaseClient
      .from("bookmarks").select("title, url");

    return ctx.render({ state, profile, bookmarks });
  },
  async POST(req, ctx) {
    const formData = await req.formData();
    if (formData.has("title") && formData.has("url")) {
      const title = formData.get("title");
      const url = formData.get("url");
      const supabaseClient = ctx.state.supabase as SupabaseClient;
      const user = ctx.state.user as UserProps;
      const { error } = await supabaseClient.from("bookmarks").insert({
        user_id: user.id,
        title: title,
        url: url,
      });
      console.log(error);
    }
    const responseHeaders = new Headers({
      location: `http://${new URL(req.url).host}/admin/profile`,
    });
    const response = new Response("", {
      status: 303,
      headers: responseHeaders,
    });
    return response;
  },
};

export default function ProfilePage(props: PageProps) {
  const sortedBookmarks = props.data.bookmarks.sort((
    a: BookmarkProps,
    b: BookmarkProps,
  ) => a.title.localeCompare(b.title));

  return (
    <div class="p-12">
      <h1 class="text-xl">Hello {props.data?.profile[0].full_name}</h1>
      <div>
        <h2 class="font-bold">Bookmarks</h2>
        <form method="post">
          <label>
            <input
              class="border mr-2"
              name="title"
              type="text"
              placeholder="Title"
            />
          </label>
          <label>
            <input
              class="border mr-2"
              name="url"
              type="text"
              placeholder="URL"
            />
          </label>
          <button type="submit">Add Bookmark</button>
        </form>
        <ul>
          {sortedBookmarks.map((bookmark: BookmarkProps) => {
            return (
              <li>
                <a href={bookmark.url} target="_blank">{bookmark.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
