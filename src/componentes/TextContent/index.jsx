import { ExternalLink } from "lucide-react";
import "./TextContent.css";
import ProjetoAram from "./assets/ProjetoAram.png";

const TextContent = () => {
  return (
    <div className="container_direito">
      <section className="container_texto">
        <p>
          Olá, meu nome é Wagner Filho. Atualmente curso{" "}
          <strong className="negrito">
            Análise e Desenvolvimento de Sistemas
          </strong>{" "}
          na Estácio e, nos últimos 5 meses, tenho me dedicado ao aprendizado e
          aprimoramento em tecnologias como{" "}
          <strong className="negrito">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            >
              {" "}
              HTML5,
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            >
              {" "}
              CSS3,
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            >
              {" "}
              JavaScript,
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://react.dev"
            >
              {" "}
              React,
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nodejs.org/en"
            >
              {" "}
              Node.js,
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wcmF0"
            >
              {" "}
              Git e GitHub.
            </a>
          </strong>
        </p>
        <p>
          <strong className="negrito">
            Estou em busca da minha primeira oportunidade na área de
            Desenvolvimento,{" "}
          </strong>{" "}
          pronto para aplicar os conhecimentos adquiridos e continuar evoluindo
          profissionalmente.
        </p>
        <p>
          Sou bacharel em Direito e recentemente realizei uma transição de
          carreira para a área de Desenvolvimento, motivado pela paixão por
          tecnologia e inovação. Durante minha experiência com o direito, pude
          desenvolver e fortalecer minhas soft skills, como comunicação,
          organização e trabalho em equipe, que considero essenciais para
          qualquer área de atuação.
        </p>
      </section>

      <section id="projetos" className="container_projetos">
        <div className="container__projetos">
          <ul className="container_lista_projeto">
            <li>
              <a
                href="https://aram-randomizer-roan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    className="projetoAram"
                    src={ProjetoAram}
                    alt="Imagem do ProjetoAram"
                  ></img>

                  <div className="projeto_texto">
                    <h3>
                      AramRandomizer <ExternalLink size={18} />
                    </h3>
                    <p>
                      Um aplicativo web simples projetado para resolver um
                      problema específico em jogos personalizados de ARAM.{" "}
                      <strong className="negrito">
                        (Modo de Jogo de League of Legends).
                      </strong>{" "}
                      No ARAM padrão, os jogadores geralmente têm 2 rerolls,
                      criando uma seleção de 15 campeões. No entanto, essa
                      funcionalidade não está disponível em jogos
                      personalizados. Este aplicativo resolve o problema se
                      comunicando com a API do Jogo gerando aleatoriamente ate
                      50 campeões únicos para cada equipe. Além disso, ele
                      inclui um recurso prático para visualizar buffs e nerfs
                      dos campeões com base no patch atual do jogo.
                    </p>
                    <div className="tecnologias">
                      <span className="tag">JavaScript</span>
                      <span className="tag">HTML</span>
                      <span className="tag">CSS</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://codeconnect-react-app.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    className="projetoAram"
                    src={ProjetoAram}
                    alt="Imagem do ProjetoAram"
                  ></img>

                  <div className="projeto_texto">
                    <h3>
                      CodeConnectApp <ExternalLink size={18} />
                    </h3>
                    <p>
                      A tela de feed da aplicação apresenta um menu de
                      navegação, uma barra de pesquisa, seções de filtros e
                      ordenação, além de cards que resumem as postagens
                      realizadas na plataforma. Atualmente, todos os elementos
                      possuem apenas funcionalidades visuais.
                    </p>
                    <div className="tecnologias">
                      <span className="tag">React</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">HTML</span>
                      <span className="tag">CSS</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://fokus-ts-one.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    className="projetoAram"
                    src={ProjetoAram}
                    alt="Imagem do ProjetoAram"
                  ></img>

                  <div className="projeto_texto">
                    <h3>
                      Fokus Pomodoro
                      <ExternalLink size={18} />
                    </h3>
                    <p>
                      Criei um timer Pomodoro intuitivo para aumentar a
                      produtividade, com funções de lista de tarefas e música
                      integrada para aprimorar o foco e o gerenciamento de
                      tempo.
                    </p>
                    <div className="tecnologias">
                      <span className="tag">JavaScript</span>
                      <span className="tag">TypeScript</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://spotify-react-jet.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <img
                    className="projetoAram"
                    src={ProjetoAram}
                    alt="Imagem do ProjetoAram"
                  ></img>

                  <div className="projeto_texto">
                    <h3>
                      Spotify Clone <ExternalLink size={18} />
                    </h3>
                    <p>
                      Projeto desenvolvido junto à imersão da Alura, que
                      consistia em criar uma réplica do site Spotify e criar uma
                      API com alguns artistas
                    </p>
                    <div className="tecnologias">
                      <span className="tag">React</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">HTML</span>
                      <span className="tag">CSS</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        Portfólio inspirado pela{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://brittanychiang.com"
        >
          {" "}
          Brittany chiang
        </a>
        , codificado no{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://code.visualstudio.com"
        >
          Visual Studio Code
        </a>{" "}
        por mim mesmo. Construído com{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://react.dev">
          React
        </a>
        , implantado com{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://vercel.com/">
          Vercel
        </a>
        . Todo o texto está configurado na fonte{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://rsms.me/inter//"
        >
          Inter.
        </a>
        .
      </footer>
    </div>
  );
};

export default TextContent;
