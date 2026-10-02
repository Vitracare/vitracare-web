import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, address, zip, email, phone, message, source, photos } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Nom et email requis' });
    return;
  }

  // Phone is now collected on both forms, so it can no longer be used to tell
  // them apart — only address/zip are devis-only fields.
  const isDevis = address !== undefined || zip !== undefined;

  // The form sends the <option> value (not the translated label) since the
  // visitor's UI language isn't known server-side — map it to French here so
  // the lead email is always readable regardless of which language version
  // of the site the visitor used.
  const sourceLabels = {
    flyer: 'Flyer',
    site: 'Site internet / recherche Google',
    reviews: 'Avis en ligne (Google Maps, Trustpilot)',
    ai: 'Recherche avec une intelligence artificielle (ChatGPT, etc.)',
    wordofmouth: 'Bouche-à-oreille',
    other: 'Autre',
  };

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@vitracare.be',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const lines = isDevis
      ? [
          `Nom: ${name}`,
          `Adresse: ${address || '-'}`,
          `Code postal: ${zip || '-'}`,
          `Email: ${email}`,
          `Téléphone: ${phone || '-'}`,
          `Demande: ${message || '-'}`,
          `Comment nous avez-vous trouvés: ${sourceLabels[source] || '-'}`,
        ]
      : [
          `Nom: ${name}`,
          `Email: ${email}`,
          `Téléphone: ${phone || '-'}`,
          `Message: ${message || '-'}`,
          `Comment nous avez-vous trouvés: ${sourceLabels[source] || '-'}`,
        ];

    const attachments = Array.isArray(photos)
      ? photos.slice(0, 6).map((p) => ({
          filename: p.filename || 'photo.jpg',
          content: Buffer.from(p.contentBase64, 'base64'),
          contentType: p.contentType || 'image/jpeg',
        }))
      : [];

    await transporter.sendMail({
      from: '"VitraCare — Site web" <contact@vitracare.be>',
      to: 'contact@vitracare.be',
      replyTo: email,
      subject: isDevis ? `Nouvelle demande de devis — ${name}` : `Nouveau message de contact — ${name}`,
      text: lines.join('\n'),
      attachments,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Envoi impossible' });
  }
}
