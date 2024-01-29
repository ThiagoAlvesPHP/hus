import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMG
import background from "../../../assets/images/about/background.png";

export function HomeReleases(props) {
  const [json, setJson] = useState([]);
  const [project, saveProject] = useLocalStorage("project");

  useEffect(() => {
    getJson();
  }, [props.projects]);

  async function getJson() {
    var array = [];

    if (props.projects && props.projects.length > 0) {
      props.projects.forEach(el => {
        if (el.lancamentos) {
          array.push(el);
        }
      });

      setJson(array);
    }
  }

  const settings = {
    dots: false,
    infinite: json.length >= 2 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "carousel",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: json.length >= 2 ? true : false,
          slidesToScroll: 2,
          infinite: json.length >= 2 ? true : false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="releases" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <h2 className="title">Próximos lançamentos</h2>
        <p className="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <Slider {...settings}>
          {json && json.length && (
            json.map((item, index) => (
              <div key={index} className="carousel-item">
                <div className="item" style={{ backgroundImage: `url(${item.imagem})` }}>
                  <div className="content">
                    <p className="location">{item.cidade_uf}</p>

                    <div className="block">
                      <p className="title">{item.titulo}</p>
                      {item.items.map((el, index) => (
                        index < 1 &&
                        <p key={index}><img src={el.icone} alt="Icone" /> {el.item}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="content">
                  <p className="title">{item.titulo}</p>
                  <p className="description">{item.texto}</p>
                  <ul>
                    {item.items.map((el, index) => (
                        index > 1 &&
                        <li key={index}>{el.item}</li>
                      ))}
                  </ul>
                  <Link className="link" to="/projeto" onClick={() => saveProject(item)}>Saiba mais</Link>
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    </section>
  );
}
