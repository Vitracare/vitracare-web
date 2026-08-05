import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, address, zip, email, phone } = req.body || {};

  if (!name || !email) {
    res.status(400).json({ error: 'Nom et email requis' });
    return;
  }

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

    await transporter.sendMail({
      from: '"VitraCare — Site web" <contact@vitracare.be>',
      to: 'contact@vitracare.be',
      replyTo: email,
      subject: `Nouvelle demande de devis — ${name}`,
      text: [
        `Nom: ${name}`,
        `Adresse: ${address || '-'}`,
        `Code postal: ${zip || '-'}`,
        `Email: ${email}`,
        `Téléphone: ${phone || '-'}`,
      ].join('\n'),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Envoi impossible' });
  }
}
