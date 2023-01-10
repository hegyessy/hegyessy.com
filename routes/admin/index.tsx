import { SiteLayout } from "components/SiteCore.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { ServerState } from "lib/data/types.ts";

interface Data {
  AUTH_URL: string | void;
  state: ServerState;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    console.log(url);
    const AUTH_URL = `${
      Deno.env.get("SUPABASE_URL")
    }/auth/v1/authorize?provider=github&redirect_to=${url}/auth/callback`;
    const state = ctx.state;
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
