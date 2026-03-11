import { s as supabase } from '../../../chunks/supabase_BFS6p0Cy.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const eventData = {
    title: formData.get("title"),
    date: formData.get("date"),
    location: formData.get("location"),
    image_url: formData.get("imageUrl"),
    link_url: formData.get("linkUrl"),
    is_featured: formData.get("is_featured") === "on"
  };
  const { data: newEvent, error: eventError } = await supabase.from("events").insert([eventData]).select().single();
  if (eventError) {
    console.error("Error al crear evento:", eventError.message);
    return new Response(eventError.message, { status: 500 });
  }
  const tracks = [
    formData.get("track_1"),
    formData.get("track_2"),
    formData.get("track_3")
  ];
  const tagsToInsert = tracks.filter((t) => t && t !== "").map((trackName) => ({
    event_id: newEvent.id,
    // El ID que nos dio Supabase recién
    track_name: trackName
  }));
  if (tagsToInsert.length > 0) {
    const { error: tagsError } = await supabase.from("event_tags").insert(tagsToInsert);
    if (tagsError) {
      console.error("Error al insertar tags:", tagsError.message);
    }
  }
  return redirect("/admin");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
