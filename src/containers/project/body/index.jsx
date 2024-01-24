import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// SERVICEs
import { sendContact } from "../../../core/services/Api";

export function ProjectBody() {
  const [project] = useLocalStorage("project");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enterprises: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const requiredFields = ['name', 'email', 'phone', 'enterprises', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error("Campos obrigatórios não preenchidos", { closeOnClick: true });
      return;
    }

    let res = await sendContact(formData);
    if (res && res.data.email) {
      toast.success("E-mail enviado com sucesso!", { closeOnClick: true });
    }
  };

  const settings = {
    dots: true,
    infinite: project.galeria.length >= 3 ? true : false,
    speed: 500,
    slidesToShow: project.galeria.length >= 3 ? 3 : 1,
    slidesToScroll: 1,
    className: "carousel",
    prevArrow: <FaArrowLeft />,
    nextArrow: <FaArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: project.galeria.length >= 2 ? true : false,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="project-body">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">{project.titulo}</h1>

            {project.items.map((el, index) => (
              index > 2 &&
              <p className="item" key={index}><IoCheckmarkDoneSharp /> {el.item}</p>
            ))}

            <Link className="link" to="">Entre em contato <IoIosArrowForward /></Link>
          </div>
          <div className="col">
            <div className="block-imagem" style={{ backgroundImage: `url(${project.imagem})` }}>
              <p className="cidade-uf"><FaLocationDot />{project.cidade_uf}</p>
            </div>
          </div>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: project.descricao }} />

        <div className="gallery">
          <h3 className="title">Galeria</h3>
          {project.galeria.length > 0 &&
            <Slider
              {...settings}
            >
              {project.galeria.map((item, index) => (
                <div className="gallery-item" key={index}>
                  <div className="content" style={{ backgroundImage: `url(${item})` }}></div>
                </div>
              ))}
            </Slider>
          }
        </div>

        <div className="contact">
          <h3 className="title">Contato</h3>

          <form className="form" onSubmit={handleSubmit}>
            <div className="inputs">
              <input
                type="text"
                placeholder="Nome completo"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required />
              <input
                type="email"
                placeholder="E-mail"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required />
              <input
                type="text"
                placeholder="Telefone"
                className="input"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required />
              <input
                type="text"
                placeholder="Nome do empreendimento"
                className="input"
                name="enterprises"
                value={formData.enterprises}
                onChange={handleChange}
                required />
            </div>
            <textarea
              name="message"
              id=""
              className="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem"></textarea>
            <button className="action">Enviar <IoIosArrowForward /></button>
          </form>
        </div>

      </div>

      <ToastContainer />
    </section>
  );
}
