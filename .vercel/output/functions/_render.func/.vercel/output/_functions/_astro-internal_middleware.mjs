import { d as defineMiddleware, s as sequence } from './chunks/index_C3xSA_OV.mjs';
import { s as supabase } from './chunks/supabase_BFS6p0Cy.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Dly-eeYi.mjs';
import 'piccolore';
import './chunks/astro/server_E58ZkMb4.mjs';
import 'clsx';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith("/admin")) {
    const accessToken = context.cookies.get("sb-access-token");
    const refreshToken = context.cookies.get("sb-refresh-token");
    if (!accessToken || !refreshToken) {
      return context.redirect("/login");
    }
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value
    });
    if (error) {
      context.cookies.delete("sb-access-token");
      context.cookies.delete("sb-refresh-token");
      return context.redirect("/login");
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
