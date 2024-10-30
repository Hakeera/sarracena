import Image from 'next/image';
import Header from '../components/Header';  // Importando o componente Header

export default function Produtos() {
    return (
        <div>
            <Header />

            <div className="grid-content">
                <div className="produto">
                    <h2>Linha Escolar</h2>
                    <Image src="/midias/geral.png" alt="Uniformes Escolares" width={400} height={300} />
                    <p>
                        Nossa Linha Escolar é projetada para refletir a identidade e os valores das instituições de ensino.
                        Personalizamos uniformes que vão desde o tradicional até o moderno, sempre priorizando conforto e
                        resistência, para suportar o dia a dia das atividades escolares. Os clientes podem escolher tecidos resistentes, de fácil 
                        manutenção e modelagens práticas, garantindo que os estudantes estejam sempre confortáveis, bem apresentados e que seus uniformes resistam bastante durante o ano letivo inteiro.
                    </p>
                </div>

                <div className="produto">
                    <h2>Linha Escritório</h2>
                    <Image src="/midias/escritorio.jpg" alt="Uniformes para Escritório" width={400} height={500} />
                    <p>
                        A Linha Escritório oferece elegância e funcionalidade. Para ambientes corporativos, confeccionamos peças com
                        cortes refinados e tecidos de alta qualidade que promovem conforto durante a rotina de trabalho.
                        Atendemos a personalizações que expressam a identidade da empresa, e nossos clientes podem optar por detalhes como
                        tecidos leves e resistentes, modelagens modernas e ajustes que garantem um visual profissional e personalizado.
                    </p>
                </div>

                <div className="produto">
                    <h2>Linha Médica</h2>
                    <Image src="/midias/geral.png" alt="Uniformes Médicos" width={400} height={300} />
                    <p>
                        Desenvolvida para profissionais da saúde, a Linha Médica preza pela segurança e pelo conforto. Nossos
                        uniformes são feitos com tecidos antimicrobianos e de fácil limpeza, atendendo às exigências dos clientes que buscam
                        praticidade e proteção. Disponibilizamos várias modelagens para jalecos e aventais, e o cliente participa da escolha
                        dos detalhes que tornarão as peças exclusivas e funcionais.
                    </p>
                </div>

                <div className="produto">
                    <h2>Linha Cozinha</h2>
                    <Image src="/midias/geral.png" alt="Uniformes para Cozinha" width={400} height={300} />
                    <p>
                        Nossa Linha Cozinha é pensada para atender os profissionais do ramo gastronômico. Com tecidos resistentes ao calor
                        e respiráveis, oferecemos peças que combinam conforto e durabilidade. Os clientes podem optar por aventais, dólmãs
                        e calças, além de detalhes específicos, como bolsos estratégicos e proteção extra para
                        manipulação de alimentos.
                    </p>
                </div>

                <div className="produto">
                    <h2>Linha Esportiva</h2>
                    <Image src="/midias/linha_esportiva.jpg" alt="Uniformes Esportivos" width={400} height={500} />
                    <p>
                        Ideal para atividades físicas, a Linha Esportiva oferece uniformes com tecidos leves e de secagem rápida.
                        Os uniformes são personalizados de acordo com as modalidades esportivas, e os clientes podem escolher entre
                        modelagens que priorizam mobilidade e conforto, além de designs exclusivos que reforçam a identidade da equipe.
                    </p>
                </div>

                <div className="produto">
                    <h2>Linha Produção</h2>
                    <Image src="/midias/street.jpg" alt="Uniformes para Produção" width={400} height={500} />
                    <p>
                        A Linha Produção atende a indústrias e empresas que necessitam de uniformes duráveis e funcionais EPI. Confeccionamos
                        peças resistentes para suportar ambientes de trabalho exigentes, oferecendo opções com reforço em áreas de
                        desgaste e tecidos que protegem contra resíduos e temperaturas extremas. O cliente pode customizar a modelagem 
                        para atender às necessidades específicas de cada função.
                    </p>
                </div>

                <div className="produto">
                    <h2>Linha Básica</h2>
                    <Image src="/midias/geral.png" alt="Uniformes Básicos" width={400} height={300} />
                    <p>
                        Nossa Linha Básica é ideal para quem busca simplicidade e eficiência. Com camisetas e blusas de modelagem predefinida, 
                        essa linha permite apenas a personalização com a logo da empresa, sem outras customizações. A proposta é oferecer produtos acessíveis 
                        e de rápida entrega, perfeitos para atender grandes demandas de uniformes básicos com qualidade e praticidade.
                    </p>
                </div>
            </div>
            {/* Seção de contato */}
            <div className="contact-section">
                <p>
                    Para mais informações ou para realizar orçamentos e pedidos, <a href="/#contato">entre em contato conosco</a>! 
                </p>
            </div>
            <footer>
                <p>&copy; 2024 Sarracena. Todos os direitos reservados.</p>
            </footer>

            <style jsx>{`
                .grid-content {
                    display: grid;
                    gap: 20px;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                }
                .produto {
                    text-align: center;
                }
                .produto h2 {
                    font-family: 'Bai Jamjuree', system-ui;
                    font-weight: 900;
                    color: #697548;
                    font-size: 38px;
                    text-align: center;
                    margin-bottom: 1px;
                }
                .produto p {
                    font-family: 'Bai Jamjuree', system-ui;
                    font-weight:400;
                    color: #1f2424;
                    font-size: 22px;
                    text-align: center;
                }
                .imagem {
                    border-radius: 5px;
                    max-width: 100%;
                    height: auto;
                    object-fit: cover;
                }
                .contact-section {
                    margin: 40px 0;
                    text-align: center;
                    font-family: 'Bai Jamjuree', system-ui;
                    font-weight: 500;
                    font-size: 20px;
                    color: #1f2424;
                }
                .contact-section a {
                    color: #1f2424;
                    font-weight: bold;
                    text-decoration: none;
                    border-bottom: 2px solid #1f2424;
                    padding-bottom: 2px;
                }
                .contact-section a:hover {
                    color: #697548;
                    border-color: #697548;
                }
            `}</style>
        </div>
    )
}