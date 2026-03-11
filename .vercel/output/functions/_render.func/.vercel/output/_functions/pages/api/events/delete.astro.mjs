import { s as supabase } from '../../../chunks/supabase_BFS6p0Cy.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const formData = await request.formData();
  const id = formData.get("id");
  if (!id) return new Response("ID no encontrado", { status: 400 });
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) {
    return new Response(error.message, { status: 500 });
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
