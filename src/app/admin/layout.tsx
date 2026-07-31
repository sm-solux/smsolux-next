import AdminShell from "@/components/admin/AdminShell";
import { isAdminBypassEnabled } from "@/lib/admin-access";
import { hasSupabaseServiceRoleKey } from "@/lib/supabase-admin";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AdminShell
      isBypassed={isAdminBypassEnabled()}
      hasServiceRoleKey={hasSupabaseServiceRoleKey()}
    >
      {children}
    </AdminShell>
  );
}
