import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    const { nome, email, descricao } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !email || !descricao) {
        return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465, // ou 587, se preferir TLS
        secure: true, // SSL na porta 465 ou TLS na porta 587
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // o endereço autenticado
        to: 'leo.a.petrilli@gmail.com',
        replyTo: email, // permite responder ao e-mail do usuário
        subject: `Novo contato de ${nome}`,
        text: descricao,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ success: false, error: 'Erro ao enviar o e-mail. Tente novamente mais tarde.' });
    }
}
