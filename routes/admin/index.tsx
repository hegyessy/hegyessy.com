import { SiteLayout } from "components/SiteCore.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { ServerState } from "routes/_middleware.ts";
import { UserProps } from "lib/data/types.ts";

interface Data {
  AUTH_URL: string | void;
  state: ServerState;
}

export const handler: Handlers<Data> = {
  GET(_req, ctx) {
    const AUTH_URL = Deno.env.get("AUTH_URL");
    const state = ctx.state;
    console.log(state.user);
    return ctx.render({ AUTH_URL, state });
  },
};

export default function Home(props: PageProps) {
  return (
    <SiteLayout>
      <h1>Admin</h1>
      {!props.data.state.user
        ? <a href={props.data.AUTH_URL}>Log in with github</a>
        : <a href="/auth/logout">Logout</a>}
    </SiteLayout>
  );
}
