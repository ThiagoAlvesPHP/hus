import { FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getScrollTop } from "../../../../core/data/app-reducer/selectors";

//SERVICEs
import { getMenu, getAllAcfFind } from "../../../../core/services/Api";
import { Loading } from "../../../../components/Loading";

export function LayoutHeader() {
  const scrollTop = useSelector(getScrollTop);
  const linkRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState([]);
  const [menuActive, setMenuActive] = useState(0);
  const [social, setSocial] = useState([]);
  const [removeLoader, setRemoveLoader] = useState(true);

  useEffect(() => {
    request();
  }, []);

  useEffect(() => {
    linkRef.current.style.fontSize = (scrollTop >= 80) ? '120px' : '80px';
  }, [scrollTop])

  const request = async () => {
    let listMenu = await getMenu();
    if (listMenu.data && listMenu.data.items) {
      setMenu(listMenu.data.items);
    }

    let listLinks = await getAllAcfFind(92);
    if (listLinks.data && listLinks.data.acf.links.extras) {
      setSocial(listLinks.data.acf.links.extras);
      setRemoveLoader(false);
    }
  }

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuActive = (index) => {
    setMenuActive(index);
    handleToggleMenu();
  }

  return (
    <header>
      <div className="content">
        <Link to="/" ref={linkRef} className="logo" onClick={() => setMenuActive(0)}>
          HUS
        </Link>

        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <FaRegWindowClose className="close-navbar" onClick={handleToggleMenu} />
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <Link className={menuActive === index ? "active" : ""} onClick={() => handleMenuActive(index)} to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="social">
          {social.map((item, index) => (
            <li key={index}>
              <Link to={item.link}>
                <img className="social-img" src={item.icone} alt={item.titulo} />
              </Link>
            </li>
          ))}
          <li>
            <GiHamburgerMenu className="hamburguer" onClick={handleToggleMenu} />
          </li>
        </ul>
      </div>

      <Loading removeLoader={removeLoader} />
    </header>
  );
}