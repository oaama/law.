/**
 * 🎨 Central Configuration File for Law Firm Website
 * 
 * All content, colors, fonts, and text are controlled from this single file
 * NO HARDCODED VALUES ANYWHERE ELSE IN THE PROJECT
 * 
 * 👨‍💼 Developed by: Angleous Rezq (البشمهندس Angleous Rezq)
 * 🏢 Law Firm: الأستاذة أمينة الحديدي
 * 📅 Last Updated: 17 January 2026
 * 
 * ✏️ HOW TO EDIT:
 * - Change any value below to update the website
 * - Colors, text, contact info, services - all editable
 * - Save the file and the website updates automatically
 * - No need to touch the code!
 */

export const siteConfig = {
  // Lawyer Information
  lawyer: {
    name: 'الأستاذة / أمينة الحديدي',
    titles: [
      'محامية بالاستئناف العالي ومجلس الدولة',
      'ماجستير في القانون العام',
      'باحثة دكتوراه',
    ],
    credibilityStatement:
      'متخصصة في تقديم خدمات قانونية عالية الجودة في مجالات القضايا الجنائية والأحوال الشخصية والقضايا المدنية مع خبرة واسعة في تأسيس الشركات',
    profession: 'محامية بالاستئناف العالي ومجلس الدولة',
  },

  // Professional Experience
  experience: [
    'خدمات قانونية متميزة من محام متخصص بالاستئناف العالي ومجلس الدولة في جمهورية مصر العربية',
    'خبرة عملية في مجال القانون البنكي والعمليات المالية مع بنك مصر – قطر الإسلامي',
  ],

  // Contact Information
  contact: {
    numbers: ['01553865760', '01101002093'],
    whatsapp: '201553865760',
    email: 'aaminaalhadidi@gmail.com',
    address: 'القاهرة، جمهورية مصر العربية',
    facebook: 'https://www.facebook.com/share/17jyKyrzQr/',
  },

  // Practice Areas / Services
  services: [
    {
      id: 'criminal',
      title: 'القضايا الجنائية',
      description:
        'نوفر خدمات دفاعية متخصصة في جميع القضايا الجنائية مع خبرة عملية طويلة أمام المحاكم والنيابات العامة',
      icon: 'scales',
    },
    {
      id: 'family',
      title: 'قضايا الأسرة والأحوال الشخصية',
      description:
        'نقدم استشارات قانونية شاملة وموثوقة في مسائل الزواج والطلاق والحضانة والنفقة والمواريث',
      icon: 'home',
    },
    {
      id: 'civil',
      title: 'القضايا المدنية',
      description:
        'نتولى معالجة القضايا المدنية المختلفة بما فيها الدعاوى العقارية والعقود والمسؤولية المدنية',
      icon: 'briefcase',
    },
    {
      id: 'corporate',
      title: 'تأسيس الشركات',
      description:
        'نوفر خدمات استشارية متكاملة لتأسيس الشركات والمتابعة القانونية الدقيقة للعمليات الإدارية والتنظيمية',
      icon: 'building',
    },
  ],

  // Brand Colors
  colors: {
    primary: '#1a365d', // Deep Navy
    primaryLight: '#152847',
    primaryDark: '#0f1b2e',
    secondary: '#d4a574', // Gold
    secondaryLight: '#e8d4a8',
    accent: '#16a34a', // Green
    text: {
      primary: '#1f2937', // Dark gray
      secondary: '#6b7280', // Medium gray
      light: '#9ca3af', // Light gray
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
    heading: 'Cairo', // Arabic serif
    body: 'Cairo', // Arabic sans-serif
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
    title: 'الأستاذة أمينة الحديدي - محامية بالاستئناف العالي ومجلس الدولة',
    description:
      'استشارات قانونية متخصصة في القضايا الجنائية والأسرة والمدنية وتأسيس الشركات. تتمتع بخبرة عملية واسعة أمام جميع المحاكم والجهات القضائية المصرية.',
    keywords: [
      'محامية مصرية',
      'استشارات قانونية',
      'قضايا جنائية',
      'قضايا أسرة',
      'تأسيس شركات',
      'القاهرة',
    ],
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
      title: 'الأستاذة أمينة الحديدي',
      subtitle: 'محامية بالاستئناف العالي ومجلس الدولة',
      description:
        'خدمات قانونية متخصصة وموثوقة في جميع فروع القانون - جنائي، أسرة، مدني، وتأسيس شركات',
    },
    trust: {
      title: 'لماذا تختار أمينة الحديدي؟',
      points: [
        { label: 'محامية بالاستئناف العالي', value: 'معتمدة' },
        { label: 'خبرة عملية واسعة', value: 'سنوات' },
        { label: 'ماجستير في القانون العام', value: 'متخصصة' },
        { label: 'باحثة دكتوراه', value: 'متطورة' },
      ],
    },
  },

  // About Page
  about: {
    title: 'من نحن',
    biography:
      'الأستاذة أمينة الحديدي محامية بالاستئناف العالي ومجلس الدولة بالقاهرة، متخصصة في تقديم خدمات قانونية متميزة وموثوقة بخبرة عملية واسعة في جميع مجالات القانون الجنائي والأسري والمدني وقانون الشركات.',
    education: [
      'ماجستير في القانون العام',
      'باحثة دكتوراه',
      'متدربة معتمدة في المحاكم المصرية',
    ],
    philosophy:
      'نؤمن بأن العدالة حق أساسي لكل فرد. نسعى بكل تفاني وحرفية لتحقيق المصلحة القانونية لموكلينا، مع التزام صارم بأعلى المعايير الأخلاقية والمهنية والسرية المهنية.',
  },

  // Contact Page
  contact_page: {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا للإجابة على جميع استفساراتك القانونية',
    form: {
      name: 'الاسم *',
      email: 'البريد الإلكتروني *',
      phone: 'رقم الهاتف *',
      subject: 'الموضوع *',
      message: 'الرسالة *',
      submit: 'إرسال',
      successMessage: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
      errorMessage: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Eng-Angeluos Rezq. جميع الحقوق محفوظة.`,
    location: 'القاهرة، جمهورية مصر العربية',
    followUs: 'تابعنا على',
    social: {
      facebook: true,
      whatsapp: true,
      phone: true,
      email: true,
    },
  },
};

// Export type for TypeScript support
export type SiteConfig = typeof siteConfig;
