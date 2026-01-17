# Law Firm Website - أمينة الحديدي

**Professional Arabic-First Law Firm Website**  
**موقع احترافي لمكتب محاماة عربي الأساس**

---

## 👨‍💼 تطوير: Angleous Rezq (البشمهندس Angleous Rezq)

A professional, modern, Arabic-first law firm website built with Next.js, TypeScript, Tailwind CSS, and RTL support.

---

## 🎯 الميزات الرئيسية

✅ **ملف تكوين واحد فقط** - عدّل أي شيء بدون تعديل الكود  
✅ **عربي RTL** - مُحسّن لللغة العربية بالكامل  
✅ **تصميم احترافي** - أنيق وموثوق وفاخر  
✅ **Mobile First** - يعمل على جميع الأجهزة  
✅ **سريع الأداء** - مُحسّن للأداء العالي  
✅ **ملفات معدة** - اقرأ الملفات التالية للتعديل بسهولة

---

## 📖 الملفات المهمة للتعديل

### 1️⃣ **البدء السريع (Quick Start)**
👉 **اقرأ أولاً:** [`QUICK_START.md`](QUICK_START.md)
- ملخص سريع جداً
- الأشياء الشائعة للتعديل

### 2️⃣ **دليل التعديل الكامل**
👉 **للتفاصيل:** [`EDITING_GUIDE.md`](EDITING_GUIDE.md)
- شرح تفصيلي لكل جزء
- أمثلة عملية
- جدول الألوان

## � Project Structure

```
e:\pro-angelo\ossama\sites/
├── src/
│   ├── config/
│   │   └── site.config.ts          ⭐ 👈 عدّل من هنا فقط!
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                (الصفحة الرئيسية)
│   │   ├── globals.css
│   │   ├── about/page.tsx          (صفحة من نحن)
│   │   ├── services/page.tsx       (صفحة الخدمات)
│   │   └── contact/page.tsx        (صفحة الاتصال)
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── Button.tsx
│       └── ServiceCard.tsx
├── public/
│   └── aa.jpg                      (الصورة الخلفية)
├── QUICK_START.md                  📖 ابدأ من هنا
├── EDITING_GUIDE.md                📖 دليل شامل
└── README.md                       (هذا الملف)
```

---

## ⚡ البدء السريع (Quick Start)

### 1. تشغيل الموقع
```bash
npm run dev
```
الموقع سيعمل على: `http://localhost:3000`

### 2. تعديل أي شيء
افتح الملف: `src/config/site.config.ts`
غيّر ما تريد، احفظ (`Ctrl+S`)، الموقع يتحدث تلقائياً!

### 3. بناء للإنتاج
```bash
npm run build
npm start
```

---

## 🔧 التخصيص (Customization)

## 🔧 التخصيص (Customization)

### 📝 ملف التكوين الوحيد
```typescript
// src/config/site.config.ts

// 👤 معلومات المحامية
lawyer: {
  name: 'الأستاذة / أمينة الحديدي',
  titles: ['محامية بالاستئناف العالي...', '...'],
  // ... إلخ
}

// 📞 الاتصال
contact: {
  numbers: ['01553865760', '01101002093'],
  whatsapp: '201553865760',
  email: 'amina.elhadidi@law.eg',
  // ... إلخ
}

// 🎨 الألوان
colors: {
  primary: '#1a365d',      // أزرق عميق
  secondary: '#d4a574',    // ذهبي
  accent: '#16a34a',       // أخضر
  // ... إلخ
}

// 📋 الخدمات
services: [
  {
    title: 'القضايا الجنائية',
    description: '...',
    icon: 'scales',
  },
  // ... إلخ
]
```

**هذا كل شيء! لا تحتاج لتعديل أي ملف آخر** ✨

---

## 📱 الصفحات

| الصفحة | المسار | الوصف |
|------|--------|------|
| **الرئيسية** | `/` | البطل section + الخدمات + بيانات الاعتماد |
| **من نحن** | `/about` | السيرة الذاتية والمؤهلات والفلسفة |
| **الخدمات** | `/services` | جميع الخدمات بالتفصيل |
| **اتصل بنا** | `/contact` | نموذج الاتصال وطرق التواصل |

---

## 🎨 نظام التصميم (Design System)

### الألوان الأساسية
```
🔵 الأزرق العميق (Primary):  #1a365d
🟡 الذهبي (Secondary):       #d4a574  
🟢 الأخضر (Accent):          #16a34a
⚪ الأبيض (Background):      #ffffff
```

### الخطوط
- **العناوين:** Cairo (خط عربي أنيق)
- **النصوص:** Cairo (خط عربي نظيف)

### المسافات والظلال
- ظلال أنيقة للبطاقات
- تباعد متسق
- تخطيط responsive

---

## 🚀 التشغيل والبناء

## � التشغيل والبناء

### 📋 المتطلبات
- Node.js 18+
- npm أو yarn

### ⚙️ الأوامر الأساسية

**التطوير (Development):**
```bash
npm install
npm run dev
# اذهب إلى: http://localhost:3000
```

**الإنتاج (Production):**
```bash
npm run build
npm start
```

**فحص الأخطاء:**
```bash
npm run lint
```

---

## 📚 الملفات الإضافية

| الملف | الوصف |
|------|------|
| [`QUICK_START.md`](QUICK_START.md) | ⚡ بدء سريع (اقرأه أولاً!) |
| [`EDITING_GUIDE.md`](EDITING_GUIDE.md) | 📖 دليل شامل للتعديل |
| `src/config/site.config.ts` | ⭐ ملف التكوين الرئيسي |
| `package.json` | 📦 المكتبات والتبعيات |
| `tsconfig.json` | ⚙️ إعدادات TypeScript |
| `tailwind.config.ts` | 🎨 إعدادات Tailwind CSS |

---

## 🛠️ المكتبات المستخدمة

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - CSS framework
- **Google Fonts** - Arabic fonts (Cairo, Amiri)

---

## 💡 نصائح مهمة

✅ **عدّل فقط `src/config/site.config.ts`**  
✅ **احفظ الملف واشاهد الموقع يتحدث**  
✅ **لا تلمس الأكواد الأخرى**  
✅ **استخدم Ctrl+F للبحث عن القيم**  
✅ **للمساعدة، اقرأ `EDITING_GUIDE.md`**

---

## 🎯 الأهداف المحققة

✅ تصميم احترافي وأنيق  
✅ موقع بالكامل يُتحكم به من ملف واحد  
✅ لا حاجة لتعديل الأكواس  
✅ responsive على جميع الأجهزة  
✅ سريع الأداء  
✅ سهل التعديل والتحديث  

---

## 📧 المطور

**Angleous Rezq** - البشمهندس المتخصص في تطوير الويب

---

## 📅 معلومات الإصدار

- **الإصدار:** 1.0.0
- **آخر تحديث:** 17 يناير 2026
- **الحالة:** جاهز للاستخدام الفوري ✨

---

## 📞 الدعم والمساعدة

إذا واجهتك أي مشكلة:

1. **اقرأ** `EDITING_GUIDE.md` أولاً
2. **تحقق** من أن الأقواس والفواصل صحيحة
3. **احفظ** الملف بشكل صحيح
4. **أعد تحميل** الموقع (F5)

---

## 🙏 شكراً!

**الموقع معك تماماً وجاهز للاستخدام الفوري!**

---

*جميع الحقوق محفوظة © 2026 الأستاذة أمينة الحديدي*

