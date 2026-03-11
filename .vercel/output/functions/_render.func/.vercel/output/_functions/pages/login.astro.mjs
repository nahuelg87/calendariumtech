import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_E58ZkMb4.mjs';
import 'piccolore';
import { $ as $$MainLayout } from '../chunks/MainLayout_DvcJU73v.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://calendarium.tech");
const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const accessToken = Astro2.cookies.get("sb-access-token");
  if (accessToken) return Astro2.redirect("/admin");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Acceso Admin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-[80vh] flex items-center justify-center p-4"> <div class="w-full max-w-md bg-[#111] border border-white/10 p-8 rounded-3xl shadow-2xl"> <div class="text-center mb-8"> <h1 class="text-3xl font-black italic text-white mb-2">LOGIN <span class="text-[#facc15]">ADMIN</span></h1> <p class="text-white/50 text-sm">Solo personal autorizado de Calendarium.tech</p> </div> <form action="/api/auth/signin" method="post" class="space-y-6"> <div> <label class="block text-xs font-bold uppercase tracking-widest text-[#22d3ee] mb-2">Email</label> <input type="email" name="email" required class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#facc15] outline-none transition-all" placeholder="admin@calendarium.tech"> </div> <div> <label class="block text-xs font-bold uppercase tracking-widest text-[#22d3ee] mb-2">Contraseña</label> <input type="password" name="password" required class="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#facc15] outline-none transition-all" placeholder="••••••••"> </div> <button type="submit" class="w-full bg-[#facc15] text-black font-black uppercase italic py-4 rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(250,204,21,0.2)]">
Entrar al Bunker
</button> </form> </div> </section> ` })}`;
}, "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/login.astro", void 0);

const $$file = "/Users/ngenar01/Library/CloudStorage/OneDrive-dentsu/Repos/calendariumtech/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
