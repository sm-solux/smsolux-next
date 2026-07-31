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
          ? "border-red-200 bg-red-50 text-red-700"
          : "border-emerald-200 bg-emerald-50 text-emerald-800"
      }`}
      role={isError ? "alert" : "status"}
    >
      {message}
    </div>
  );
}
