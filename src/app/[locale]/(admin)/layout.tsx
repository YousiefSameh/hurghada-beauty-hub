export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-brand-dark-950">
      <aside className="w-64 border-r border-brand-gold/10 bg-brand-dark-900 flex flex-col p-6 gap-6">
        <div className="font-serif text-brand-gold text-lg font-bold tracking-wide">
          Hub Admin
        </div>
        <nav className="flex flex-col gap-2 text-sm font-medium text-brand-light-200">
          <span className="px-3 py-2 rounded-md bg-brand-dark-800 text-brand-gold cursor-pointer">Dashboard</span>
          <span className="px-3 py-2 rounded-md hover:bg-brand-dark-800 hover:text-white cursor-pointer">Appointments</span>
          <span className="px-3 py-2 rounded-md hover:bg-brand-dark-800 hover:text-white cursor-pointer">Patients</span>
          <span className="px-3 py-2 rounded-md hover:bg-brand-dark-800 hover:text-white cursor-pointer">Leads</span>
          <span className="px-3 py-2 rounded-md hover:bg-brand-dark-800 hover:text-white cursor-pointer">Settings</span>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col p-8">{children}</main>
    </div>
  );
}
