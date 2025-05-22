import { useEffect, useRef } from 'react'; 
import Image from 'next/image';
import Header from '../components/Header';
import Contato from '../components/Contato';
import Head from 'next/head';
import SchemaMarkup from '../components/SchemaMarkup';


export default function Home() {
    const carouselRef = useRef(null);
    const currentIndexRef = useRef(0);
    const startXRef = useRef(0);
    const endXRef = useRef(0);

    const moveCarousel = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const items = carousel.querySelectorAll('.carousel-item');
        const itemCount = items.length;
        const isSmallScreen = window.innerWidth <= 768;

        currentIndexRef.current += direction;

        // Ajusta o índice baseado na direção
        if (currentIndexRef.current < 0) {
            currentIndexRef.current = itemCount - 1;
        } else if (currentIndexRef.current >= itemCount) {
            currentIndexRef.current = 0;
        }

        // Calcula o deslocamento
        const translateX = isSmallScreen
            ? -(currentIndexRef.current * 100) // Exibe uma imagem por vez em telas pequenas
            : -(currentIndexRef.current * (100 / 3)); // Exibe 3 imagens em telas maiores

        // Aplica o deslocamento ao carrossel
        carousel.style.transform = `translateX(${translateX}%)`;
    };

    // Lida com eventos de swipe
    const handleTouchStart = (e) => {
        startXRef.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        endXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = endXRef.current - startXRef.current;
        if (Math.abs(deltaX) > 50) { // Define um limite mínimo para considerar como swipe
            if (deltaX > 0) {
                moveCarousel(-1); // Swipe para a direita
            } else {
                moveCarousel(1); // Swipe para a esquerda
            }
        }
    };

    // Adiciona um evento para recalcular ao redimensionar a tela
    useEffect(() => {
        const handleResize = () => {
            moveCarousel(0); // Reajusta o carrossel ao redimensionar
        };

        const carousel = carouselRef.current;
        if (carousel) {
            // Adiciona os eventos de toque
            carousel.addEventListener('touchstart', handleTouchStart);
            carousel.addEventListener('touchmove', handleTouchMove);
            carousel.addEventListener('touchend', handleTouchEnd);
        }

        window.addEventListener('resize', handleResize);

        const interval = setInterval(() => {
            moveCarousel(1); // Avança automaticamente
        }, 10000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);

            if (carousel) {
                // Remove os eventos de toque
                carousel.removeEventListener('touchstart', handleTouchStart);
                carousel.removeEventListener('touchmove', handleTouchMove);
                carousel.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, []);

    return (

        <>
            
            <Head>
                <title>Sarracena Uniformes Personalizados | Profissionais, Escolares e EPIs</title>
                <meta name="description" content="Uniformes profissionais, escolares, médicos, esportivos e mais. Atendimento em São Carlos, região e todo o Brasil. Solicite um orçamento!" />
                <meta name="keywords" content="uniformes São Carlos, uniformes profissionais, uniformes personalizados, jaleco, uniforme médico, camiseta personalizada, uniforme escolar, uniforme empresa" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Uniformes em São Carlos | Sarracena Uniformes" />
                <meta property="og:description" content="Especializada em uniformes profissionais e personalizados. Atendemos São Carlos e todo o Brasil." />
                <meta property="og:image" content="/midias/geral.png" />
                <meta property="og:url" content="https://www.sarracenauniformes.com.br/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <SchemaMarkup />
            
            <div>
                <Header />

                <div className="grid_content">
                    {/* Conteúdo da Apresentação */}
                    <div className="apresentacao">
                        <div className="descricao">
                            <h1> Uniformes </h1>
                            <p>Símbolo de <strong>Unidade</strong> e <strong>Identidade</strong>.</p>
                            <p>Ao usar um uniforme vestimos uma <strong>História</strong>, um <strong>Propósito</strong>.</p>
                            <p>Um bom uniforme traduz os valores, a disciplina e o compromisso de cada indivíduo com a <strong>Missão</strong> de sua equipe.</p>
                            <p>Nossa <strong>Missão</strong> é criar uniformes que não apenas vestem, mas que deixam uma marca duradoura.</p>
                        </div>
                        <div className="imagem">
                            <Image src="/midias/geral.png" alt="Uniformes em São Carlos" width={500} height={400} />
                        </div>
                    </div>

                    <div className="linhas_prod" id="produtos">
                        <h1>Conheça nossos Produtos</h1>
                        <div className="carousel-container">
                            <button className="prev" onClick={() => moveCarousel(-1)}>&#10094;</button>
                            <div className="carousel" ref={carouselRef}>
                                <div className="carousel-item">
                                    <a href="/produtos">
                                        <div className="product-name">Linha Médica</div>
                                        <Image src="/midias/geral.png" alt="Jaleco branco com detalhes da linha médica" width={300} height={400} />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="/produtos">
                                        <div className="product-name">Linha Escolar</div>
                                        <Image src="/midias/geral.png" alt="Uniforme escolar com camiseta e bermuda para crianças" width={300} height={400} />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="/produtos">
                                        <div className="product-name">Linha Street</div>
                                        <Image src="/midias/street.jpg" alt="Conjunto moderno da linha street com estilo casual" width={300} height={400} />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="/produtos">
                                        <div className="product-name">Linha Escritório</div>
                                        <Image src="/midias/escritorio.jpg" alt="Uniforme social para escritório com camisa e calça" width={300} height={400} />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="/produtos">
                                        <div className="product-name">Linha Cozinha</div>
                                        <Image src="/midias/geral.png" alt="Roupa de chef da linha cozinha com avental e touca" width={300} height={400} />
                                    </a>
                                </div>
                                <div className="carousel-item">
                                    <a href="/produtos">
                                        <div className="product-name">Linha Esportiva</div>
                                        <Image src="/midias/geral.png" alt="Uniforme esportivo com camiseta dry fit e bermuda da linha esportiva" width={300} height={400} />
                                    </a>
                                </div>
                            </div>
                            <button className="next" onClick={() => moveCarousel(1)}>&#10095;</button>
                        </div>
                    </div>

                    {/* Componente de Contato */}
                    <Contato />
                </div>

                <footer>
                    <p>&copy; 2024 Sarracena. Todos os direitos reservados.</p>
                    <p>Atendimento em São Carlos - SP, região e todo o Brasil.</p>
                </footer>

            </div>
    </>
    );
}