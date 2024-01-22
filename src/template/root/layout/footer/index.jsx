import { useState, useEffect } from "react";
// SERVICEs
import { getAllAcfFind, getMenu } from "../../../../core/services/Api";

import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export function LayoutFooter() {
  const [setting, setSetting] = useState([]);
  const [links, setLinks] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let settings = await getAllAcfFind(132);
    let link = await getAllAcfFind(92);
    let menu = await getMenu();

    if (settings && settings.data.acf) {
      setSetting(settings.data.acf);
      setLinks(link.data.acf.links);
      setMenus(menu.data.items);
    }
  }

  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="column-primary">
            <h2 className="title">{setting && setting.configuracoes && setting.configuracoes.titulo}</h2>
            <p className="sub-title" dangerouslySetInnerHTML={{ __html: setting && setting.configuracoes && setting.configuracoes.texto }}></p>

            <div className="social-links">
              {links && links.extras &&
                links.extras.map((el, index) => (
                  <Link key={index} to={el.link} target="_blank" className="social-follow">
                    <img src={el.icone} alt={el.titulo} />
                  </Link>
                ))}
            </div>
          </div>
          <div className="column-secondy">
            <h2 className="title">Menu</h2>
            <ul>
              {menus &&
                menus.map((el, index) => (
                  <li>
                    <Link key={index} to={el.url}>{el.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="column-third">
            <h2 className="title">Contato</h2>
            <ul>
              <li>
                <CiLocationOn /> <span className="sub-title" dangerouslySetInnerHTML={{ __html: setting && setting.contato && setting.contato.endereco }}></span>
              </li>
              <li>
                <MdOutlineEmail /> {setting && setting.contato && setting.contato.e_mail}
              </li>
              <li>
                <FiPhone /> {setting && setting.contato && setting.contato.contato}
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
