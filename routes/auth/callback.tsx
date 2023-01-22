import { Cookie, setCookie } from "std/http/cookie.ts";
import { DB } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";

export const handler = {
  async POST(req: Request) {
    const formData = await req.formData();
    const url = new URL(req.url);
    if (
      !formData.has("access_token") ||
      !formData.has("refresh_token") ||
      !formData.get("expires_in")
    ) {
      return new Error();
    }

    const session_id = crypto.randomUUID();
    const refresh_token = formData.get("refresh_token");
    const access_token = formData.get("access_token");
    const expires_at = new Date().getTime() +
      Number(formData.get("expires_in"));

    const db = new DB("sessions.db");

    db.execute(`
      CREATE TABLE IF NOT EXISTS sessions (
        session_id TEXT,
        refresh_token TEXT,
        access_token TEXT,
        expires_at integer
      )
    `);

    db.query(
      "INSERT INTO sessions (session_id, refresh_token, access_token, expires_at) VALUES(?,?,?,?)",
      [session_id, refresh_token, access_token, expires_at],
    );

    const responseHeaders = new Headers({
      location: Deno.env.get("BASE_URL")!,
    });

    const secureCookie = (url.origin.includes("localhost")) ? false : true;
    console.log("secure cookie", secureCookie);
    console.log("url.hostname", url.hostname);
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
