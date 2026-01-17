import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: `${siteConfig.about.title} | ${siteConfig.seo.title}`,
  description: siteConfig.about.biography,
};

export default function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <section
        className="py-20 px-4"
        style={{
          backgroundColor: siteConfig.colors.primary,
          color: 'white',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-amiri">
            {siteConfig.about.title}
          </h1>
          <p className="text-xl opacity-90">{siteConfig.lawyer.profession}</p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Main Biography */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 font-amiri" style={{ color: siteConfig.colors.primary }}>
                السيرة الذاتية المهنية
              </h2>

              <p className="text-lg leading-relaxed mb-8" style={{ color: siteConfig.colors.text.secondary }}>
                {siteConfig.about.biography}
              </p>

              <p className="text-lg leading-relaxed mb-8" style={{ color: siteConfig.colors.text.secondary }}>
                تتمتع الأستاذة أمينة الحديدي بخبرة عملية واسعة في التعامل مع القضايا المختلفة أمام جميع
                المحاكم والنيابات المصرية، مع التركيز على تحقيق المصلحة القانونية لكل عميل.
              </p>

              <h2 className="text-3xl font-bold mb-6 font-amiri mt-12" style={{ color: siteConfig.colors.primary }}>
                الفلسفة القانونية والقيم
              </h2>

              <div className="bg-blue-50 p-6 rounded-lg border-r-4" style={{ borderColor: siteConfig.colors.secondary }}>
                <p className="text-lg leading-relaxed" style={{ color: siteConfig.colors.text.secondary }}>
                  {siteConfig.about.philosophy}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Education */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 font-amiri" style={{ color: siteConfig.colors.primary }}>
                  المؤهلات العلمية
                </h3>
                <div className="space-y-4">
                  {siteConfig.about.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: siteConfig.colors.background.lighter,
                        borderRight: `4px solid ${siteConfig.colors.secondary}`,
                      }}
                    >
                      <p style={{ color: siteConfig.colors.text.primary }}>{edu}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Titles */}
              <div>
                <h3 className="text-2xl font-bold mb-6 font-amiri" style={{ color: siteConfig.colors.primary }}>
                  الألقاب المهنية
                </h3>
                <div className="space-y-4">
                  {siteConfig.lawyer.titles.map((title, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: siteConfig.colors.background.lighter,
                        borderRight: `4px solid ${siteConfig.colors.accent}`,
                      }}
                    >
                      <p style={{ color: siteConfig.colors.text.primary }}>{title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: siteConfig.colors.background.light }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-amiri" style={{ color: siteConfig.colors.primary }}>
            الخبرة العملية
          </h2>

          <div className="space-y-6">
            {siteConfig.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg shadow-elegant"
                style={{ backgroundColor: 'white' }}
              >
                <div className="flex gap-4">
                  <div
                    className="text-3xl flex-shrink-0"
                    style={{ color: siteConfig.colors.secondary }}
                  >
                    💼
                  </div>
                  <div>
                    <p className="text-lg font-semibold" style={{ color: siteConfig.colors.primary }}>
                      {exp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-6 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            استشيري الأستاذة أمينة الحديدي
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            للحصول على استشارة قانونية متخصصة وموثوقة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.numbers[0].replace(/\D/g, '')}`}
              className="px-8 py-4 rounded-lg font-bold text-lg"
              style={{
                backgroundColor: siteConfig.colors.primary,
                color: 'white',
              }}
            >
              {siteConfig.cta.callNow}
            </a>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg"
              style={{
                backgroundColor: siteConfig.colors.secondary,
                color: siteConfig.colors.primaryDark,
              }}
            >
              {siteConfig.cta.whatsappContact}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
