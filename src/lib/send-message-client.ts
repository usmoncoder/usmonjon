export type ContactState = {
  status: "idle" | "success" | "error";
  message: string | null;
};

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

function parse(formData: FormData): ContactPayload {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    subject: String(formData.get("subject") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    honeypot: String(formData.get("company") ?? "").trim(),
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? "";
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? "";

export async function sendMessageClient(
  formData: FormData,
): Promise<ContactState> {
  const payload = parse(formData);

  if (payload.honeypot.length > 0) {
    return { status: "success", message: null };
  }

  if (
    payload.name.length < 2 ||
    !isValidEmail(payload.email) ||
    payload.message.length < 10
  ) {
    return { status: "error", message: null };
  }

  if (!BOT_TOKEN || !CHAT_ID) {
    window.location.href = `mailto:usmonjon@usmonjon.site?subject=${encodeURIComponent(payload.subject || "Contact")}&body=${encodeURIComponent(`From: ${payload.name} (${payload.email})\n\n${payload.message}`)}`;
    return { status: "success", message: null };
  }

  const text = [
    "<b>usmonjon.site — new message</b>",
    "",
    `<b>Name:</b> ${escapeHtml(payload.name)}`,
    `<b>Email:</b> ${escapeHtml(payload.email)}`,
    payload.subject ? `<b>Subject:</b> ${escapeHtml(payload.subject)}` : null,
    "",
    escapeHtml(payload.message),
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!response.ok) {
      return { status: "error", message: null };
    }

    return { status: "success", message: null };
  } catch {
    return { status: "error", message: null };
  }
}
