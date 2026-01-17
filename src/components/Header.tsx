import Link from 'next/link';
import { siteConfig } from '@/config/site.config';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-elegant">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-2xl font-bold font-amiri" style={{ color: siteConfig.colors.primary }}>
                {siteConfig.lawyer.name.split(' / ')[1]}
              </div>
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex gap-8">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-gray-700 hover:font-semibold transition-all duration-300" style={{ color: siteConfig.colors.text.primary }}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex">
            <a
              href={`tel:${siteConfig.contact.numbers[0].replace(/\D/g, '')}`}
              className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300"
              style={{ backgroundColor: siteConfig.colors.secondary, color: siteConfig.colors.primaryDark }}
            >
              {siteConfig.cta.callNow}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-2xl" style={{ color: siteConfig.colors.primary }}>
              ☰
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
