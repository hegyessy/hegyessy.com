import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "std/http/cookie.ts";
import { DB } from "https://deno.land/x/sqlite@v3.7.0/mod.ts";
import { createClient } from "supabase";
import { ServerState } from "lib/data/types.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<ServerState>,
) {
  const cookies = getCookies(req.headers);

  if (!cookies.session) {
    return ctx.next();
  }

  const db = new DB("sessions.db");

  const q = db.query(
    `SELECT session_id, refresh_token, access_token, expires_at FROM sessions WHERE session_id = ? LIMIT 1`,
    [cookies.session],
  );

  const session = {
    "session_id": q[0][0],
    "refresh_token": q[0][1],
    "access_token": q[0][2],
    "expires_at": q[0][3],
  };

  const { access_token } = session;

  function inMemoryStorageProvider() {
    const items = new Map();
    return {
      getItem: (key: string) => items.get(key),
      setItem: (key: string, value: string) => {
        items.set(key, value);
      },
      removeItem: (key: string) => {
        items.delete(key);
      },
    };
  }

  const storage = inMemoryStorageProvider();

  storage.setItem(
    `sb-${Deno.env.get("SUPABASE_NAME")}-auth-token`,
    JSON.stringify(session),
  );
  const authOptions = { auth: { storage } };

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_KEY")!,
    {
      ...authOptions,
    },
  );

  const { data: { user } } = await supabase.auth.getUser(access_token);

  if (access_token) {
    ctx.state.user = user;
    ctx.state.supabase = supabase;
  }

  return await ctx.next();
}
