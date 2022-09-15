import logo from "./images/logomarca.png";
import banner1 from "./images/venhahenrry/hennry1.jpeg";
import banner2 from "./images/venhahenrry/hennry2.jpeg";
import banner3 from "./images/venhahenrry/hennry3.jpeg";
import banner4 from "./images/venhahenrry/hennry4.jpeg";
import banner5 from "./images/venhahenrry/hennry5.jpeg";
import banner6 from "./images/venhahenrry/hennry6.jpeg";
import banner7 from "./images/venhahenrry/hennry7.jpeg";
import banner8 from "./images/venhahenrry/hennry8.jpeg";

import "./App.css";

function App() {
  return (
    <div className="">
      <header>
        <div className="logo">
          <img className="logo-img" alt="Logomarca do site" src={logo} />
          <ul>
            <a href="/" ><li>PÁGINA INICIAL</li></a>
            <li>CURSOS DISPONÍVEIS</li>
            <li>QUEM SOMOS NÓS</li>
            <li>CONTATO</li>
          </ul>
        </div>
      </header>

      <main>
        <div className="banners">
          <img className="banners-img" src={banner1} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner2} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner3} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner4} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner5} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner6} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner7} alt="Garanta sua vaga!" />
        </div>

        <div className="banners">
          <img className="banners-img" src={banner8} alt="Garanta sua vaga!" />
        </div>
      </main>

      <footer>
		<div className="footer-both" >

			<div>
			<text className="footer-title">QUEM SOMOS NÓS</text>
      <span>
      Somos um Colégio de ensino Técnico focado em preparar profissionais para as exigências<br/> do mercado de trabalho. Modelo de ensino: presencial.
      <br></br>
      Endereço:<br></br>
      <a href="https://t.ly/UZPn">
        R. Lagarto, 1021 - Centro, Aracaju - SE, 49010-390
        </a>
      </span>
			</div>

			<div>
			<text className="footer-title">FALE CONOSCO</text>
			<span>
				📞 (79) 3222-9567<br/>
				📲 (79) 98868-4517 / 98851-2153
			</span>
			</div>

		</div>
		</footer>
    </div>
  );
}

export default App;