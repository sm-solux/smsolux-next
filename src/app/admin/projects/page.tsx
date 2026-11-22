import AdminMessage from "@/components/admin/AdminMessage";
import AdminSection from "@/components/admin/AdminSection";
import { fetchTableRecords } from "@/lib/admin-data";
import { ADMIN_SECTIONS } from "@/lib/admin-config";
import { compareProjects } from "@/utils/project";

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
  // 공개 /project 페이지와 같은 순서로 보여준다.
  const projects = (await fetchTableRecords("projects")).sort(compareProjects);

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
