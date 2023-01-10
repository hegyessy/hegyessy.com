import { Database } from "https://deno.land/x/aloedb@0.9.0/mod.ts";
import { Cookie, setCookie } from "std/http/cookie.ts";
import { SessionRecord } from "lib/data/types.ts";

export const handler = {
  async POST(req: Request) {
    const formData = await req.formData();
    const url = new URL(req.url);
    console.log("url", url);
    if (
      !formData.has("access_token") ||
      !formData.has("refresh_token") ||
      !formData.get("expires_in")
    ) {
      return new Error();
    }

    const db = new Database<SessionRecord>("./file.json");
    console.log(db);
    const session_id = crypto.randomUUID();

    await db.insertOne({
      session_id,
      refresh_token: formData.get("refresh_token")! as string,
      access_token: formData.get("access_token")! as string,
      expires_at: new Date().getTime() + Number(formData.get("expires_in")),
    });

    const redirect_url = (url.origin.includes("localhost"))
      ? `http://localhost:8000/admin/profile`
      : `https://hegyessy.com/admin/profile`;

    const responseHeaders = new Headers({
      location: redirect_url,
    });

    const secureCookie = (url.origin.includes("localhost")) ? false : true;

    // const responseHeaders = new Headers();
    const cookie: Cookie = {
      name: "session",
      value: session_id,
      maxAge: 3600,
      domain: url.hostname,
      path: "/",
      httpOnly: true,
      secure: secureCookie,
    };

    setCookie(responseHeaders, cookie);

    const response = new Response("", {
      status: 303,
      headers: responseHeaders,
    });

    return response;
  },
};

export default function Auth() {
  return (
    <>
      <form
        method="post"
        id="post_form"
        action="/auth/callback"
      >
        <input
          type="hidden"
          name="access_token"
          id="access_token"
        />
        <input
          type="hidden"
          name="refresh_token"
          id="refresh_token"
        />
        <input
          type="hidden"
          name="provider_token"
          id="provider_token"
        />
        <input
          type="hidden"
          name="expires_in"
          id="expires_in"
        />
        <input
          type="hidden"
          name="token_type"
          id="token_type"
        />
      </form>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.location.hash.replace('#','').split("&").forEach((p)=>{
              const [key, value] = p.split('=')
              document.getElementById(key).value = value
            })
            document.getElementById("post_form").submit()
          `,
        }}
      />
    </>
  );
}
