import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent, l as renderScript } from '../chunks/astro/server_E58ZkMb4.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_DvcJU73v.mjs';
import 'clsx';
/* empty css                                 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Stage, OrbitControls, useGLTF } from '@react-three/drei';
import { s as supabase } from '../chunks/supabase_BFS6p0Cy.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://calendarium.tech");
const $$EventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventCard;
  const {
    title = "Evento sin título",
    date = "",
    event_tags = [],
    image_url = "",
    location = "TBA",
    link_url = "",
    // Cambiado para que coincida con la DB
    is_featured = false
  } = Astro2.props;
  const tracksList = event_tags?.map((t) => t.track_name).filter(Boolean) || [];
  tracksList.length > 0 ? tracksList.join(", ") : "General";
  const dataFilterString = tracksList.join(" ");
  const safeDate = date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const fechaEvento = /* @__PURE__ */ new Date(safeDate + "T00:00:00");
  const hoy = /* @__PURE__ */ new Date();
  hoy.setHours(0, 0, 0, 0);
  const estaFinalizado = fechaEvento < hoy;
  const fechaFormateada = fechaEvento.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).replace(".", "");
  const eventSlug = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
  const fullShareUrl = `https://calendarium.tech/#${eventSlug}`;
  const CLOUD_NAME = "dapgfpvv9";
  const getOptimizedImage = (url) => {
    const cleanUrl = url?.trim() || "";
    if (!cleanUrl || !CLOUD_NAME) return "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop";
    const transformations = "w_800,c_fill,g_auto,f_auto,q_auto";
    return cleanUrl.includes("cloudinary.com") ? cleanUrl.replace("/upload/", `/upload/${transformations}/`) : `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${transformations}/${encodeURIComponent(cleanUrl)}`;
  };
  const optimizedUrl = getOptimizedImage(image_url);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(dataFilterString, "data-card-track")}${addAttribute(`event-card group reveal ${is_featured ? "featured" : ""} ${estaFinalizado ? "is-past" : ""}`, "class")} data-astro-cid-h4bw6n5x> ${is_featured && !estaFinalizado && renderTemplate`<span class="featured-badge" data-astro-cid-h4bw6n5x>DESTACADO</span>`} ${estaFinalizado && renderTemplate`<span class="past-badge" data-astro-cid-h4bw6n5x>FINALIZADO</span>`} <img${addAttribute(optimizedUrl, "src")}${addAttribute(title, "alt")} class="card-image" loading="lazy" data-astro-cid-h4bw6n5x> <div class="card-content" data-astro-cid-h4bw6n5x> <div class="card-info" data-astro-cid-h4bw6n5x> <div class="flex flex-wrap gap-2 mb-2" data-astro-cid-h4bw6n5x> ${tracksList.map((tName) => renderTemplate`<span class="track-tag" data-astro-cid-h4bw6n5x>${tName}</span>`)} ${tracksList.length === 0 && renderTemplate`<span class="track-tag" data-astro-cid-h4bw6n5x>General</span>`} </div> <h3 class="card-title" data-astro-cid-h4bw6n5x>${title}</h3> <p class="card-meta" data-astro-cid-h4bw6n5x>${fechaFormateada} • ${location}</p> </div> <div class="btn-container" data-astro-cid-h4bw6n5x> ${estaFinalizado ? renderTemplate`<button class="btn-inscribirse btn-finalizado" disabled data-astro-cid-h4bw6n5x>Finalizado</button>` : renderTemplate`<div class="flex gap-2 items-center pointer-events-auto" data-astro-cid-h4bw6n5x> <a${addAttribute(link_url || "#", "href")} target="_blank"${addAttribute(`btn-inscribirse ${!link_url ? "btn-disabled opacity-50" : ""}`, "class")} data-astro-cid-h4bw6n5x> ${link_url ? "Inscribirse" : "Próximamente"} </a> <button class="btn-utility share-btn"${addAttribute(title, "data-title")}${addAttribute(fullShareUrl, "data-url")} title="Compartir" data-astro-cid-h4bw6n5x> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4bw6n5x><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" data-astro-cid-h4bw6n5x></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" data-astro-cid-h4bw6n5x></path></svg> </button> <div class="calendar-dropdown" data-astro-cid-h4bw6n5x> <button class="btn-utility" title="Agendar" data-astro-cid-h4bw6n5x> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-h4bw6n5x><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-h4bw6n5x></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-h4bw6n5x></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-h4bw6n5x></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-h4bw6n5x></line></svg> </button> </div> </div>`} </div> </div> </div> `;
}, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/components/EventCard.astro", void 0);

function Model() {
  const { scene } = useGLTF("/models/calendarium.glb", "https://www.gstatic.com/draco/versioned/decoders/1.5.7/");
  return /* @__PURE__ */ jsx("primitive", { object: scene, scale: 1.5 });
}
function Hero3D() {
  return (
    /* Fix: de 250x a 250px. Cambiamos width a 100% para que no desborde el contenedor de Astro */
    /* @__PURE__ */ jsx("div", { style: { height: "500px", width: "100%", cursor: "grab" }, children: /* @__PURE__ */ jsx(Canvas, { shadows: true, dpr: [1, 2], children: /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
      /* @__PURE__ */ jsx(PerspectiveCamera, { makeDefault: true, position: [0, 4, 5], fov: 50 }),
      /* @__PURE__ */ jsx(
        Stage,
        {
          environment: "city",
          intensity: 0.6,
          contactShadow: { opacity: 0.5, blur: 2 },
          adjustCamera: false,
          center: true,
          children: /* @__PURE__ */ jsx(Model, {})
        }
      ),
      /* @__PURE__ */ jsx(
        OrbitControls,
        {
          enableZoom: false,
          autoRotate: true,
          autoRotateSpeed: 0.5,
          makeDefault: true
        }
      )
    ] }) }) })
  );
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: tracks } = await supabase.from("tracks").select("name").order("name", { ascending: true });
  const { data: events, error } = await supabase.from("events").select(`*, event_tags ( track_name )`).order("is_featured", { ascending: false }).order("date", { ascending: true });
  if (error) console.error("Error de SysAdmin en Supabase:", error.message);
  const hoyStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const upcomingEvents = events?.filter((e) => (e.date || "2026-01-01") >= hoyStr) || [];
  const pastEvents = events?.filter((e) => (e.date || "2026-01-01") < hoyStr) || [];
  const sortedEvents = [...upcomingEvents, ...pastEvents];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Eventos Tech" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col md:flex-row items-center justify-center pt-6 pb-8 gap-4 md:gap-12"> <h1 class="text-4xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-none text-center md:text-left text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
Calendarium<span class="text-yellow-400">.tech</span> </h1> <div class="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"> ${renderComponent($$result2, "Hero3D", Hero3D, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/components/Hero3D.jsx", "client:component-export": "default" })} </div> </section> <div class="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div> <nav class="flex justify-center md:justify-between items-center mb-8 gap-8"> <button id="open-filters" class="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-500 text-xs font-black uppercase italic tracking-[0.2em] relative z-20"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M22 3H2l8 9v7l4 3v-10L22 3z"></path></svg>
Filtros
</button> <div class="hidden md:flex bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 backdrop-blur-xl"> <button id="grid-btn" class="p-4 bg-white/10 rounded-xl text-white shadow-2xl"> <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> </button> <button id="list-btn" class="p-4 text-white/20 hover:text-white transition-all"> <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><path d="M3 6h.01M3 12h.01M3 18h.01"></path></svg> </button> </div> </nav> <aside id="filter-sidebar" class="fixed inset-y-0 right-0 w-72 bg-black/95 backdrop-blur-3xl border-l border-white/10 z-[200] translate-x-full transition-transform duration-500"> <div class="p-8 h-full flex flex-col"> <div class="flex justify-between items-center mb-8"> <h2 class="text-2xl font-black italic uppercase tracking-tighter text-white">Tracks</h2> <button id="close-filters" class="p-2 hover:bg-white/10 rounded-full text-white"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg> </button> </div> <div class="space-y-3"> <button class="filter-btn w-full text-left px-5 py-3 rounded-xl border border-white/20 bg-white/10 text-xs font-bold text-white hover:border-white transition-all uppercase italic" data-track="all">Todos los eventos</button> ${tracks?.map((t) => renderTemplate`<button class="filter-btn w-full text-left px-5 py-3 rounded-xl border border-white/5 bg-white/5 text-xs font-bold text-white hover:border-white transition-all uppercase italic"${addAttribute(t.name, "data-track")}>${t.name}</button>`)} </div> </div> </aside> <div id="sidebar-overlay" class="fixed inset-0 bg-black/80 opacity-0 pointer-events-none transition-opacity duration-500 z-[150]"></div> <main id="events-container" class="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10 transition-all duration-500"> ${sortedEvents.map((event) => {
    const eventId = event.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
    return renderTemplate`<div${addAttribute(eventId, "id")} class="scroll-mt-28 transition-all duration-500"> ${renderComponent($$result2, "EventCard", $$EventCard, { ...event })} </div>`;
  })} </main> ` })} ${renderScript($$result, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/index.astro", void 0);

const $$file = "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
