import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "بوابة الإدارة | Hurghada Beauty Hub",
  description: "لوحة التحكم الآمنة لـ Hurghada Beauty Hub",
};

const IBMPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-IBM-Plex-Sans-Arabic',
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${IBMPlexSansArabic.className} bg-zinc-950 antialiased selection:bg-amber-400 selection:text-zinc-950`}>
        {children}
      </body>
    </html>
  );
}