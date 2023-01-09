import type { SupabaseClient, User } from "supabase";

export interface BookmarkProps {
  title: string;
  url: string;
}

export interface UserProps {
  id: string;
  aud: string;
  email: string;
}

export interface ServerState {
  user: User | null;
  error: { code: number; msg: string } | null;
  supabase: SupabaseClient;
}

export interface SessionRecord {
  session_id: string;
  refresh_token: string;
  access_token: string;
  expires_at: number;
}
