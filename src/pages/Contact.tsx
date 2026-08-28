import { useState, type FormEvent } from 'react';
import { LocalizedLink as Link } from '../components/LocalizedLink';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const brandColor = '#BA9765';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [attempted, setAttempted] = useState(false);

  const invalidClass = attempted
    ? 'invalid:border-red-400 invalid:focus:border-red-400'
    : '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      setAttempted(true);
      setSubmitError(t.contactPage.required_error);
      formEl.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setIsSubmitted(true);
    } catch {
      setSubmitError(t.contactPage.form_error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen font-sans bg-white flex flex-col">
      <SiteHeader activeId="contact" alwaysSolid />

      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-20 pt-36 pb-12">
        <div className="max-w-3xl w-full">
          <h1 className="text-[36px] md:text-[44px] font-bold text-center tracking-tight mb-6" style={{ color: '#464646' }}>
            {t.contactPage.title}
          </h1>
          <div className="w-[60px] h-[2px] mb-8 mx-auto" style={{ backgroundColor: brandColor }}></div>
          <p className="text-[18px] text-center max-w-2xl mx-auto leading-relaxed mb-14" style={{ color: '#767676' }}>
            {t.contactPage.subtitle}
          </p>

          {/* Direct contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <a
              href="tel:+32489607074"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 hover:border-[#BA9765] transition-colors text-center"
            >
              <Phone size={26} color={brandColor} strokeWidth={1.5} />
              <span className="text-[13px] font-bold uppercase tracking-wider text-gray-500">{t.contactPage.phone}</span>
              <span className="text-[15px] font-bold" style={{ color: '#464646' }}>0489 60 70 74</span>
            </a>
            <a
              href="https://wa.me/32489607074"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 hover:border-[#BA9765] transition-colors text-center"
            >
              <MessageCircle size={26} color={brandColor} strokeWidth={1.5} />
              <span className="text-[13px] font-bold uppercase tracking-wider text-gray-500">{t.contactPage.whatsapp}</span>
              <span className="text-[15px] font-bold" style={{ color: '#464646' }}>0489 60 70 74</span>
            </a>
            <a
              href="mailto:contact@vitracare.be"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 hover:border-[#BA9765] transition-colors text-center"
            >
              <Mail size={26} color={brandColor} strokeWidth={1.5} />
              <span className="text-[13px] font-bold uppercase tracking-wider text-gray-500">{t.contactPage.email}</span>
              <span className="text-[13px] font-bold whitespace-nowrap" style={{ color: '#464646' }}>contact@vitracare.be</span>
            </a>
            {/* Real Google Business Profile link, no customer names/reviews reproduced */}
            <a
              href="https://share.google/c3Bih4FWySHUhjkAZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 hover:border-[#BA9765] transition-colors text-center"
            >
              <MapPin size={26} color={brandColor} strokeWidth={1.5} />
              <span className="text-[13px] font-bold uppercase tracking-wider text-gray-500">{t.contactPage.googleMaps}</span>
              <span className="text-[15px] font-bold" style={{ color: '#464646' }}>Google Maps</span>
            </a>
          </div>

          {/* Message form */}
          <div className="rounded-[16px] overflow-hidden shadow-xl border border-gray-100 relative">
            {/* Success Overlay — fixed to the viewport so it's always visible immediately on submit, regardless of scroll position */}
            <div
              className={`fixed inset-0 z-[200] flex flex-col items-center justify-center p-8 md:p-12 text-center transition-opacity duration-500 ease-in-out ${isSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              style={{ backgroundColor: brandColor }}
            >
              <div className="w-[64px] h-[64px] rounded-full border-[4px] border-white flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-white text-[22px] md:text-[26px] font-bold px-4 max-w-2xl leading-tight">
                {t.contactPage.success}
              </h3>
              <Link to="/" className="mt-6 text-white underline text-[14px] font-bold">
                {t.back}
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 md:p-12 bg-white">
              <input
                type="text"
                name="name"
                required
                placeholder={`${t.contactPage.form_name} *`}
                className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 ${invalidClass}`}
              />
              <input
                type="email"
                name="email"
                required
                placeholder={`${t.contactPage.form_email} *`}
                className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 ${invalidClass}`}
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder={`${t.contactPage.form_message} *`}
                className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 resize-none ${invalidClass}`}
              />
              <p className="text-[11px] text-gray-400">{t.contactPage.required_note}</p>
              {submitError && (
                <p className="text-[12px] text-red-600">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 text-white px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] bg-[#BA9765] cursor-pointer disabled:opacity-60 disabled:cursor-wait w-fit self-center"
              >
                {isSubmitting ? '...' : t.contactPage.submit}
              </button>
            </form>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
