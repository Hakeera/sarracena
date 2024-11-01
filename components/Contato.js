import { useRef, useState } from 'react';

export default function Contato() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        const formData = {
            nome: form.current.nome.value,
            email: form.current.email.value,
            descricao: form.current.descricao.value,
        };

        try {
            const response = await fetch('/api/send_email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('E-mail enviado com sucesso!');
                form.current.reset();
            } else {
                setStatus('Erro ao enviar e-mail. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            setStatus('Erro ao enviar e-mail. Tente novamente.');
        }
    };

    return (
        <div className="contato">
            <h1>Entre em Contato</h1>
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="descricao">Descrição:</label>
                <textarea id="descricao" name="descricao" rows="5" required></textarea>

                <button type="submit">Enviar</button>
            </form>

            {status && <p className="status-message">{status}</p>}

            <div className="contact-info" id="contato">
                <h2>Contatos</h2>
                <p><strong>Telefone:</strong> 16 99626.5295 </p>
                <p><strong>Email:</strong> saracenauniformes@gmail.com</p>
                <p><strong>Endereço:</strong> Rua Antônio Blanco, 473 - São Carlos, SP</p>
            </div>
        </div>
    );
}
