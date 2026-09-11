import AdminMessage from "@/components/admin/AdminMessage";
import AdminSection from "@/components/admin/AdminSection";
import { fetchTableRecords } from "@/lib/admin-data";
import { ADMIN_SECTIONS } from "@/lib/admin-config";

type SearchParams = Promise<{
  message?: string;
  status?: "success" | "error";
}>;

export default async function AdminSettingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { message, status } = await searchParams;
  const settings = await fetchTableRecords("site_settings", {
    orderBy: "key",
    ascending: true,
  });

  return (
    <div className="space-y-6">
      <AdminMessage message={message} status={status} />
      <AdminSection
        section={ADMIN_SECTIONS.siteSettings}
        records={settings as Record<string, unknown>[]}
        editMode="modal"
      />
    </div>
  );
}
