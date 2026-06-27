"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";

interface CategoryFormValues {
  slug: string;
  name: {
    ar: string;
    en: string;
    ru: string;
    fr: string;
    de: string;
    es: string;
  };
}

export default function CategoryForm() {
  const [isTranslating, setIsTranslating] = useState(false);

  const form = useForm<CategoryFormValues>({
    defaultValues: {
      slug: "",
      name: { ar: "", en: "", ru: "", fr: "", de: "", es: "" },
    },
  });

  const handleAutoTranslate = async () => {
    const arabicText = form.getValues("name.ar");
    if (!arabicText) {
      alert("يرجى إدخال الاسم باللغة العربية أولاً");
      return;
    }

    setIsTranslating(true);
    try {
      const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: arabicText }),
      });

      if (!res.ok) throw new Error("فشل في الترجمة");

      const translatedData = await res.json();

      form.setValue("name.en", translatedData.en, { shouldValidate: true });
      form.setValue("name.ru", translatedData.ru, { shouldValidate: true });
      form.setValue("name.fr", translatedData.fr, { shouldValidate: true });
      form.setValue("name.de", translatedData.de, { shouldValidate: true });
      form.setValue("name.es", translatedData.es, { shouldValidate: true });
      
    } catch (error) {
      console.error('Translation API Error:', error);
      alert("حدث خطأ أثناء الاتصال بخدمة الترجمة");
    } finally {
      setIsTranslating(false);
    }
  };

  const onSubmit = async (data: CategoryFormValues) => {
      console.log("Data ready to be saved:", data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl bg-white p-6 rounded-xl shadow-sm">
      
      <div className="space-y-2">
        <Label>الرابط (Slug - إنجليزي فقط)</Label>
        <Input placeholder="laser-hair-removal" {...form.register("slug")} dir="ltr" />
      </div>

      <hr className="border-slate-200" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-lg font-bold">اسم القسم</Label>
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleAutoTranslate}
            disabled={isTranslating}
            className="border-amber-500 text-amber-600 hover:bg-amber-50"
          >
            {isTranslating ? (
              <Loader2 className="w-4 h-4 ml-2 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 ml-2" />
            )}
            ترجم باقي اللغات بـ AI
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>العربية (الأساسية)</Label>
            <Input placeholder="إزالة الشعر بالليزر" {...form.register("name.ar")} />
          </div>
          <div className="space-y-2">
            <Label>English</Label>
            <Input {...form.register("name.en")} dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label>Русский (Russian)</Label>
            <Input {...form.register("name.ru")} dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label>Français</Label>
            <Input {...form.register("name.fr")} dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label>Deutsch</Label>
            <Input {...form.register("name.de")} dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label>Español</Label>
            <Input {...form.register("name.es")} dir="ltr" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-slate-900 text-white">
        حفظ القسم
      </Button>
    </form>
  );
}