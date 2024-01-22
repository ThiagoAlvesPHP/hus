import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function HomeAbout(props) {
  const sobre_nos_titulo = props.sobre_nos ? props.sobre_nos.titulo : "";
  const sobre_nos_sub_titulo = props.sobre_nos ? props.sobre_nos.sub_titulo : "";
  const sobre_nos_descricao = props.sobre_nos ? props.sobre_nos.descricao : "";
  const sobre_nos_imagem_principal = props.sobre_nos ? props.sobre_nos.imagem_principal : "";
  const sobre_nos_imagem_secundaria = props.sobre_nos ? props.sobre_nos.imagem_secundaria : "";
  const sobre_nos_galeria = props.sobre_nos ? props.sobre_nos.galeria : "";
  const sobre_nos_link_instagram = props.sobre_nos ? props.sobre_nos.link_instagram : "";

  const siga_nos_titulo = props.sobre_nos ? props.siga_nos.sobre_nos_titulo : "";
  const siga_nos_sub_titulo = props.sobre_nos ? props.siga_nos.sobre_nos_sub_titulo : "";

  const newsletter_titulo = props.sobre_nos ? props.siga_nos.newsletter_titulo : "";
  const newsletter_sub_titulo = props.sobre_nos ? props.siga_nos.newsletter_sub_titulo : "";

  const links_extras = props.links ? props.links.extras : "";

  return (
    <section className="about">
      <div className="container">
        <div className="about-text-banner">
          <div className="img">
            <img src={sobre_nos_imagem_principal} className="about-img" alt="Image" />
            <img src={sobre_nos_imagem_secundaria} className="lines-img" alt="Image" />
          </div>
          <div className="content">
            <p className="title">{sobre_nos_titulo}</p>
            <p className="sub-title">{sobre_nos_sub_titulo}</p>
            <p className="text" dangerouslySetInnerHTML={{ __html: sobre_nos_descricao ?? "" }}></p>
            <div className="division"></div>
            <Link className="link" to="/sobre">
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="about-social">
          <div className="cards">
            {sobre_nos_galeria && sobre_nos_galeria.length > 0 &&
              sobre_nos_galeria.map((el, index) => (
                <div key={index} className="card" style={{ backgroundImage: `url(${el})` }}></div>
              ))}
          </div>
          <Link to={sobre_nos_link_instagram} target="_blank" className="link"><FaInstagram /> Instagram</Link>
        </div>

        <div className="about-follow-us">
          <h2 className="title">{siga_nos_titulo}</h2>
          <p className="sub-title">{siga_nos_sub_titulo}</p>

          <div className="content">
            {links_extras && links_extras.length > 0 &&
              links_extras.map((el, index) => (
                <Link key={index} to={el.link} target="_blank" className="social-follow">
                  <img src={el.icone} alt={el.titulo} className="icone" />
                  {el.titulo}
                </Link>
              ))}
          </div>
        </div>

        <div className="newsletter">
          <h2 className="title">{newsletter_titulo}</h2>
          <p className="sub-title">{newsletter_sub_titulo}</p>

          <div className="form">
            <input type="text" placeholder="Nome completo" className="input" required />
            <input type="text" placeholder="E-mail" className="input" required />
            <label htmlFor="select" className="input-radio">
              <input type="radio" id="select" className="input" required />
              Aceito receber conteúdos por e-mail
            </label>
            <button className="action">Cadastrar-se</button>
          </div>
          <Link to="/politicade-de-privacidade" className="link">Política de Privacidade</Link>
        </div>
      </div>
    </section>
  );
}
