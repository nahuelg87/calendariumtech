import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_E58ZkMb4.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DvcJU73v.mjs';
import { s as supabase } from '../../chunks/supabase_BFS6p0Cy.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const prerender = false;
const $$Nuevo = createComponent(async ($$result, $$props, $$slots) => {
  const { data: allTracks } = await supabase.from("tracks").select("name").order("name", { ascending: true });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Nuevo Evento", "data-astro-cid-zszbgvjf": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-4xl mx-auto p-6" data-astro-cid-zszbgvjf> <a href="/admin" class="text-white/30 hover:text-[#facc15] text-xs font-bold uppercase tracking-widest mb-8 inline-block" data-astro-cid-zszbgvjf>← Volver al Dashboard</a> <div class="bg-[#111] border border-white/10 p-10 rounded-3xl shadow-2xl" data-astro-cid-zszbgvjf> <header class="mb-10" data-astro-cid-zszbgvjf> <h1 class="text-3xl font-black italic text-white" data-astro-cid-zszbgvjf>NUEVO <span class="text-[#facc15]" data-astro-cid-zszbgvjf>EVENTO</span></h1> <p class="text-white/30 text-sm mt-2 font-mono uppercase tracking-tighter" data-astro-cid-zszbgvjf>Multi-track System Active</p> </header> <form action="/api/events/create" method="post" class="grid grid-cols-1 md:grid-cols-6 gap-6" data-astro-cid-zszbgvjf> <div class="md:col-span-6" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Nombre del Evento</label> <input type="text" name="title" required placeholder="Ej: Nerdearla 2026" class="input-tech" data-astro-cid-zszbgvjf> </div> <div class="md:col-span-3" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Fecha</label> <input type="date" name="date" required class="input-tech" data-astro-cid-zszbgvjf> </div> <div class="md:col-span-3" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Ubicación</label> <input type="text" name="location" required placeholder="CABA, Virtual, etc." class="input-tech" data-astro-cid-zszbgvjf> </div> <div class="md:col-span-2" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Track 1 (Principal)</label> <select name="track_1" required class="input-tech" data-astro-cid-zszbgvjf> <option value="" data-astro-cid-zszbgvjf>Seleccionar...</option> ${allTracks?.map((track) => renderTemplate`<option${addAttribute(track.name, "value")} data-astro-cid-zszbgvjf>${track.name}</option>`)} </select> </div> <div class="md:col-span-2" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Track 2 (Opcional)</label> <select name="track_2" class="input-tech" data-astro-cid-zszbgvjf> <option value="" data-astro-cid-zszbgvjf>Ninguno</option> ${allTracks?.map((track) => renderTemplate`<option${addAttribute(track.name, "value")} data-astro-cid-zszbgvjf>${track.name}</option>`)} </select> </div> <div class="md:col-span-2" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Track 3 (Opcional)</label> <select name="track_3" class="input-tech" data-astro-cid-zszbgvjf> <option value="" data-astro-cid-zszbgvjf>Ninguno</option> ${allTracks?.map((track) => renderTemplate`<option${addAttribute(track.name, "value")} data-astro-cid-zszbgvjf>${track.name}</option>`)} </select> </div> <div class="md:col-span-3" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Imagen (URL)</label> <input type="url" name="imageUrl" required placeholder="https://..." class="input-tech" data-astro-cid-zszbgvjf> </div> <div class="md:col-span-3" data-astro-cid-zszbgvjf> <label class="label-tech" data-astro-cid-zszbgvjf>Link Registro</label> <input type="url" name="linkUrl" placeholder="https://..." class="input-tech" data-astro-cid-zszbgvjf> </div> <div class="md:col-span-6 flex items-center gap-3 py-4" data-astro-cid-zszbgvjf> <input type="checkbox" name="is_featured" id="featured" class="w-5 h-5 accent-[#facc15]" data-astro-cid-zszbgvjf> <label for="featured" class="text-white font-bold cursor-pointer italic uppercase text-xs tracking-widest" data-astro-cid-zszbgvjf>¿Destacar en Home?</label> </div> <button type="submit" class="md:col-span-6 bg-[#facc15] text-black font-black uppercase italic py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(250,204,21,0.2)]" data-astro-cid-zszbgvjf>
Publicar en Calendarium.tech
</button> </form> </div> </section> ` })} `;
}, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/admin/nuevo.astro", void 0);

const $$file = "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/admin/nuevo.astro";
const $$url = "/admin/nuevo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nuevo,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
