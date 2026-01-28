import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  sections?: FooterSection[];
  copyright?: string;
  className?: string;
}

export function Footer({ logo, sections = [], copyright, className }: FooterProps) {
  return (
    <footer
      className={cn(
        'py-12 md:py-16 bg-text text-white',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            {logo && <div className="h-8 mb-4">{logo}</div>}
          </div>

          {/* Link Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-medium tracking-wide mb-4 text-white/60">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        {copyright && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/60">{copyright}</p>
          </div>
        )}
      </div>
    </footer>
  );
}
