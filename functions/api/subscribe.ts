interface SubscriberStore {
  put(key: string, value: string): Promise<void>;
}

interface Env {
  SUBSCRIBERS?: SubscriberStore;
}

interface PagesContext {
  request: Request;
  env: Env;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function subscriberKey(email: string) {
  const bytes = new TextEncoder().encode(email);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return `subscriber:${Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

export async function onRequestPost(context: PagesContext) {
  const formData = await context.request.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();

  if (!isValidEmail(email)) {
    return new Response("Please enter a valid email address.", { status: 400 });
  }

  if (!context.env.SUBSCRIBERS) {
    return new Response("Email signup is not configured yet.", { status: 503 });
  }

  await context.env.SUBSCRIBERS.put(
    await subscriberKey(email),
    JSON.stringify({ email, subscribedAt: new Date().toISOString() }),
  );

  return Response.redirect(new URL("/thank-you/", context.request.url).toString(), 303);
}
