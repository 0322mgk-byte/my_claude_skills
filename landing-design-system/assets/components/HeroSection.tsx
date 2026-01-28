import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface HeroSectionProps {
  subCopy?: string;
  mainCopy: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function HeroSection({
  subCopy,
  mainCopy,
  description,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  children,
  className,
  align = 'center',
}: HeroSectionProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  return (
    <section
      className={cn(
        'pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32',
        className
      )}
    >
      <div className={cn(
        'max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col',
        alignClasses[align]
      )}>
        {/* SubCopy */}
        {subCopy && (
          <p className="text-sm md:text-base leading-normal tracking-wide font-medium text-secondary mb-2">
            {subCopy}
          </p>
        )}

        {/* MainCopy */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight font-bold text-text mb-4">
          {mainCopy}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-base md:text-lg leading-relaxed tracking-normal font-normal text-text/80 max-w-2xl">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(ctaLabel || secondaryCtaLabel) && (
          <div className="mt-6 flex flex-wrap gap-4">
            {ctaLabel && (
              <Button
                size="md"
                corner="lg"
                variant="primary"
                onClick={() => ctaHref && (window.location.href = ctaHref)}
              >
                {ctaLabel}
              </Button>
            )}
            {secondaryCtaLabel && (
              <Button
                size="md"
                corner="lg"
                variant="outline"
                onClick={() => secondaryCtaHref && (window.location.href = secondaryCtaHref)}
              >
                {secondaryCtaLabel}
              </Button>
            )}
          </div>
        )}

        {/* Children */}
        {children}
      </div>
    </section>
  );
}
