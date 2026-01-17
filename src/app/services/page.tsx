import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';
import { ServiceCard } from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: `خدماتنا | ${siteConfig.seo.title}`,
  description: 'مجالات التخصص والخدمات القانونية المتخصصة',
};

export default function ServicesPage() {
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
            خدماتنا القانونية
          </h1>
          <p className="text-xl opacity-90">
            متخصصون في مجالات القانون المختلفة بخبرة واسعة وموثوقة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {siteConfig.services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: siteConfig.colors.background.light }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            عن كل خدمة بالتفصيل
          </h2>

          <div className="space-y-12">
            {siteConfig.services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-elegant"
                style={{
                  borderRight: `6px solid ${siteConfig.colors.secondary}`,
                }}
              >
                <div className="flex gap-6 items-start">
                  <div className="text-5xl flex-shrink-0">
                    {getIconEmoji(service.icon)}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-3 font-amiri"
                      style={{ color: siteConfig.colors.primary }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-lg leading-relaxed mb-4"
                      style={{ color: siteConfig.colors.text.secondary }}
                    >
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {getServiceFeatures(service.id).map((feature, fidx) => (
                        <li key={fidx} className="flex items-center gap-2">
                          <span
                            className="text-lg"
                            style={{ color: siteConfig.colors.secondary }}
                          >
                            ✓
                          </span>
                          <span style={{ color: siteConfig.colors.text.secondary }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 font-amiri animate-fadeInUp"
            style={{ color: siteConfig.colors.primary }}
          >
            لماذا تختار خدماتنا؟
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'خبرة وتخصص',
                description:
                  'متخصصون في مجالات القانون المختلفة بخبرة عملية واسعة',
              },
              {
                title: 'ثقة وموثوقية',
                description:
                  'التزام تام بسرية القضايا والعمل وفقاً لأعلى المعايير الأخلاقية',
              },
              {
                title: 'متابعة شاملة',
                description:
                  'متابعة كاملة لقضاياكم من البداية إلى الحصول على الحكم النهائي',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-lg shadow-elegant card-hover animate-fadeInUp"
                style={{
                  backgroundColor: siteConfig.colors.background.white,
                  borderTop: `4px solid ${siteConfig.colors.accent}`,
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div
                  className="text-4xl mb-4 animate-float"
                  style={{ color: siteConfig.colors.secondary }}
                >
                  ⭐
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: siteConfig.colors.primary }}
                >
                  {item.title}
                </h3>
                <p style={{ color: siteConfig.colors.text.secondary }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-20 px-4"
        style={{
          backgroundColor: siteConfig.colors.primary,
          color: 'white',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-amiri">
            هل تحتاج إلى مساعدة قانونية؟
          </h2>

          <p className="text-xl mb-8 opacity-90">
            تواصل معنا الآن للحصول على استشارة قانونية متخصصة
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.numbers[0].replace(/\D/g, '')}`}
              className="px-8 py-4 rounded-lg font-bold text-lg"
              style={{
                backgroundColor: siteConfig.colors.secondary,
                color: siteConfig.colors.primaryDark,
              }}
            >
              {siteConfig.cta.callNow}
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-white"
            >
              {siteConfig.cta.sendMessage}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function getIconEmoji(icon: string): string {
  const icons: { [key: string]: string } = {
    scales: '⚖️',
    home: '👨‍👩‍👧‍👦',
    briefcase: '💼',
    building: '🏢',
  };
  return icons[icon] || '📋';
}

function getServiceFeatures(serviceId: string): string[] {
  const features: { [key: string]: string[] } = {
    criminal: [
      'الدفاع عن الحقوق الجنائية',
      'معالجة القضايا أمام الشرطة والنيابة',
      'الدفاع أمام المحاكم الجنائية',
      'الطعن في الأحكام الجنائية',
    ],
    family: [
      'تحرير عقود الزواج والطلاق',
      'قضايا الحضانة والنفقة',
      'تقسيم الأموال والتركات',
      'مسائل الأحوال الشخصية المختلفة',
    ],
    civil: [
      'الدعاوى العقارية والملكية',
      'قضايا العقود والالتزامات',
      'المسؤولية المدنية والتعويضات',
      'الدعاوى التجارية والمتنوعة',
    ],
    corporate: [
      'تأسيس الشركات بأنواعها',
      'صياغة العقود التجارية',
      'استشارات قانونية للشركات',
      'تصفية وإغلاق الشركات',
    ],
  };
  return features[serviceId] || [];
}
