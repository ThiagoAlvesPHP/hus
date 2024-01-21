import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";
import { FaRulerCombined } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMG
import projects from "../../../assets/images/projects.png";

export function HomeProjects(props) {
  const [json, setJson] = useState([]);

  const titulo = props.data ? props.data.titulo : "";
  const sub_titulo = props.data ? props.data.sub_titulo : "";
  const texto = props.data ? props.data.texto : "";

  useEffect(() => {
    getJson()
  }, [props.projects]);


  function getJson() {
    let json = [];

    // if (props.projects) {
    //   props.projects.forEach(el => {
    //     json.push({ "image": el.imagem, "location": el.cidade_uf, items: el.itens })
    //   });
    // }

    for (let i = 0; i < 4; i++) {
      json.push({ "image": projects, "location": "Gaspar - SC", "quantity": "2 Dormitórios", "square_size": "60m²" })
    }

    setJson(json);
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "carousel",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <section className="projects">
      <div className="container">
        <h2 className="title">{titulo}</h2>
        <p className="sub-title">{sub_titulo}</p>

        <Slider {...settings}>
          {json.map((item, index) => (
            <div key={index} className="carousel-item">
              <Link className="item" to="project" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="content">
                  <p><FaLocationDot /> {item.location}</p>

                  <p><IoBedSharp /> {item.quantity}</p>
                  <p><FaRulerCombined /> {item.square_size}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

        <h2 className="title text-secondy">{texto}</h2>
      </div>
    </section>
  );
}
