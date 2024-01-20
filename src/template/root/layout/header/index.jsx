import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState } from "react";

export function LayoutHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="content">
        <Link to="/" className="logo">
          HUS
        </Link>

        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <FaRegWindowClose className="close-navbar" onClick={handleToggleMenu} />
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/empreendimentos">
                Empreendimentos
              </Link>
            </li>
            <li>
              <Link to="/contato">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <ul className="social">
          <li>
            <Link to="">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <GiHamburgerMenu className="hamburguer" onClick={handleToggleMenu} />
          </li>
        </ul>
      </div>
    </header>
  );
}