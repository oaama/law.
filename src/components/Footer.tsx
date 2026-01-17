import { siteConfig } from '@/config/site.config';

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ borderColor: siteConfig.colors.background.lighter }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-amiri" style={{ color: siteConfig.colors.primary }}>
              {siteConfig.lawyer.name.split(' / ')[1]}
            </h3>
            <p className="text-gray-600 leading-relaxed" style={{ color: siteConfig.colors.text.secondary }}>
              {siteConfig.about.biography}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: siteConfig.colors.primary }}>
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:font-semibold transition-all duration-300"
                    style={{ color: siteConfig.colors.text.secondary }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold mb-6" style={{ color: siteConfig.colors.primary }}>
              تواصل معنا
            </h4>
            <div className="space-y-4">
              {siteConfig.contact.numbers.map((number, idx) => (
                <div key={idx}>
                  <a
                    href={`tel:${number.replace(/\D/g, '')}`}
                    className="hover:font-semibold transition-all duration-300 flex items-center gap-2"
                    style={{ color: siteConfig.colors.text.secondary }}
                  >
                    📞 {number}
                  </a>
                </div>
              ))}
              <div>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:font-semibold transition-all duration-300 flex items-center gap-2"
                  style={{ color: siteConfig.colors.text.secondary }}
                >
                  💬 {siteConfig.cta.whatsappContact}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:font-semibold transition-all duration-300 flex items-center gap-2"
                  style={{ color: siteConfig.colors.text.secondary }}
                >
                  📧 {siteConfig.contact.email}
                </a>
              </div>
              {siteConfig.contact.facebook && (
                <div>
                  <a
                    href={siteConfig.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:font-semibold transition-all duration-300 flex items-center gap-2"
                    style={{ color: siteConfig.colors.text.secondary }}
                  >
                    � فيس بوك
                  </a>
                </div>
              )}
              <p style={{ color: siteConfig.colors.text.light }} className="text-sm mt-4">
                📍 {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8" style={{ borderColor: siteConfig.colors.background.lighter }}>
          <p className="text-center text-sm" style={{ color: siteConfig.colors.text.light }}>
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
