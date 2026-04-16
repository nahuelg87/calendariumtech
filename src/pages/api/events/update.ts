export const prerender = true;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const id = formData.get("id");

  // 1. Actualizamos los datos básicos del evento
  const { error: updateError } = await supabase
    .from("events")
    .update({
      title: formData.get("title"),
      date: formData.get("date"),
      location: formData.get("location"),
      image_url: formData.get("imageUrl"),
      link_url: formData.get("linkUrl"),
      is_featured: formData.get("is_featured") === "on",
    })
    .eq("id", id);

  if (updateError) return new Response(updateError.message, { status: 500 });

  // 2. Limpieza y actualización de Tags (Many-to-Many)
  // Primero borramos todos los tags actuales de este evento
  await supabase.from("event_tags").delete().eq("event_id", id);

  // Preparamos los nuevos tags del formulario
  const tracks = [formData.get("track_1"), formData.get("track_2"), formData.get("track_3")];
  const tagsToInsert = tracks
    .filter(t => t && t !== "")
    .map(trackName => ({
      event_id: id,
      track_name: trackName
    }));

  // Insertamos los nuevos
  if (tagsToInsert.length > 0) {
    const { error: tagsError } = await supabase.from("event_tags").insert(tagsToInsert);
    if (tagsError) console.error("Error actualizando tags:", tagsError.message);
  }

  return redirect("/admin");
};