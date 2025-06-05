// components/Clientes.js
import Image from 'next/image';

export default function Clientes() {
    const logos = [
        { src: '/midias/logo_LaSalle.png', alt: 'Cliente 1' },
        { src: '/midias/logo_Latam.png', alt: 'Cliente 2' },
        { src: '/midias/logo_cecilia.png', alt: 'Cliente 3' },
    ];

    return (
        <div className="clientes-section" id="clientes">
            <h1>Nossos Clientes</h1>
            <div className="clientes-grid">
                {logos.map((logo, index) => (
                    <div key={index} className="cliente-logo">
                        <Image src={logo.src} alt={logo.alt} width={150} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
}
