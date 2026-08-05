import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, address, zip, email, phone, message, photos } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Nom et email requis' });
    return;
  }

  const isDevis = address !== undefined || zip !== undefined || phone !== undefined;

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
        ]
      : [
          `Nom: ${name}`,
          `Email: ${email}`,
          `Message: ${message || '-'}`,
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
