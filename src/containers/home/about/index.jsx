import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// IMG
import homeabout from "../../../assets/images/home-about.png";
import lines from "../../../assets/images/home-about-lines.png";
import aboutsocial from "../../../assets/images/about-social.png";

export function HomeAbout() {

  return (
    <section className="about">
      <div className="container">
        <div className="about-text-banner">
          <div className="img">
            <img src={homeabout} className="about-img" alt="Image" />
            <img src={lines} className="lines-img" alt="Image" />
          </div>
          <div className="content">
            <p className="title">Sobre nós</p>
            <p className="sub-title">.Design .Conforto .Viver Bem</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra vestibulum ipsum, id sagittis metus accumsan vitae. Nulla placerat elementum lectus eget tempus. Suspendisse consectetur, purus non consectetur hendrerit, mi ante tempor neque, nec varius sapien orci a ipsum. Proin scelerisque aliquet aliquam.</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra vestibulum ipsum, id sagittis metus accumsan vitae. Nulla placerat elementum lectus eget tempus. Suspendisse consectetur, purus non consectetur hendrerit, mi ante tempor neque, nec varius sapien orci a ipsum. Proin scelerisque aliquet aliquam.</p>

            <div className="division"></div>

            <Link className="link">
              Saiba mais
            </Link>
          </div>
        </div>

        <div className="about-social">
          <div className="cards">
            <div className="card">
              <img src={aboutsocial} className="about-social" alt="Image" />
            </div>
            <div className="card">
              <img src={aboutsocial} className="about-social" alt="Image" />
            </div>
            <div className="card">
              <img src={aboutsocial} className="about-social" alt="Image" />
            </div>
            <div className="card">
              <img src={aboutsocial} className="about-social" alt="Image" />
            </div>
          </div>

          <Link to="" className="link"><FaInstagram /> Instagram</Link>
        </div>

        <div className="about-follow-us">
          <h2 className="title">Siga-nos</h2>
          <p className="sub-title">Fique por dentro de tudo em nossas redes sociais</p>

          <div className="content">
            <Link to="" className="social-follow">
              <FaFacebook className="icon" />
              Facebook
            </Link>
            <Link to="" className="social-follow">
              <FaInstagram className="icon" />
              Instagram
            </Link>
            <Link to="" className="social-follow">
              <FaTwitter className="icon" />
              Twitter
            </Link>
            <Link to="" className="social-follow">
              <FaLinkedinIn className="icon" />
              Linkedin
            </Link>
          </div>
        </div>

        <div className="newsletter">
          <h2 className="title">Newsletter</h2>
          <p className="sub-title">Inscreva-se e receba todas as novidades</p>

          <div className="form">
            <input type="text" placeholder="Nome completo" className="input" required />
            <input type="text" placeholder="E-mail" className="input" required />
            <label htmlFor="select" className="input-radio">
              <input type="radio" id="select" className="input" required />
              Aceito receber conteúdos por e-mail
            </label>
            <button className="action">Cadastrar-se</button>
          </div>
          <Link to="" className="link">Política de Privacidade</Link>
        </div>
      </div>
    </section>
  );
}
