import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// SERVICEs
import { getAllAcf, getAllAcfFind, sendContact } from "../../../core/services/Api";

// IMGs
import background from "../../../assets/images/contact/background.png";

export function ContactBody() {
  const [settings, setSettings] = useState([]);
  const [links, setLinks] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit (e) {
    e.preventDefault();
    const requiredFields = ['name', 'email', 'phone', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error("Campos obrigatórios não preenchidos:" + missingFields, { closeOnClick: true });
    }

    let res = await sendContact(formData);

    console.log('Dados do formulário:', formData, res);
  };


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
            <form onSubmit={handleSubmit} className="form">
              <input
                type="text"
                placeholder="Nome completo"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="E-mail"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Telefone"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                id=""
                className="message"
                placeholder="Sua mensagem"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="action">
                Enviar <IoIosArrowForward />
              </button>
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

      <ToastContainer />
    </section>
  );
}
