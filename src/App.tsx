import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-nav">
            <nav>
              <a href="#about">Sobre</a>
              <a href="#technologies">Tecnologias</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contatos</a>
            </nav>
          </div>
        </div>
      </header>

      <section>
        <div className="intro">
          <h1>Olá, eu sou o Leo</h1>
          <a href="">Contato</a>
        </div>
        <div>
          <img src="./src/assets/focaaa.jpeg" alt="profile" />
        </div>
      </section>

      <section>
        <div className="about">
          <h2>Sobre mim</h2>
          <div className="about-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              officia enim possimus blanditiis natus iusto non perspiciatis
              voluptas ducimus ut quisquam cum, iste quasi eligendi doloremque
              a. Dolor, quam deserunt.
            </p>
          </div>
        </div>
      </section>

      <div className="technologies">
        <h2>Tecnologias</h2>
        <div className="cards">
          <div className="box" id="nest-box">
            <p>Nest</p>
            <img src="./src/assets/nest.svg" alt="nest" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
          <div className="box" id="typescript-box">
            <p>Typescript</p>
            <img src="./src/assets/nest.svg" alt="typescript" />
          </div>
        </div>
      </div>

      <div className="projects">
        <h3>Projetos</h3>
        <ul>
          <li>
            <a href="https://github.com/leofwingert/Calculadora">Calculadora</a>
          </li>
        </ul>
      </div>

      <div className="contact">
        <h2>Contatos</h2>
      </div>
    </>
  );
}

export default App;
