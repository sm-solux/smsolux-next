export function isAdminBypassEnabled() {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.ADMIN_BYPASS_AUTH !== "false"
  );
}

export function getAllowedAdminEmails() {
  const raw =
    process.env.ADMIN_ALLOWED_EMAILS ?? process.env.ADMIN_ALLOWED_EMAIL ?? "";

  return raw
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmailAllowed(email?: string | null) {
  if (!email) {
    return false;
  }

  return getAllowedAdminEmails().includes(email.trim().toLowerCase());
}
