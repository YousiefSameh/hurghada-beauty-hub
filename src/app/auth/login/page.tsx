'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authClient } from '@/lib/auth-client';
import { Loader2, Lock, Mail } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/atoms/form';
import { Input } from '@/components/atoms/input';
import { Button } from '@/components/atoms/button';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'حقل البريد الإلكتروني مطلوب.' })
    .email({ message: 'البريد الإلكتروني المدخل غير صالح.' }),
  password: z
    .string()
    .min(1, { message: 'حقل كلمة المرور مطلوب.' })
    .min(6, { message: 'كلمة المرور يجب ألا تقل عن 6 أحرف.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LuxuryAdminLoginArabic() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur'
  });

  const onSubmit = async (values: LoginFormValues) => {
    setLoading(true);
    setErrorMsg('');

    const { error } = await authClient.signIn.email({
      email: values.email,
      password: values.password,
      rememberMe: true,
    });

    if (error) {
      setErrorMsg(error.message || 'بيانات الدخول غير صحيحة. حاول مرة أخرى.');
      setLoading(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      
      {/* القسم الأيمن: الفورم مع Shadcn UI */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-hidden">
        
        {/* إضاءة خافتة (Ambient Glow) خلف الكارت */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="w-full max-w-md text-center space-y-10 relative z-10">
          
          {/* الهيدر والبراندينج */}
          <div className="space-y-3">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/90 block mb-1">
              بوابة المدير المسؤول
            </span>
            <h1 className="text-3xl font-extralight tracking-tight text-white">
              Hurghada <span className="font-medium text-primary">Beauty Hub</span>
            </h1>
            <p className="text-zinc-500 text-sm font-light">
              الرجاء إدخال بيانات الاعتماد الخاصة بك للوصول إلى لوحة التحكم.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2 text-right">
                    <FormLabel className="text-xs font-medium text-zinc-400 tracking-wide">
                      البريد الإلكتروني
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          {...field}
                          type="email" 
                          disabled={loading}
                          className="w-full h-12 bg-zinc-900/40 border-zinc-800/80 rounded-xl pl-4 pr-11 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40 transition-all duration-300 text-left dir-ltr"
                          placeholder="admin@hurghadabeautyhub.com"
                        />
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-400 font-light" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-2 text-right">
                    <FormLabel className="text-xs font-medium text-zinc-400 tracking-wide">
                      كلمة المرور
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          {...field}
                          type="password" 
                          disabled={loading}
                          className="w-full h-12 bg-zinc-900/40 border-zinc-800/80 rounded-xl pl-4 pr-11 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-amber-400/40 focus-visible:border-amber-400/40 transition-all duration-300 text-left dir-ltr"
                          placeholder="••••••••"
                        />
                        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-400 font-light" />
                  </FormItem>
                )}
              />

              {errorMsg && (
                <div className="text-xs text-red-400 bg-red-500/5 border border-red-500/20 p-4 rounded-xl animate-fade-in font-light text-right">
                  {errorMsg}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-12 font-medium tracking-wide text-sm rounded-xl mt-2 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'تسجيل الدخول إلى اللوحة'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* القسم الأيسر: الصورة الجمالية الفخمة */}
      <div className="hidden lg:block relative w-1/2 overflow-hidden border-r border-zinc-900">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 hover:scale-105"
          style={{ backgroundImage: "url('/assets/images/admin-login.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-l from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>

    </div>
  );
}