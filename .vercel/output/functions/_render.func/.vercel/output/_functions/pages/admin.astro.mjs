import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_E58ZkMb4.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_DvcJU73v.mjs';
import { s as supabase } from '../chunks/supabase_BFS6p0Cy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: events } = await supabase.from("events").select(`
    *,
    event_tags (
      track_name
    )
  `).order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Panel de Control", "data-astro-cid-u2h3djql": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto p-6" data-astro-cid-u2h3djql> <header class="flex justify-between items-center mb-12" data-astro-cid-u2h3djql> <div data-astro-cid-u2h3djql> <h1 class="text-4xl font-black italic text-white" data-astro-cid-u2h3djql>DASHBOARD</h1> <p class="text-white/50 font-mono text-xs uppercase tracking-tighter" data-astro-cid-u2h3djql>
Gestionando ${events?.length || 0} eventos en el búnker
</p> </div> <div class="flex gap-4" data-astro-cid-u2h3djql> <a href="/admin/nuevo" class="bg-[#facc15] text-black font-black italic px-6 py-3 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.2)]" data-astro-cid-u2h3djql>
+ NUEVO EVENTO
</a> <form action="/api/auth/signout" method="post" data-astro-cid-u2h3djql> <button class="border border-white/10 text-white/50 px-6 py-3 rounded-xl hover:bg-red-500/20 hover:text-red-500 transition-all font-bold text-xs uppercase tracking-widest" data-astro-cid-u2h3djql>
Salir
</button> </form> </div> </header> <div class="grid gap-4" data-astro-cid-u2h3djql> ${events?.map((event) => {
    const tracksList = event.event_tags?.map((t) => t.track_name) || [];
    const displayTracks = tracksList.length > 0 ? tracksList.join(" \u2022 ") : "Sin categor\xEDa";
    return renderTemplate`<div class="bg-[#111] border border-white/5 p-4 rounded-2xl flex items-center justify-between group hover:border-[#22d3ee]/30 transition-all duration-500" data-astro-cid-u2h3djql> <div class="flex items-center gap-6" data-astro-cid-u2h3djql>  <div class="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center group-hover:border-[#facc15]/50 transition-colors" data-astro-cid-u2h3djql> <span class="text-[#facc15] font-black text-xl leading-none" data-astro-cid-u2h3djql>${event.date.split("-")[2]}</span> <span class="text-white/30 text-[9px] font-bold uppercase" data-astro-cid-u2h3djql>${new Date(event.date).toLocaleString("es", { month: "short" })}</span> </div> <div data-astro-cid-u2h3djql> <h3 class="text-white font-bold text-lg group-hover:text-[#facc15] transition-colors" data-astro-cid-u2h3djql>${event.title}</h3> <p class="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium" data-astro-cid-u2h3djql> <span class="text-[#22d3ee]" data-astro-cid-u2h3djql>${displayTracks}</span> — ${event.location} </p> </div> </div> <div class="flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0" data-astro-cid-u2h3djql> <a${addAttribute(`/admin/editar/${event.id}`, "href")} class="p-2 text-white/30 hover:text-[#facc15] transition-colors" title="Editar" data-astro-cid-u2h3djql> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-u2h3djql> <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" data-astro-cid-u2h3djql></path> <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" data-astro-cid-u2h3djql></path> </svg> </a>  <form action="/api/events/delete" method="POST" onsubmit="return confirm('¿Estás seguro, Nahuel? Se va a borrar el evento y sus relaciones.');" data-astro-cid-u2h3djql> <input type="hidden" name="id"${addAttribute(event.id, "value")} data-astro-cid-u2h3djql> <button type="submit" class="p-2 text-white/30 hover:text-red-500 transition-colors" title="Eliminar" data-astro-cid-u2h3djql> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-u2h3djql><path d="M3 6h18" data-astro-cid-u2h3djql></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" data-astro-cid-u2h3djql></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" data-astro-cid-u2h3djql></path></svg> </button> </form> </div> </div>`;
  })} ${events?.length === 0 && renderTemplate`<div class="py-20 text-center border-2 border-dashed border-white/5 rounded-3xl" data-astro-cid-u2h3djql> <p class="text-white/20 uppercase tracking-widest text-xs font-bold italic" data-astro-cid-u2h3djql>No hay misiones activas en la agenda</p> </div>`} </div> </div> ` })} `;
}, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/admin/index.astro", void 0);

const $$file = "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
