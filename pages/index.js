import { useEffect } from 'react';
import Image from 'next/image';

let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = itemCount - 3;
    } else if (currentIndex > itemCount - 3) {
        currentIndex = 0;
    }

    const translateX = -(currentIndex * (110 / 3));
    carousel.style.transform = `translateX(${translateX}%)`;
}

export default function Home() {
    useEffect(() => {
        const interval = setInterval(() => {
            moveCarousel(1);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header>
                <div className="header-content">
                    <div className="logo">
                        <Image src="/midias/Logo_Bege.png" alt="Logo Sarracena" width={150} height={150} />
                    </div>
                    <div className="divider"></div>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#produtos">Produtos</a></li>
                            <li><a href="#clientes">Clientes</a></li>
                            <li><a href="#sobre">Sobre</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="grid_content">
                <div className="apresentacao">
                    <div className="descricao">
                        <h1> u • ni • for • me </h1>
                        <p>
                            Símbolo de <strong>Unidade</strong> e <strong>Identidade</strong>.
                        </p>
                        <p>
                            Ao usar um uniforme vestimos uma <strong>História</strong>, um <strong>Propósito</strong>.
                        </p>
                        <p>
                            Um bom uniforme traduz os valores, a disciplina e o compromisso de cada indivíduo com a <strong>Missão</strong> de sua equipe.
                        </p>
                        <p>
                            Nossa <strong>Missão</strong> é criar uniformes que não apenas vestem, mas que deixam uma marca duradoura.
                        </p>
                    </div>
                    <div className="imagem">
                        <Image src="/midias/img1.png" alt="Imagem representativa" width={500} height={400} />
                    </div>
                </div>

                <div className="linhas_prod" id="produtos">
                    <h1>Conheça nossos Produtos</h1>
                    <div className="carousel-container">
                        <button className="prev" onClick={() => moveCarousel(-1)}>&#10094;</button>
                        <div className="carousel">
                            <div className="carousel-item">
                                <a href="produtos.html">
                                    <div className="product-name">Linha Médica</div>
                                    <Image src="/midias/img3.jpg" alt="Produto 2" width={300} height={200} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="produtos.html">
                                    <div className="product-name">Linha Escolar</div>
                                    <Image src="/midias/img4.jpg" alt="Produto 3" width={300} height={200} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="produtos.html">
                                    <div className="product-name">Linha Rural</div>
                                    <Image src="/midias/img5.jpg" alt="Produto 4" width={300} height={200} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="produtos.html">
                                    <div className="product-name">Linha Escritório</div>
                                    <Image src="/midias/img6.jpg" alt="Produto 5" width={300} height={200} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="produtos.html">
                                    <div className="product-name">Linha Cozinha</div>
                                    <Image src="/midias/img7.jpg" alt="Produto 6" width={300} height={200} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="produtos.html">
                                    <div className="product-name">Linha Esportiva</div>
                                    <Image src="/midias/img2.jpg" alt="Produto 1" width={300} height={200} />
                                </a>
                            </div>
                        </div>
                        <button className="next" onClick={() => moveCarousel(1)}>&#10095;</button>
                    </div>
                </div>

                <div className="clientes" id="clientes">
                    <h1>Nossos Clientes</h1>
                </div>

                <div className="contato">
                    <h1>Entre em Contato</h1>
                    <form className="contact-form" action="mailto:seuemail@empresa.com" method="post" enctype="text/plain">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="descricao">Descrição:</label>
                        <textarea id="descricao" name="descricao" rows="5" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>

                    <div className="contact-info" id="contato">
                        <h2>Contatos</h2>
                        <p><strong>Telefone:</strong> 16 99626.5295 </p>
                        <p><strong>Email:</strong> saracenauniformes@gmail.com</p>
                        <p><strong>Endereço:</strong> Rua Antônio Blanco, 473 - São Carlos, SP</p>
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 Sarracena. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
