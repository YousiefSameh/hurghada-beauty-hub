import { Sparkles } from 'lucide-react';

interface SpecialHeadingProps {
  isArabic: boolean;
  subtitle: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export default function SpecialHeading({
  isArabic,
  subtitle,
  title,
  titleHighlight,
  description,
}: SpecialHeadingProps) {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-8">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-px bg-[#CD6C3E]" />
          <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#CD6C3E] flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {subtitle}
          </span>
        </div>

        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-tight ${
            !isArabic ? 'font-serif italic' : ''
          }`}
        >
          {title}{' '}
          <span className="text-[#CD6C3E] font-light uppercase">{titleHighlight}</span>
        </h2>
      </div>

      <p className="max-w-md text-stone-600 font-light text-base md:text-lg leading-relaxed pb-2">
        {description}
      </p>
    </div>
  );
}
