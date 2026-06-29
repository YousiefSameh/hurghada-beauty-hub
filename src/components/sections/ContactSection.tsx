'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, MapPin, Phone, Mail, Clock3, MessageCircle, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import * as z from 'zod';

import { Button } from '@/components/atoms/button';
import { Card, CardContent } from '@/components/atoms/card';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { Textarea } from '@/components/atoms/textarea';
import Link from 'next/link';

export default function ContactSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const formSchema = z.object({
    name: z.string().min(2, t('homepage.contact.errors.name') || 'Name is required'),
    country: z.string().min(2, t('homepage.contact.errors.country') || 'Country is required'),
    email: z.string().email(t('homepage.contact.errors.email') || 'Invalid email address'),
    phone: z.string().min(8, t('homepage.contact.errors.phone') || 'Phone is required'),
    treatment: z.string().min(2, t('homepage.contact.errors.treatment') || 'Treatment is required'),
    date: z.string().min(1, t('homepage.contact.errors.date') || 'Date is required'),
    message: z
      .string()
      .min(10, t('homepage.contact.errors.message') || 'Message must be at least 10 characters'),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitStatus({ type: null, message: '' });

    // 🔍 سطر الاختبار: قم بإضافة هذا السطر مؤقتاً لمراقبة القيم في الـ Console بالمتصفح
    console.log('EmailJS Config Check:', {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          country: data.country,
          email: data.email,
          phone: data.phone,
          treatment: data.treatment,
          date: data.date,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus({
        type: 'success',
        message: t('homepage.contact.successMessage'),
      });
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: t('homepage.contact.errorMessage'),
      });
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#f7f1ea] py-24 sm:py-28">
      <div className="mx-auto container px-4 md:px-0">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
            {t('homepage.contact.sectionLabel')}
          </p>

          <h2
            className={`text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl ${
              !isArabic ? 'font-serif italic' : ''
            }`}
          >
            {t('homepage.contact.titleStart')}{' '}
            <span className="text-primary">{t('homepage.contact.titleStrong')}</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
            {t('homepage.contact.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Side - Contact Info & Map */}
          <div className="space-y-6 lg:col-span-6">
            <Card className="overflow-hidden border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm">
              <CardContent className="space-y-6 p-7">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">
                      {t('homepage.contact.addressLabel')}
                    </p>
                    <p className="mt-2 text-base leading-7 text-foreground/80">
                      {t('homepage.contact.address')}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/5 bg-[#fff8f1] p-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                        {t('homepage.contact.phoneLabel')}
                      </span>
                    </div>
                    <a
                      href="tel:+201277702008"
                      className="mt-3 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      +20 127 770 2008
                    </a>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-[#fff8f1] p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                        {t('homepage.contact.emailLabel')}
                      </span>
                    </div>
                    <a
                      href="mailto:alaazaki.beautyhub@gmail.com"
                      className="mt-3 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      alaazaki.beautyhub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white p-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/60">
                      {t('homepage.contact.hoursLabel')}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm text-foreground/75">
                    <div className="flex items-center justify-between gap-4">
                      <span>{t('homepage.contact.workingHours.saturdayToThursday.days')}</span>
                      <span>{t('homepage.contact.workingHours.saturdayToThursday.time')}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span>{t('homepage.contact.workingHours.friday.days')}</span>
                      <span>{t('homepage.contact.workingHours.friday.time')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://wa.me/201277702008"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full cursor-pointer rounded-full px-6 py-6 text-xs font-semibold uppercase tracking-widest shadow-lg">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t('homepage.contact.whatsapp')}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden py-0 border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="h-[420px] w-full">
                  <iframe
                    title="Hurghada Beauty Hub Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.7615146536627!2d33.825076710411295!3d27.195231376381813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287ea909dbcd1%3A0xde9ecc850f5c3b40!2sBeauty%20Hub%20Hurghada!5e0!3m2!1sen!2seg!4v1782251882543!5m2!1sen!2seg"
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <div className="lg:col-span-6 h-full" id="contact-form">
            <Card className="h-full overflow-hidden border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm">
              <CardContent className="p-7 sm:p-8">
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                    {t('homepage.contact.formLabel')}
                  </p>
                  <h3
                    className={`mt-3 text-3xl font-semibold text-foreground sm:text-4xl ${
                      !isArabic ? 'font-serif italic' : ''
                    }`}
                  >
                    {t('homepage.contact.formTitle')}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/65">
                    {t('homepage.contact.formSubtitle')}
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('homepage.contact.fields.name')}</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder={t('homepage.contact.placeholders.name')}
                      className={`h-12 rounded-2xl bg-white ${errors.name ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">{t('homepage.contact.fields.country')}</Label>
                    <Input
                      id="country"
                      {...register('country')}
                      placeholder={t('homepage.contact.placeholders.country')}
                      className={`h-12 rounded-2xl bg-white ${errors.country ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.country && (
                      <span className="text-xs text-red-500">{errors.country.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('homepage.contact.fields.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder={t('homepage.contact.placeholders.email')}
                      className={`h-12 rounded-2xl bg-white ${errors.email ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">{errors.email.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('homepage.contact.fields.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      placeholder={t('homepage.contact.placeholders.phone')}
                      className={`h-12 rounded-2xl bg-white ${errors.phone ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500">{errors.phone.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="treatment">{t('homepage.contact.fields.treatment')}</Label>
                    <Input
                      id="treatment"
                      {...register('treatment')}
                      placeholder={t('homepage.contact.placeholders.treatment')}
                      className={`h-12 rounded-2xl bg-white ${errors.treatment ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.treatment && (
                      <span className="text-xs text-red-500">{errors.treatment.message}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">{t('homepage.contact.fields.date')}</Label>
                    <Input
                      id="date"
                      type="date"
                      {...register('date')}
                      className={`h-12 rounded-2xl bg-white ${errors.date ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.date && (
                      <span className="text-xs text-red-500">{errors.date.message}</span>
                    )}
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="message">{t('homepage.contact.fields.message')}</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder={t('homepage.contact.placeholders.message')}
                      className={`min-h-[160px] rounded-2xl bg-white ${errors.message ? 'border-red-500' : 'border-black/10'}`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500">{errors.message.message}</span>
                    )}
                  </div>

                  {/* رسالة النجاح أو الخطأ */}
                  {submitStatus.type && (
                    <div
                      className={`md:col-span-2 p-3 rounded-lg text-sm ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-6 text-foreground/55">
                      {t('homepage.contact.formNote')}
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full px-8 py-6 text-xs font-semibold uppercase tracking-widest shadow-lg min-w-[160px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t('homepage.contact.submitting') || 'Sending...'}
                        </>
                      ) : (
                        <>
                          {t('homepage.contact.submit')}
                          <ArrowRight className={`ml-2 h-4 w-4 ${isArabic ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
