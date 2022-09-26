import logo from "./images/logos/hennry/logomarca.png";

import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="">
      <header>
        <div className="logo">
          <a href="https://www.instagram.com/henrique_hennry/"  target="_blank" rel="noreferrer">
          <img className="logo-img" alt="Logomarca do site" src={logo} />
          </a>
          <ul className="ul-menu">
            <a href="/">
              <li>PÁGINA INICIAL</li>
            </a>
            <li>CURSOS DISPONÍVEIS</li>
            <a href="#quemSomosNos">
            <li>QUEM SOMOS NÓS</li>
            </a>
            <a href="#contato">
            <li>CONTATO</li>
            </a>
          </ul>
        </div>
      </header>

      <main>
        <Banner/>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
