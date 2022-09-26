import quemSomosNos from "../../images/quemSomosNos/diploma-eletricistaDeRedes.png"
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-both">
        <div className="quem-somos-nos">
        <h2 id="quemSomosNos">
          QUEM SOMOS NÓS
        </h2>
          <text id="quem-somos-nos-text">
            O Colégio Técnico Henrique Hennry fundado à 21 anos é a primeira
            entidade privada de ensino profissionalizante no estado a
            disponibilizar Cursos Técnicos e diversos Cursos de Qualificação
            Profissional. O Colégio Técnico, disponibiliza os Cursos Técnicos de
            Petróleo e Gás, Técnico em Mecânica, Técnico em Eletrônica, Técnico
            em Eletrotécnica, Técnico em Administração, Técnico em
            Contabilidade, Técnico em Edificações, Técnico em Segurança do
            Trabalho e diversos Cursos de Qualificação e Requalificação
            Profissional.
            <br />
            <br />
            Tem como diferencial o seu corpo docente, que além de terem formação
            acadêmica, possuem vários anos de experiência no mercado de
            trabalho, treinados e aperfeiçoados nos centros de treinamentos de
            diversas empresas. O Colégio Técnico Henrique Hennry, durante esses
            anos de atuação já inseriu no mercado centenas de profissionais
            qualificados, em diversas empresas que desenvolvem atividades dentro
            e fora do pais.
            <br />
            <img className="quem-somos-nos-img" alt="Logomarca do site" src={quemSomosNos} />
            <br />
            Endereço:
            <br />
            <a
              className="find-us-link"
              href="https://t.ly/UZPn"
              target="_blank"
              rel="noreferrer"
            >
              R. Lagarto, 1021 - Centro, Aracaju - SE, 49010-390
            </a>
          </text>

        <div>
          <hr/>

          <h2 className="footer-title" id="contato">
            FALE CONOSCO
          </h2>

          <span>
            📞 (79) 3222-9567
            <br />
            📲 (79) 98868-4517 / 98851-2153
          </span>
          {/* <img/> */}
          <h2 className="footer-title" id="contato">
            -
          </h2>
        </div>

        </div>
      </div>
    </footer>
  );
}
