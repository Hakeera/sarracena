import { useEffect, useRef } from 'react'; 
import Image from 'next/image';
import Header from '../components/Header';
import Contato from '../components/Contato';

export default function Home() {
    const carouselRef = useRef(null);
    const currentIndexRef = useRef(0);
    
    const moveCarousel = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return; // Evita erros caso o carrossel não esteja montado
    
        const items = carousel.querySelectorAll('.carousel-item');
        const itemCount = items.length;
        const isSmallScreen = window.innerWidth <= 768; // Define o limite para telas pequenas
    
        currentIndexRef.current += direction;
    
        // Ajusta o índice baseado na direção
        if (currentIndexRef.current < 0) {
            currentIndexRef.current = itemCount - 1; // Vai para o último item
        } else if (currentIndexRef.current >= itemCount) {
            currentIndexRef.current = 0; // Volta para o primeiro item
        }
    
        // Calcula o deslocamento
        const translateX = isSmallScreen
            ? -(currentIndexRef.current * 100) // Move 100% para exibir uma imagem por vez
            : -(currentIndexRef.current * (100 / 3)); // Move para exibir 3 imagens em telas maiores
    
        // Aplica o deslocamento ao carrossel
        carousel.style.transform = `translateX(${translateX}%)`;
    };
    
    // Adiciona um evento para recalcular ao redimensionar a tela
    useEffect(() => {
        const handleResize = () => {
            moveCarousel(0); // Reajusta o carrossel ao redimensionar
        };
    
        window.addEventListener('resize', handleResize);
    
        const interval = setInterval(() => {
            moveCarousel(1);
        }, 10000);
    
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
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
                        <Image src="/midias/geral.png" alt="Imagem representativa" width={500} height={400} />
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
                                    <Image src="/midias/geral.png" alt="Produto 2" width={300} height={400} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="/produtos">
                                    <div className="product-name">Linha Escolar</div>
                                    <Image src="/midias/geral.png" alt="Produto 3" width={300} height={400} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="/produtos">
                                    <div className="product-name">Linha Street</div>
                                    <Image src="/midias/street.jpg" alt="Produto 4" width={300} height={400} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="/produtos">
                                    <div className="product-name">Linha Escritório</div>
                                    <Image src="/midias/escritorio.jpg" alt="Produto 5" width={300} height={400} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="/produtos">
                                    <div className="product-name">Linha Cozinha</div>
                                    <Image src="/midias/geral.png" alt="Produto 6" width={300} height={400} />
                                </a>
                            </div>
                            <div className="carousel-item">
                                <a href="/produtos">
                                    <div className="product-name">Linha Esportiva</div>
                                    <Image src="/midias/geral.png" alt="Produto 1" width={300} height={400} />
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
            </footer>
        </div>
    );
}