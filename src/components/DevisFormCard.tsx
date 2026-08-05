import { useState, type FormEvent } from 'react';
import { useLanguage } from '../LanguageContext';

const brandColor = '#BA9765';
const MAX_PHOTOS_BYTES = 3.5 * 1024 * 1024; // stays under the ~4.5MB serverless request limit once base64-encoded

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const DevisFormCard = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const photoInput = formEl.querySelector<HTMLInputElement>('input[name="photos"]');
    const files: File[] = photoInput?.files ? Array.from(photoInput.files) : [];

    const totalSize = files.reduce((sum, f) => sum + f.size, 0);
    if (totalSize > MAX_PHOTOS_BYTES) {
      setSubmitError('Les photos sélectionnées sont trop volumineuses au total (max ~3,5 Mo). Réduisez le nombre de photos ou leur taille.');
      return;
    }

    setIsSubmitting(true);

    try {
      const photos = await Promise.all(
        files.map(async (file) => ({
          filename: file.name,
          contentType: file.type,
          contentBase64: await fileToBase64(file),
        }))
      );

      const payload = {
        name: formData.get('name'),
        address: formData.get('address'),
        zip: formData.get('zip'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        photos,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setIsSubmitted(true);
    } catch {
      setSubmitError('Une erreur est survenue. Réessayez, ou appelez-nous directement au 0489 60 70 74.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row rounded-[16px] overflow-hidden shadow-2xl relative">

      {/* Success Overlay */}
      <div
        className={`absolute inset-0 z-50 flex flex-col items-center justify-center p-8 md:p-12 text-center transition-opacity duration-500 ease-in-out ${isSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundColor: brandColor }}
      >
        <div className="w-[72px] h-[72px] rounded-full border-[5px] border-white flex items-center justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-white text-[28px] md:text-[36px] font-bold px-4 max-w-2xl leading-tight">
          {t.devis.success}
        </h3>
      </div>

      {/* Left Form Side */}
      <div className={`w-full md:w-[55%] bg-white p-8 md:p-12 transition-opacity duration-500 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
        <form id="devis-form" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder={t.devis.form_name}
            className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
          />
          <input
            type="text"
            name="address"
            placeholder={t.devis.form_address}
            className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
          />
          <input
            type="text"
            name="zip"
            placeholder={t.devis.form_zip}
            className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder={t.devis.form_email}
            className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder={t.devis.form_phone}
            className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400"
          />

          <div className="mt-2">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              {t.devis.form_message}
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder={t.devis.form_message_placeholder}
              className="w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 resize-none"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              {t.devis.form_photos}
            </label>
            <input
              type="file"
              name="photos"
              accept="image/*"
              multiple
              className="w-full text-[13px] text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-[13px] file:font-bold file:bg-[#F2E9DA] file:text-[#8a6a3f] hover:file:bg-[#eadfc9] file:cursor-pointer cursor-pointer"
            />
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input type="checkbox" id="privacy" required className="mt-1" />
            <label htmlFor="privacy" className="text-[11px] text-gray-500 leading-tight">
              {t.devis.form_privacy1}<span style={{ color: brandColor }}>{t.devis.form_privacy2}</span>
            </label>
          </div>
          {submitError && (
            <p className="text-[12px] text-red-600">{submitError}</p>
          )}
        </form>
      </div>

      {/* Right Info Side */}
      <div className={`w-full md:w-[45%] p-8 md:p-12 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: brandColor }}>
        {/* Logo icon */}
        <div className="flex flex-col items-center mb-8">
          <img src="/images/Logo.png" alt="Logo" className="h-14 w-auto mb-4 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
          <div className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-bold">
            VITRACARE
          </div>
        </div>

        <p className="text-white text-[16px] leading-relaxed mb-10 font-medium">
          {t.devis.info_text}
        </p>

        <button
          type="submit"
          form="devis-form"
          disabled={isSubmitting}
          className="bg-white text-[#BA9765] text-[13px] font-bold px-8 py-3.5 rounded-full tracking-wider transition-all duration-300 border-2 border-white hover:bg-[#BA9765] hover:text-white active:bg-[#BA9765] active:text-white cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {isSubmitting ? '...' : t.hero.getQuote}
        </button>
      </div>
    </div>
  );
};
