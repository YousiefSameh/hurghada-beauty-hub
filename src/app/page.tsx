import { redirect } from 'next/navigation';
import { defaultLocale } from '@/config/locales.config';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}

