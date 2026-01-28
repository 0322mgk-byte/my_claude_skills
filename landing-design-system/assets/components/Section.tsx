import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  subCopy?: string;
  mainCopy?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
  background?: 'default' | 'alt';
}

export function Section({
  subCopy,
  mainCopy,
  description,
  children,
  className,
  align = 'center',
  background = 'default',
}: SectionProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  const bgClasses = {
    default: 'bg-background',
    alt: 'bg-secondary/5',
  };

  return (
    <section
      className={cn(
        'py-12 md:py-16 lg:py-20',
        bgClasses[background],
        className
      )}
    >
      <div className={cn(
        'max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col',
        alignClasses[align]
      )}>
        {/* SubCopy */}
        {subCopy && (
          <p className="text-sm leading-normal tracking-wide font-medium text-secondary mb-2">
            {subCopy}
          </p>
        )}

        {/* MainCopy */}
        {mainCopy && (
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight font-bold text-text mb-4">
            {mainCopy}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-base md:text-base lg:text-lg leading-relaxed tracking-normal font-normal text-text/80 max-w-2xl">
            {description}
          </p>
        )}

        {/* Children */}
        {children && (
          <div className="mt-8 w-full">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
