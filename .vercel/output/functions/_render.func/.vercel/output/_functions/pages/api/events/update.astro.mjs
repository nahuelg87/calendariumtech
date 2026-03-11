import { s as supabase } from '../../../chunks/supabase_BFS6p0Cy.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const id = formData.get("id");
  const { error: updateError } = await supabase.from("events").update({
    title: formData.get("title"),
    date: formData.get("date"),
    location: formData.get("location"),
    image_url: formData.get("imageUrl"),
    link_url: formData.get("linkUrl"),
    is_featured: formData.get("is_featured") === "on"
  }).eq("id", id);
  if (updateError) return new Response(updateError.message, { status: 500 });
  await supabase.from("event_tags").delete().eq("event_id", id);
  const tracks = [formData.get("track_1"), formData.get("track_2"), formData.get("track_3")];
  const tagsToInsert = tracks.filter((t) => t && t !== "").map((trackName) => ({
    event_id: id,
    track_name: trackName
  }));
  if (tagsToInsert.length > 0) {
    const { error: tagsError } = await supabase.from("event_tags").insert(tagsToInsert);
    if (tagsError) console.error("Error actualizando tags:", tagsError.message);
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
