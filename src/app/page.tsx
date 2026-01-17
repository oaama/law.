import { siteConfig } from '@/config/site.config';
import { ServiceCard } from '@/components/ServiceCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(/aa.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Mobile: Remove fixed attachment */}
        <style>{`
          @media (max-width: 768px) {
            section {
              background-attachment: scroll !important;
            }
          }
        `}</style>

        {/* Overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(26, 54, 93, 0.82) 0%, rgba(21, 40, 71, 0.82) 50%, rgba(15, 27, 46, 0.85) 100%)`,
            backdropFilter: 'blur(2px)',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 font-amiri leading-tight animate-fadeInUp">
              {siteConfig.homepage.hero.title}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4 font-cairo opacity-95 animate-fadeInUp animate-delay-100">
              {siteConfig.homepage.hero.subtitle}
            </p>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed animate-fadeInUp animate-delay-200">
              {siteConfig.homepage.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-10">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=مرحباً، أود حجز استشارة قانونية`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 bg-white hover:shadow-xl hover:scale-105 transform animate-fadeInUp animate-delay-300 btn-glow"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.cta.bookConsultation}
              </a>

              <a
                href={`tel:${siteConfig.contact.numbers[0].replace(/\D/g, '')}`}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 border-2 border-white hover:bg-white hover:scale-105 transform animate-fadeInUp animate-delay-400 btn-glow"
                style={{ color: 'white' }}
              >
                {siteConfig.cta.callNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4" style={{ backgroundColor: siteConfig.colors.background.light }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            {siteConfig.homepage.trust.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {siteConfig.homepage.trust.points.map((point, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg bg-white shadow-elegant card-hover animate-fadeInUp transition-all" style={{ animationDelay: `${idx * 100}ms` }}>
                <div
                  className="text-4xl font-bold mb-2 font-amiri animate-scaleIn"
                  style={{ color: siteConfig.colors.secondary, animationDelay: `${300 + idx * 100}ms` }}
                >
                  ✓
                </div>
                <p className="text-gray-600 mb-2">{point.label}</p>
                <p className="font-bold" style={{ color: siteConfig.colors.primary }}>
                  {point.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            مجالات التخصص
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            {siteConfig.lawyer.credibilityStatement}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.services.slice(0, 2).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="/services"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              style={{
                backgroundColor: siteConfig.colors.primary,
                color: siteConfig.colors.text.white,
              }}
            >
              {siteConfig.cta.learnMore}
            </a>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section
        className="py-16 md:py-24 px-4"
        style={{
          background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryLight} 100%)`,
          color: 'white',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 font-amiri text-center">
            المؤهلات والخبرات
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 font-amiri text-center md:text-right">المؤهلات العلمية</h3>
              <ul className="space-y-3 md:space-y-4">
                {siteConfig.lawyer.titles.map((title, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-lg">
                    <span
                      className="text-xl md:text-2xl flex-shrink-0 mt-0.5"
                      style={{ color: siteConfig.colors.secondary }}
                    >
                      ✓
                    </span>
                    <span className="leading-relaxed">{title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 font-amiri text-center md:text-right">الخبرة العملية</h3>
              <ul className="space-y-3 md:space-y-4">
                {siteConfig.experience.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-lg">
                    <span
                      className="text-xl md:text-2xl flex-shrink-0 mt-0.5"
                      style={{ color: siteConfig.colors.secondary }}
                    >
                      ⭐
                    </span>
                    <span className="leading-relaxed">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" style={{ backgroundColor: siteConfig.colors.background.light }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            هل تحتاج استشارة قانونية؟
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            تواصل معنا الآن للحصول على استشارة قانونية متخصصة وموثوقة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              style={{
                backgroundColor: siteConfig.colors.secondary,
                color: siteConfig.colors.primaryDark,
              }}
            >
              {siteConfig.cta.whatsappContact}
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 border-2"
              style={{
                borderColor: siteConfig.colors.primary,
                color: siteConfig.colors.primary,
              }}
            >
              {siteConfig.cta.sendMessage}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
