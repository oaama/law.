'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { siteConfig } from '@/config/site.config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // Simulate form submission (in production, this would send to a backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

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
            {siteConfig.contact_page.title}
          </h1>
          <p className="text-xl opacity-90">{siteConfig.contact_page.subtitle}</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {/* Phone */}
            <div
              className="p-8 rounded-lg shadow-elegant text-center"
              style={{ backgroundColor: siteConfig.colors.background.white }}
            >
              <div className="text-5xl mb-4">📞</div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: siteConfig.colors.primary }}
              >
                اتصل بنا
              </h3>
              <div className="space-y-3">
                {siteConfig.contact.numbers.map((number, idx) => (
                  <a
                    key={idx}
                    href={`tel:${number.replace(/\D/g, '')}`}
                    className="block text-lg font-semibold hover:opacity-80"
                    style={{ color: siteConfig.colors.secondary }}
                  >
                    {number}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div
              className="p-8 rounded-lg shadow-elegant text-center"
              style={{ backgroundColor: siteConfig.colors.background.white }}
            >
              <div className="text-5xl mb-4">💬</div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.cta.whatsappContact}
              </h3>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=مرحباً، أود حجز استشارة قانونية`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-bold mt-4"
                style={{
                  backgroundColor: siteConfig.colors.secondary,
                  color: siteConfig.colors.primaryDark,
                }}
              >
                فتح الواتس آب
              </a>
            </div>

            {/* Email */}
            <div
              className="p-8 rounded-lg shadow-elegant text-center"
              style={{ backgroundColor: siteConfig.colors.background.white }}
            >
              <div className="text-5xl mb-4">📧</div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: siteConfig.colors.primary }}
              >
                البريد الإلكتروني
              </h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-lg font-semibold hover:opacity-80"
                style={{ color: siteConfig.colors.secondary }}
              >
                {siteConfig.contact.email}
              </a>
            </div>

            {/* Facebook */}
            {siteConfig.contact.facebook && (
              <div
                className="p-8 rounded-lg shadow-elegant text-center"
                style={{ backgroundColor: siteConfig.colors.background.white }}
              >
                <div className="text-5xl mb-4">�</div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: siteConfig.colors.primary }}
                >
                  فيس بوك
                </h3>
                <a
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg font-bold mt-4"
                  style={{
                    backgroundColor: siteConfig.colors.secondary,
                    color: siteConfig.colors.primaryDark,
                  }}
                >
                  زيارة الصفحة
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: siteConfig.colors.background.light }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            {siteConfig.cta.sendMessage}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.contact_page.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{ borderColor: siteConfig.colors.primary }}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.contact_page.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{ borderColor: siteConfig.colors.primary }}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-lg font-semibold mb-2"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.contact_page.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{ borderColor: siteConfig.colors.primary }}
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-semibold mb-2"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.contact_page.form.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100"
                style={{ borderColor: siteConfig.colors.primary }}
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-2"
                style={{ color: siteConfig.colors.primary }}
              >
                {siteConfig.contact_page.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 resize-none"
                style={{ borderColor: siteConfig.colors.primary }}
              />
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div
                className="p-4 rounded-lg text-center font-semibold"
                style={{
                  backgroundColor: siteConfig.colors.accent,
                  color: 'white',
                }}
              >
                ✓ {siteConfig.contact_page.form.successMessage}
              </div>
            )}

            {submitStatus === 'error' && (
              <div
                className="p-4 rounded-lg text-center font-semibold"
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                }}
              >
                ✗ {siteConfig.contact_page.form.errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="w-full px-6 py-4 rounded-lg font-bold text-lg text-white transition-all duration-300"
              style={{
                backgroundColor: submitStatus === 'loading' ? siteConfig.colors.text.light : siteConfig.colors.primary,
                opacity: submitStatus === 'loading' ? 0.6 : 1,
              }}
            >
              {submitStatus === 'loading' ? 'جاري الإرسال...' : siteConfig.contact_page.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 font-amiri"
            style={{ color: siteConfig.colors.primary }}
          >
            موقعنا
          </h2>
          <p className="text-xl mb-6" style={{ color: siteConfig.colors.text.secondary }}>
            📍 {siteConfig.contact.address}
          </p>
          <div className="bg-gray-300 rounded-lg overflow-hidden shadow-card h-96">
            {/* Placeholder for map - in production, use Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
              <p className="text-gray-600 font-semibold">خريطة الموقع</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
