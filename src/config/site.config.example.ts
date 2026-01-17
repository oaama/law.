/**
 * 🎨 Configuration File Template - COPY THIS AND RENAME TO site.config.ts
 * 
 * This is an example configuration file. Copy it to site.config.ts and fill in your own values.
 * DO NOT commit site.config.ts to git as it contains sensitive information.
 */

export const siteConfig = {
  // Lawyer Information
  lawyer: {
    name: 'اسم المحامي/ة الكامل',
    titles: [
      'اللقب الأول',
      'اللقب الثاني',
      'اللقب الثالث',
    ],
    credibilityStatement: 'بيان موجز عن التخصص والخبرة',
    profession: 'الوظيفة',
  },

  // Professional Experience
  experience: [
    'الخبرة الأولى',
    'الخبرة الثانية',
  ],

  // Contact Information
  contact: {
    numbers: ['رقم الهاتف الأول', 'رقم الهاتف الثاني'],
    whatsapp: 'رقم واتس آب',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    facebook: 'رابط الفيسبوك',
  },

  // Practice Areas / Services
  services: [
    {
      id: 'service1',
      title: 'عنوان الخدمة',
      description: 'وصف الخدمة',
      icon: 'icon-name',
    },
  ],

  // Brand Colors
  colors: {
    primary: '#1a365d',
    primaryLight: '#152847',
    primaryDark: '#0f1b2e',
    secondary: '#d4a574',
    secondaryLight: '#e8d4a8',
    accent: '#16a34a',
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
      light: '#9ca3af',
      white: '#ffffff',
    },
    background: {
      white: '#ffffff',
      light: '#f9fafb',
      lighter: '#f3f4f6',
    },
  },

  // Fonts
  fonts: {
    heading: 'Cairo',
    body: 'Cairo',
    code: 'Courier New',
  },

  // Navigation Menu
  navigation: [
    { label: 'الرئيسية', href: '/' },
    { label: 'من نحن', href: '/about' },
    { label: 'خدماتنا', href: '/services' },
    { label: 'تواصل معنا', href: '/contact' },
  ],

  // SEO & Meta
  seo: {
    title: 'عنوان الصفحة',
    description: 'وصف الموقع',
    keywords: ['كلمة مفتاحية 1', 'كلمة مفتاحية 2'],
    locale: 'ar_EG',
    type: 'website',
  },

  // CTA Text
  cta: {
    bookConsultation: 'احجز استشارة قانونية',
    callNow: 'اتصل الآن',
    sendMessage: 'أرسل رسالة',
    whatsappContact: 'تواصل عبر الواتس آب',
    learnMore: 'اعرف المزيد',
  },

  // Homepage Sections
  homepage: {
    hero: {
      title: 'الاسم الكامل',
      subtitle: 'الوصف القصير',
      description: 'الوصف الطويل',
    },
    trust: {
      title: 'لماذا تختار خدماتنا؟',
      points: [
        { label: 'النقطة الأولى', value: 'القيمة' },
        { label: 'النقطة الثانية', value: 'القيمة' },
        { label: 'النقطة الثالثة', value: 'القيمة' },
        { label: 'النقطة الرابعة', value: 'القيمة' },
      ],
    },
  },

  // About Page
  about: {
    title: 'من نحن',
    biography: 'السيرة الذاتية',
    education: [
      'المؤهل الأول',
      'المؤهل الثاني',
      'المؤهل الثالث',
    ],
    philosophy: 'فلسفة العمل',
  },

  // Contact Page
  contact_page: {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا للإجابة على جميع استفساراتك',
    form: {
      name: 'الاسم *',
      email: 'البريد الإلكتروني *',
      phone: 'رقم الهاتف *',
      subject: 'الموضوع *',
      message: 'الرسالة *',
      submit: 'إرسال',
      successMessage: 'تم إرسال رسالتك بنجاح.',
      errorMessage: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} الاسم. جميع الحقوق محفوظة.`,
    location: 'العنوان',
    followUs: 'تابعنا على',
    social: {
      facebook: true,
      whatsapp: true,
      phone: true,
      email: true,
    },
  },
};
