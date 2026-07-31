import AdminMessage from "@/components/admin/AdminMessage";
import AdminSection from "@/components/admin/AdminSection";
import { fetchTableRecords } from "@/lib/admin-data";
import { ADMIN_SECTIONS } from "@/lib/admin-config";

type SearchParams = Promise<{
  message?: string;
  status?: "success" | "error";
}>;

export default async function AdminLinksPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { message, status } = await searchParams;
  const footerLinks = await fetchTableRecords("footer_links", {
    orderBy: "order_index",
    ascending: true,
  });

  return (
    <div className="space-y-6">
      <AdminMessage message={message} status={status} />
      <AdminSection
        section={ADMIN_SECTIONS.footerLinks}
        records={footerLinks as Record<string, unknown>[]}
        recordLayout="grid"
        createMode="modal"
        editMode="modal"
      />
    </div>
  );
}
