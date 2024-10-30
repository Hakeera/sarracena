import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <Link href="/" passHref>
                        <Image src="/midias/Logo_Bege.png" alt="Logo Sarracena" width={150} height={150} />
                    </Link>
                </div>
                <div className="divider"></div>
                <nav>
                    <ul>
                        <li><Link href="/#home">Home</Link></li>
                        <li><Link href="/#produtos">Produtos</Link></li>
                        <li><Link href="/#clientes">Clientes</Link></li>
                        <li><Link href="/#sobre">Sobre</Link></li>
                        <li><Link href="/#contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
