"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/utils/uploadthing";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onRemove: () => void;
}

export default function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  if (value) {
    return (
      <div className="relative w-40 h-40 rounded-lg overflow-hidden border border-slate-200 shadow-sm">
        <Image
          fill
          className="object-cover"
          alt="Uploaded Image"
          src={value}
        />
        <button
          onClick={onRemove}
          type="button"
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors shadow-md"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.error(`ERROR! ${error.message}`);
          alert("حدث خطأ أثناء الرفع");
        }}
        appearance={{
          button: "bg-slate-900 text-white hover:bg-slate-800",
          container: "border-2 border-dashed border-slate-300 rounded-lg p-8",
          label: "text-slate-600 hover:text-slate-900",
        }}
      />
    </div>
  );
}