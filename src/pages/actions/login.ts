import type { APIRoute } from "astro";
import api from "~/services/api";

export const POST: APIRoute = async ({ cookies, redirect, request }) => {
  try {
    const data = await request.formData();
    const name = data.get("username") ?? "";
    const password = data.get("password") ?? "";

    const authData = await api
      .collection("users")
      .authWithPassword(name.toString(), password.toString());
    if (authData) {
      cookies.set("token", authData.token, {path: "/"});
      return redirect("/admin");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
  return redirect("login");
};
