import AdminMessage from "@/components/admin/AdminMessage";
import AdminSection from "@/components/admin/AdminSection";
import { fetchTableRecords } from "@/lib/admin-data";
import { ADMIN_SECTIONS } from "@/lib/admin-config";
import { sortReviewsByGeneration } from "@/lib/review";

type SearchParams = Promise<{
  message?: string;
  status?: "success" | "error";
}>;

export default async function AdminHomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { message, status } = await searchParams;
  const reviews = sortReviewsByGeneration(await fetchTableRecords("reviews"));

  return (
    <div className="space-y-6">
      <AdminMessage message={message} status={status} />
      <AdminSection
        section={ADMIN_SECTIONS.reviews}
        records={reviews as Record<string, unknown>[]}
        recordLayout="grid"
        createMode="modal"
        editMode="modal"
      />
    </div>
  );
}
