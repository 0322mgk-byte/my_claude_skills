import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface HeaderProps {
  logo: ReactNode;
  navItems?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function Header({ logo, navItems = [], ctaLabel, ctaHref, className }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white/80 backdrop-blur-md',
        'h-16 md:h-18 lg:h-20',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="h-8 flex items-center">
          {logo}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-normal font-medium text-text hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        {ctaLabel && (
          <Button
            size="sm"
            corner="lg"
            variant="primary"
            onClick={() => ctaHref && (window.location.href = ctaHref)}
          >
            {ctaLabel}
          </Button>
        )}
      </div>
    </header>
  );
}
