import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Sidebar from "@/components/organisms/admin/sidebar";

export const metadata = {
  title: "لوحة التحكم | Hurghada Beauty Hub",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  return (
    <html lang="ar" dir="rtl"> 
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}