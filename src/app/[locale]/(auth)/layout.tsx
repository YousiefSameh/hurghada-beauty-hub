export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex items-center justify-center bg-brand-dark-950 p-6">
      <div className="w-full max-w-md bg-brand-dark-900 border border-brand-gold/10 p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
        <div className="text-center flex flex-col gap-2">
          <span className="font-serif text-brand-gold text-2xl font-bold tracking-wide">BEAUTY HUB</span>
          <span className="text-brand-light-200 text-xs uppercase tracking-widest">Clinic Portal</span>
        </div>
        {children}
      </div>
    </div>
  );
}
