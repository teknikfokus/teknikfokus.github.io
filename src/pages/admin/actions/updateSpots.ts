import type { APIRoute } from "astro";
import api from "~/services/api";

export const POST: APIRoute = async ({ cookies, redirect, request }) => {
  console.log('hiiiiiiii')
  try {
    const data = await request.formData();
    for(let d of data.entries()){
      console.log("hellororor")
      console.log(d);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
  return redirect("/admin");
};