export const prerender = true;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const id = formData.get("id");

  if (!id) return new Response("ID no encontrado", { status: 400 });

  // Al borrar el evento, como configuramos ON DELETE CASCADE en la DB,
  // los tags en 'event_tags' se borran solos. ¡Limpieza automática!
  const { error } = await supabase
    .from("events")
    .delete()
    .eq("id", id);

  if (error) {
    return new Response(error.message, { status: 500 });
  }

  return redirect("/admin");
};