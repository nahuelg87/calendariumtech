// src/middleware.ts
import { defineMiddleware } from "astro:middleware";
import { supabase } from "./lib/supabase"; // Tu cliente de supabase

export const onRequest = defineMiddleware(async (context, next) => {
  // Solo protegemos las rutas que empiecen con /admin
  if (context.url.pathname.startsWith("/admin")) {
    const accessToken = context.cookies.get("sb-access-token");
    const refreshToken = context.cookies.get("sb-refresh-token");

    if (!accessToken || !refreshToken) {
      return context.redirect("/login");
    }

    // Verificamos la sesión con Supabase
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken.value,
      refresh_token: refreshToken.value,
    });

    if (error) {
      context.cookies.delete("sb-access-token");
      context.cookies.delete("sb-refresh-token");
      return context.redirect("/login");
    }
  }

  return next();
});