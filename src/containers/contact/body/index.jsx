import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md"

// SERVICEs
import { getAllAcf, getAllAcfFind } from "../../../core/services/Api";

// IMGs
import background from "../../../assets/images/contact/background.png";

export function ContactBody() {
  const [settings, setSettings] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getReq();
  }, []);

  async function getReq() {
    let result = await getAllAcf();
    let setting = await getAllAcfFind(132);
    let links = await getAllAcfFind(92);

    if (setting && setting.data.acf) {
      setSettings(setting.data.acf);
    }
    if (links && links.data.acf) {
      setLinks(links.data.acf.links.extras);
    }
  }

  return (
    <section className="contact-body">
      <div className="container">
        <p className="sub-title">What is Lorem Ipsum</p>
        <h1 className="title">Contato</h1>
      </div>
      <div className="body" style={{ backgroundImage: `url(${background})` }}>
        <div className="content">
          <div className="collum">
            <form action="" className="form">
              <input type="text" placeholder="Nome completo" className="input" required />
              <input type="text" placeholder="E-mail" className="input" required />
              <input type="text" placeholder="E-mail" className="input" required />
              <textarea name="" id="" className="message" placeholder="Sua mensagem" cols="30" rows="10"></textarea>
              <button className="action">Enviar <IoIosArrowForward /></button>
            </form>
          </div>
          <div className="collum">
            <h3 className="title">{settings.configuracoes?.titulo ?? ""}</h3>
            <p className="sub-title" dangerouslySetInnerHTML={{ __html: settings.configuracoes?.texto ?? "" }}></p>

            <ul className="list-contact">
              <li><IoLocationOutline /> <span dangerouslySetInnerHTML={{ __html: settings.contato?.endereco ?? "" }}></span></li>
              <li><LuPhone /> {settings.contato?.contato ?? ""}</li>
              <li><MdOutlineEmail /> {settings.contato?.e_mail ?? ""}</li>
            </ul>

            <div className="links">
              {links &&
                links.map((el, index) => (
                  <Link key={index} to={el.link} target="_blank"><img src={el.icone_colorido} alt={el.titulo} /></Link>
                ))
              }
            </div>

            <div className="map" dangerouslySetInnerHTML={{ __html: settings.contato?.localizacao_map.iframe ?? "" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
