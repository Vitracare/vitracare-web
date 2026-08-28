import { useState, type FormEvent, type ChangeEvent } from 'react';
import { X, ImagePlus, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LocalizedLink as Link } from './LocalizedLink';

const brandColor = '#BA9765';
const MAX_PHOTOS_BYTES = 3.5 * 1024 * 1024; // stays under the ~4.5MB serverless request limit once base64-encoded
const MAX_PHOTOS_COUNT = 12;
const COMPRESS_MAX_DIM = 1280;
const COMPRESS_QUALITY = 0.72;

type PhotoItem = {
  filename: string;
  contentType: string;
  dataUrl: string;
  size: number;
};

const compressImage = (file: File): Promise<PhotoItem> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > COMPRESS_MAX_DIM || height > COMPRESS_MAX_DIM) {
          if (width > height) {
            height = Math.round((height * COMPRESS_MAX_DIM) / width);
            width = COMPRESS_MAX_DIM;
          } else {
            width = Math.round((width * COMPRESS_MAX_DIM) / height);
            height = COMPRESS_MAX_DIM;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) { reject(new Error('no canvas context')); return; }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', COMPRESS_QUALITY);
        const size = Math.round((dataUrl.length - dataUrl.indexOf(',') - 1) * 0.75);
        resolve({ filename: file.name.replace(/\.\w+$/, '.jpg'), contentType: 'image/jpeg', dataUrl, size });
      };
      img.onerror = () => reject(new Error('image decode failed'));
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const DevisFormCard = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [attempted, setAttempted] = useState(false);

  const handlePhotosChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: File[] = e.target.files ? Array.from(e.target.files) : [];
    e.target.value = '';
    if (files.length === 0) return;

    setSubmitError('');
    setIsCompressing(true);
    try {
      const compressed = await Promise.all(files.map((f) => compressImage(f).catch(() => null)));
      const valid = compressed.filter((p): p is PhotoItem => p !== null);
      setPhotos((prev) => [...prev, ...valid].slice(0, MAX_PHOTOS_COUNT));
    } finally {
      setIsCompressing(false);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const invalidClass = attempted
    ? 'invalid:border-red-400 invalid:focus:border-red-400'
    : '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    const formEl = e.currentTarget;
    if (!formEl.checkValidity()) {
      setAttempted(true);
      setSubmitError(t.devis.required_error);
      formEl.reportValidity();
      return;
    }

    const totalSize = photos.reduce((sum, p) => sum + p.size, 0);
    if (totalSize > MAX_PHOTOS_BYTES) {
      setSubmitError(t.devis.photos_too_large);
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(formEl);
      const payload = {
        name: formData.get('name'),
        address: formData.get('address'),
        zip: formData.get('zip'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        photos: photos.map((p) => ({
          filename: p.filename,
          contentType: p.contentType,
          contentBase64: p.dataUrl.split(',')[1],
        })),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setIsSubmitted(true);
    } catch {
      setSubmitError(t.devis.form_error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row rounded-[16px] overflow-hidden shadow-2xl relative">

      {/* Success Overlay — fixed to the viewport (not the card) so it's always visible immediately on submit, regardless of scroll position or card height */}
      <div
        className={`fixed inset-0 z-[200] flex flex-col items-center justify-center p-8 md:p-12 text-center transition-opacity duration-500 ease-in-out ${isSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
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
        <Link to="/" className="mt-8 text-white underline text-[14px] font-bold">
          {t.back}
        </Link>
      </div>

      {/* Left Form Side — shown first on mobile. Used to be ordered second (info panel
          first) back when the submit button lived in the info panel, but the button now
          lives at the end of the form itself, so putting the form first is what actually
          gets a visitor to the fields fastest — an audit found the fields weren't
          visible at all without scrolling under the old order. */}
      <div className={`w-full md:w-[55%] bg-white p-6 md:p-12 transition-opacity duration-500 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
        <form id="devis-form" className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate={false}>
          <input
            type="text"
            name="name"
            required
            placeholder={`${t.devis.form_name} *`}
            className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 ${invalidClass}`}
          />
          <input
            type="text"
            name="address"
            required
            placeholder={`${t.devis.form_address} *`}
            className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 ${invalidClass}`}
          />
          <input
            type="text"
            name="zip"
            required
            placeholder={`${t.devis.form_zip} *`}
            className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 ${invalidClass}`}
          />
          <input
            type="email"
            name="email"
            required
            placeholder={`${t.devis.form_email} *`}
            className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 ${invalidClass}`}
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
              required
              rows={4}
              placeholder={`${t.devis.form_message_placeholder} *`}
              className={`w-full border border-gray-200 rounded-md px-4 py-3.5 text-[14px] outline-none focus:border-[#BA9765] text-gray-700 placeholder:text-gray-400 resize-none ${invalidClass}`}
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              {t.devis.form_photos}
            </label>
            {/* The native file input's "No file chosen" text can't be restyled via CSS in
                any browser — Tailwind's file: utilities only reach the button part. So the
                input itself is visually hidden and a real label drives it instead, with our
                own photo count replacing the un-stylable native text entirely. */}
            <label
              htmlFor="devis-photos"
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-md text-[13px] font-bold bg-[#F2E9DA] text-[#8a6a3f] hover:bg-[#eadfc9] cursor-pointer transition-colors"
            >
              <ImagePlus size={15} />
              {t.devis.form_photos_button}
            </label>
            <input
              id="devis-photos"
              type="file"
              name="photos"
              accept="image/*"
              multiple
              onChange={handlePhotosChange}
              className="sr-only"
            />
            {isCompressing && (
              <p className="text-[12px] text-gray-500 mt-2">{t.devis.compressing}</p>
            )}
            {!isCompressing && photos.length > 0 && (
              <p className="text-[12px] text-gray-500 mt-2">{photos.length} photo{photos.length > 1 ? 's' : ''}</p>
            )}
            {photos.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mt-3">
                {photos.map((p, i) => (
                  <div key={i} className="relative aspect-square rounded-md overflow-hidden border border-gray-200 group">
                    <img src={p.dataUrl} alt={p.filename} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removePhoto(i)}
                      aria-label={t.devis.remove_photo}
                      className="absolute top-1 right-1 bg-black/60 hover:bg-black/80 text-white rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-start gap-2 mt-2">
            <input type="checkbox" id="privacy" required className="mt-1" />
            <label htmlFor="privacy" className="text-[11px] text-gray-500 leading-tight">
              {t.devis.form_privacy1}<span style={{ color: brandColor }}>{t.devis.form_privacy2}</span>
            </label>
          </div>

          <p className="text-[11px] text-gray-400">{t.devis.required_note}</p>

          {submitError && (
            <p className="text-[12px] text-red-600">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isCompressing}
            className="mt-2 text-white text-[13px] font-bold px-8 py-3.5 rounded-full tracking-wider transition-all duration-300 border-2 border-[#BA9765] hover:bg-transparent hover:text-[#BA9765] active:bg-transparent active:text-[#BA9765] cursor-pointer disabled:opacity-60 disabled:cursor-wait w-fit self-center"
            style={{ backgroundColor: brandColor }}
          >
            {isSubmitting ? '...' : t.hero.getQuote}
          </button>
        </form>
      </div>

      {/* Right Info Side — brand + reassurance text, now shown after the form on mobile */}
      <div className={`w-full md:w-[45%] p-6 md:p-12 flex flex-col items-center justify-center text-center transition-opacity duration-500 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`} style={{ backgroundColor: brandColor }}>
        {/* Logo icon */}
        <div className="flex flex-col items-center mb-8">
          <img src="/images/Logo.png" alt="Logo" className="h-14 w-auto mb-4 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
          <div className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-bold">
            VITRACARE
          </div>
        </div>

        <p className="text-white text-[16px] leading-relaxed font-medium">
          {t.devis.info_text}
        </p>

        {/* Permanent WhatsApp alternative — the popup that offers this elsewhere on the
            site is deliberately hidden on /devis, but a form-averse visitor landing
            directly on the quote page had no chat option at all before this. */}
        <a
          href="https://wa.me/32489607074"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-white/90 hover:text-white text-[13px] font-bold underline underline-offset-2 transition-colors"
        >
          <MessageCircle size={16} />
          {t.devis.whatsapp_cta}
        </a>
      </div>
    </div>
  );
};
