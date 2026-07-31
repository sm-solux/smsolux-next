export default function AdminMessage({
  message,
  status,
}: {
  message?: string;
  status?: "success" | "error";
}) {
  if (!message) {
    return null;
  }

  const isError = status === "error";

  return (
    <div
      className={`rounded-lg border px-4 py-3 text-sm ${
        isError
          ? "border-red-400/20 bg-red-400/10 text-red-200"
          : "border-[#8CE0F4]/20 bg-[#8CE0F4]/10 text-[#b9effb]"
      }`}
      role={isError ? "alert" : "status"}
    >
      {message}
    </div>
  );
}
