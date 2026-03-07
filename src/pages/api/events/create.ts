export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  
  // 1. Preparamos la data básica del evento
  // Nota: Quitamos 'track' de acá porque ahora va en la tabla event_tags
  const eventData = {
    title: formData.get("title"),
    date: formData.get("date"),
    location: formData.get("location"),
    image_url: formData.get("imageUrl"),
    link_url: formData.get("linkUrl"),
    is_featured: formData.get("is_featured") === "on",
  };

  // 2. Insertamos el evento y pedimos que nos devuelva el registro creado (.select().single())
  const { data: newEvent, error: eventError } = await supabase
    .from("events")
    .insert([eventData])
    .select() 
    .single();

  if (eventError) {
    console.error("Error al crear evento:", eventError.message);
    return new Response(eventError.message, { status: 500 });
  }

  // 3. Capturamos los 3 tracks del formulario
  const tracks = [
    formData.get("track_1"),
    formData.get("track_2"),
    formData.get("track_3"),
  ];

  // 4. Limpiamos los nulos o vacíos y preparamos el insert para la tabla intermedia
  const tagsToInsert = tracks
    .filter((t) => t && t !== "") // Filtra si no elegiste nada en el select
    .map((trackName) => ({
      event_id: newEvent.id, // El ID que nos dio Supabase recién
      track_name: trackName,
    }));

  // 5. Si hay tags para insertar, los mandamos a 'event_tags'
  if (tagsToInsert.length > 0) {
    const { error: tagsError } = await supabase
      .from("event_tags")
      .insert(tagsToInsert);

    if (tagsError) {
      console.error("Error al insertar tags:", tagsError.message);
      // No frenamos el redirect porque el evento ya se creó, 
      // pero lo logueamos para debuguear.
    }
  }

  return redirect("/admin");
};