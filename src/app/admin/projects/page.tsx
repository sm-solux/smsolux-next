import AdminMessage from "@/components/admin/AdminMessage";
import AdminSection from "@/components/admin/AdminSection";
import { fetchTableRecords } from "@/lib/admin-data";
import { ADMIN_SECTIONS } from "@/lib/admin-config";

type SearchParams = Promise<{
  message?: string;
  status?: "success" | "error";
}>;

export default async function AdminProjectsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { message, status } = await searchParams;
  const projects = await fetchTableRecords("projects", {
    orderBy: "generation",
    ascending: false,
  });

  return (
    <div className="space-y-6">
      <AdminMessage message={message} status={status} />
      <AdminSection
        section={ADMIN_SECTIONS.projects}
        records={projects as Record<string, unknown>[]}
        createMode="modal"
        editMode="modal"
      />
    </div>
  );
}
