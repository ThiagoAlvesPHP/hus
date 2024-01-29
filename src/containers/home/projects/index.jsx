import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HomeProjects(props) {
  const [json, setJson] = useState([]);
  const [project, saveProject] = useLocalStorage("project");
  const [secondElementIndex, setSecondElementIndex] = useState(null);

  const titulo = props.data ? props.data.titulo : "";
  const sub_titulo = props.data ? props.data.sub_titulo : "";
  const texto = props.data ? props.data.texto : "";

  useEffect(() => {
    getJson();
  }, [props.projects]);

  useEffect(() => {
    if (json.length > 0) {
      const slickActiveItems = document.querySelectorAll('.slick-slide.slick-active');
      slickActiveItems[1].querySelector(".carousel-item").classList.add('item-active');
    }
  }, [secondElementIndex, json]);

  function getJson() {
    let json = [];

    if (props.projects) {
      props.projects.forEach(el => {
        if (el.recentes) {
          json.push(el)
        }
      });
    }

    setJson(json);

    if (json.length >= 3) {
      setSecondElementIndex(1);
    }
  }

  const handleBeforeChange = () => {
    document.querySelectorAll('.item-active').forEach(element => {
      element.classList.remove('item-active');
    });

    setSecondElementIndex(Math.floor(Math.random() * 2000));
  }

  const handleAfterChange = (currentIndex) => {
    // // Remova a classe de todos os elementos antes de adicionar à próxima
    document.querySelectorAll('.item-active').forEach(element => {
      element.classList.remove('item-active');
    });

    setSecondElementIndex(Math.floor(Math.random() * 2000));
  };

  const settings = {
    dots: true,
    infinite: json.length >= 3 ? true : false,
    speed: 500,
    slidesToShow: json.length >= 3 ? 3 : 1,
    slidesToScroll: 1,
    className: "carousel",
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: json.length >= 2 ? true : false,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
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
              <Link className="item" to="/projeto" onClick={() => saveProject(item)} style={{ backgroundImage: `url(${item.imagem})` }}>
                <div className="content">
                  <p className="location"><FaLocationDot /> {item.cidade_uf}</p>

                  {item.items.map((el, index) => (
                    index < 2 &&
                    <p key={index}><img src={el.icone} alt="Icone" /> {el.item}</p>
                  ))}
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
