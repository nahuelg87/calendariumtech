import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_E58ZkMb4.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_DvcJU73v.mjs';
import { s as supabase } from '../../../chunks/supabase_BFS6p0Cy.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://calendarium.tech");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: event } = await supabase.from("events").select(`*, event_tags(track_name)`).eq("id", id).single();
  const { data: allTracks } = await supabase.from("tracks").select("name").order("name");
  const currentTags = event?.event_tags?.map((t) => t.track_name) || [];
  if (!event) return Astro2.redirect("/admin");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `Editando: ${event.title}`, "data-astro-cid-uqigzxcc": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-4xl mx-auto p-6" data-astro-cid-uqigzxcc> <a href="/admin" class="text-white/30 hover:text-[#facc15] text-xs font-bold uppercase tracking-widest mb-8 inline-block" data-astro-cid-uqigzxcc>← Cancelar Edición</a> <div class="bg-[#111] border border-white/10 p-10 rounded-3xl shadow-2xl" data-astro-cid-uqigzxcc> <h1 class="text-3xl font-black italic text-white mb-10 text-center" data-astro-cid-uqigzxcc>EDITAR <span class="text-[#22d3ee]" data-astro-cid-uqigzxcc>EVENTO</span></h1> <form action="/api/events/update" method="post" class="grid grid-cols-1 md:grid-cols-6 gap-6" data-astro-cid-uqigzxcc> <input type="hidden" name="id"${addAttribute(event.id, "value")} data-astro-cid-uqigzxcc> <div class="md:col-span-6" data-astro-cid-uqigzxcc> <label class="label-tech" data-astro-cid-uqigzxcc>Nombre del Evento</label> <input type="text" name="title" required${addAttribute(event.title, "value")} class="input-tech" data-astro-cid-uqigzxcc> </div> <div class="md:col-span-3" data-astro-cid-uqigzxcc> <label class="label-tech" data-astro-cid-uqigzxcc>Fecha</label> <input type="date" name="date" required${addAttribute(event.date, "value")} class="input-tech" data-astro-cid-uqigzxcc> </div> <div class="md:col-span-3" data-astro-cid-uqigzxcc> <label class="label-tech" data-astro-cid-uqigzxcc>Ubicación</label> <input type="text" name="location" required${addAttribute(event.location, "value")} class="input-tech" data-astro-cid-uqigzxcc> </div>  ${[1, 2, 3].map((num) => renderTemplate`<div class="md:col-span-2" data-astro-cid-uqigzxcc> <label class="label-tech" data-astro-cid-uqigzxcc>Track ${num} ${num === 1 ? "(Principal)" : "(Opcional)"}</label> <select${addAttribute(`track_${num}`, "name")}${addAttribute(num === 1, "required")} class="input-tech" data-astro-cid-uqigzxcc> <option value="" data-astro-cid-uqigzxcc>${num === 1 ? "Seleccionar..." : "Ninguno"}</option> ${allTracks?.map((track) => renderTemplate`<option${addAttribute(track.name, "value")}${addAttribute(currentTags[num - 1] === track.name, "selected")} data-astro-cid-uqigzxcc> ${track.name} </option>`)} </select> </div>`)} <div class="md:col-span-3" data-astro-cid-uqigzxcc> <label class="label-tech" data-astro-cid-uqigzxcc>Imagen (URL)</label> <input type="url" name="imageUrl" required${addAttribute(event.image_url, "value")} class="input-tech" data-astro-cid-uqigzxcc> </div> <div class="md:col-span-3" data-astro-cid-uqigzxcc> <label class="label-tech" data-astro-cid-uqigzxcc>Link Registro</label> <input type="url" name="linkUrl"${addAttribute(event.link_url, "value")} class="input-tech" data-astro-cid-uqigzxcc> </div> <div class="md:col-span-6 flex items-center gap-3 py-4" data-astro-cid-uqigzxcc> <input type="checkbox" name="is_featured" id="featured"${addAttribute(event.is_featured, "checked")} class="w-5 h-5 accent-[#facc15]" data-astro-cid-uqigzxcc> <label for="featured" class="text-white font-bold cursor-pointer italic uppercase text-xs tracking-widest" data-astro-cid-uqigzxcc>¿Destacar en Home?</label> </div> <button type="submit" class="md:col-span-6 bg-[#22d3ee] text-black font-black uppercase italic py-4 rounded-xl hover:bg-white transition-all" data-astro-cid-uqigzxcc>
Guardar Cambios
</button> </form> </div> </section> ` })} `;
}, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/admin/editar/[id].astro", void 0);

const $$file = "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/admin/editar/[id].astro";
const $$url = "/admin/editar/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
