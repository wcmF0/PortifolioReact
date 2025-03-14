import "./About.css";
import { Github, Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import { FileUser } from "lucide-react";

const About = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wcmf2002@gmail.com");
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };
  return (
    <div className="container_esquerdo">
      <header className="header">
        <h1 className="h1">Wagner Filho</h1>
        <h2 className="h2">Desenvolvedor Front End</h2>
        <p className="p">
          Desenvolvo interfaces web funcionais e acessíveis, garantindo
          usabilidade e desempenho.
        </p>
        <nav>
          <ul className="container_lista">
            <li>
              <a
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <span>SOBRE MIM</span>
              </a>
            </li>
            <li>
              <a>
                <span
                  onClick={() => {
                    const projetosSection = document.getElementById("projetos");
                    if (projetosSection) {
                      projetosSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  PROJETOS
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <ul className="container_redes">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/wcmF0"
          >
            <Github color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/wcmf0/"
          >
            <Linkedin color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/wcmf007/"
          >
            <Instagram color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            href="/src/assets/Currículo Wagner Costa Magalhães Filho.pdf"
            download
          >
            <FileUser color="#ffffff" />
          </a>
        </li>
        <li onClick={handleCopyEmail} style={{ cursor: "pointer" }}>
          <Mail color="#ffffff" />
        </li>
      </ul>
      {showCopied && <div className="copied-message">Email copiado!</div>}
    </div>
  );
};

export default About;
