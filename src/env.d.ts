/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import PocketBase from "pocketbase";

declare global {
  namespace App {
    interface Locals extends Record<string, any> {
      api: PocketBase;
      user: RecordAuthResponse<UsersResponse> | null;
      token: string | null;
    }
  }
}
