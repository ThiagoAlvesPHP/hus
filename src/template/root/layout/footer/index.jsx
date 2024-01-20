import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export function LayoutFooter() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="column-primary">
            <h2 className="title">HUS</h2>
            <p className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra vestibulum ipsum, id sagittis metus accumsan vitae. Nulla placerat elementum lectus eget tempus.</p>
            <div className="social-links">
              <Link to="" className="social-follow">
                <FaFacebookF className="icon" />
              </Link>
              <Link to="" className="social-follow">
                <FaInstagram className="icon" />
              </Link>
              <Link to="" className="social-follow">
                <FaTwitter className="icon" />
              </Link>
              <Link to="" className="social-follow">
                <FaLinkedinIn className="icon" />
              </Link>
            </div>
          </div>
          <div className="column-secondy">
            <h2 className="title">Menu</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="sobre">Sobre nós</Link>
              </li>
              <li>
                <Link to="projetos">Projetos</Link>
              </li>
              <li>
                <Link to="contato">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="column-third">
            <h2 className="title">Contato</h2>
            <ul>
              <li>
                <CiLocationOn /> Definir Endereço
              </li>
              <li>
                <MdOutlineEmail /> hus.contato@gmail.com
              </li>
              <li>
                <FiPhone /> (47) 99181-4868
              </li>
            </ul>
          </div>
        </div>
        <p className="copytight">
          <span>Copyright © 2023 - hus</span>
          <Link to="https://h2k.com.br/" target="_blank">H2K</Link>
        </p>
      </div>
    </footer>
  );
}
