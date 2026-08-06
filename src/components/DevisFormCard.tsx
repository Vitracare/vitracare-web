import { useState, type FormEvent, type ChangeEvent } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

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
            <input
              type="file"
              name="photos"
              accept="image/*"
              multiple
              onChange={handlePhotosChange}
              className="w-full text-[13px] text-gray-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-[13px] file:font-bold file:bg-[#F2E9DA] file:text-[#8a6a3f] hover:file:bg-[#eadfc9] file:cursor-pointer cursor-pointer"
            />
            {isCompressing && (
              <p className="text-[12px] text-gray-500 mt-2">{t.devis.compressing}</p>
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
          disabled={isSubmitting || isCompressing}
          className="bg-white text-[#BA9765] text-[13px] font-bold px-8 py-3.5 rounded-full tracking-wider transition-all duration-300 border-2 border-white hover:bg-[#BA9765] hover:text-white active:bg-[#BA9765] active:text-white cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {isSubmitting ? '...' : t.hero.getQuote}
        </button>
      </div>
    </div>
  );
};
