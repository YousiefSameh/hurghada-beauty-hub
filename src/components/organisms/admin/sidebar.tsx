"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Settings, 
  Layers, 
  Syringe, 
  Stethoscope, 
  LogOut 
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const sidebarLinks = [
  { name: "الرئيسية", href: "/admin", icon: LayoutDashboard },
  { name: "الإعدادات العامة", href: "/admin/settings", icon: Settings },
  { name: "الأقسام", href: "/admin/categories", icon: Layers },
  { name: "العلاجات والخدمات", href: "/admin/treatments", icon: Syringe },
  { name: "الطبيب", href: "/admin/doctor", icon: Stethoscope },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col transition-all shadow-xl z-10">
      <div className="p-6 mb-4">
        <h1 className="text-2xl font-bold text-amber-500 tracking-wider">
          Beauty Hub
        </h1>
        <p className="text-xs text-slate-400 mt-1">نظام إدارة المحتوى (CMS)</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive 
                  ? "bg-amber-500/10 text-amber-500 font-bold" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white font-medium"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-red-400 rounded-lg hover:bg-red-500/10 transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
}