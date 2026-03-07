export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase"; // Ajustá la ruta a tu cliente de Supabase

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email y contraseña obligatorios", { status: 400 });
  }

  // 1. Intentamos loguear en Supabase
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new Response(error.message, { status: 401 });
  }

  // 2. Extraemos los tokens
  const { access_token, refresh_token } = data.session;

  // 3. Setiamos las cookies (Modo SysAdmin: Seguras y Privadas)
  cookies.set("sb-access-token", access_token, { path: "/", httpOnly: true, secure: true });
  cookies.set("sb-refresh-token", refresh_token, { path: "/", httpOnly: true, secure: true });

  // 4. Redirigimos al Dashboard
  return redirect("/admin");
};