import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        <div className="header">
          <div className="header-nav">
            <nav>
              <a href="#intro">Home</a>
              <a href="#technologies">Tecnologias</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contatos</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="section-intro" id="intro">
        <div className="intro">
          <h1>Olá, eu sou o Leonardo.</h1>
          <div className="actions">
            <a href="mailto:leofwingert@dominio.com">Entrar em contato</a>
          </div>
        </div>
        <div>
          <img src="./src/assets/foca2.jpeg" alt="profile" />
        </div>
      </section>

      {/* <section className="section-about" id="about">
        <div className="about">
          <h2>Sobre mim</h2>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              fuga explicabo ducimus dolorem velit ipsum tempore dignissimos
              distinctio! Temporibus laboriosam magni, facere odio numquam
              labore aperiam dolor. Asperiores, id! Laboriosam?
            </p>
          </div>
        </div>
      </section> */}

      <section className="section-technologies" id="technologies">
        <div className="technologies">
          <h1>Tecnologias</h1>
          <div className="cards">
            <div className="box" id="nest-box">
              <p>Nest</p>
              <img src="./src/assets/nest.svg" alt="nest" />
            </div>
            <div className="box" id="postgresql-box">
              <p>PostgreSQL</p>
              <img src="./src/assets/postgresql.svg" alt="postgre" />
            </div>
            <div className="box" id="prisma-box">
              <p>Prisma</p>
              <img src="./src/assets/prisma.svg" alt="prisma" />
            </div>
            <div className="box" id="docker-box">
              <p>Docker</p>
              <img src="./src/assets/docker.svg" alt="docker" />
            </div>
            <div className="box" id="typescript-box">
              <p>Typescript</p>
              <img src="./src/assets/ts.png" alt="typescript" />
            </div>
            <div className="box" id="javascript-box">
              <p>Javascript</p>
              <img src="./src/assets/js.png" alt="javascript" />
            </div>
            <div className="box" id="css-box">
              <p>CSS</p>
              <img src="./src/assets/css.svg" alt="css" />
            </div>
            <div className="box" id="html-box">
              <p>HTML</p>
              <img src="./src/assets/html.svg" alt="html" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-projects" id="projects">
        <div className="projects">
          <h3>Projetos</h3>
          <div className="project-boxes">
            <div className="project-box"></div>
            <div className="project-box"></div>
            <div className="project-box"></div>
            <div className="project-box"></div>
          </div>
        </div>
      </section>

      <section className="section-contact" id="contact">
        <div className="contact">
          <h2>Contatos</h2>

          <div className="contact-icons">
            <div className="icon">
              <a href="mailto:leofwingert@gmail.com">
                <div className="box2">
                  <img src="./src/assets/mail.svg" />
                </div>
              </a>
              <a href="mailto:leofwingert@gmail.com">Email</a>
              <p>leofwingert@gmail.com</p>
            </div>

            <div className="icon">
              <a href="https://wa.me/5551995140827" target="_blank">
                <div className="box2">
                  <img src="./src/assets/phone.svg" />
                </div>
              </a>
              <a href="https://wa.me/5551995140827" target="_blank">
                Telefone
              </a>
              <p>(51) 995140827</p>
            </div>

            <div className="icon">
              <a href="https://github.com/leofwingert" target="_blank">
                <div className="box2">
                  <img src="./src/assets/github.svg" />
                </div>
              </a>
              <a href="https://github.com/leofwingert" target="_blank">
                Github
              </a>
              <p>@leofwingert</p>
            </div>

            <div className="icon">
              <a
                href="https://www.linkedin.com/in/leonardowingert/"
                target="_blank"
              >
                <div className="box2">
                  <img src="./src/assets/linkedin.svg" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/leonardowingert/"
                target="_blank"
              >
                Linkedin
              </a>
              <p>@leonardowingert</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;