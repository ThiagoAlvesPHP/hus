import { FaRulerCombined } from "react-icons/fa";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMG
import releases from "../../../assets/images/releases.png";

export function HomeReleases() {
  const [json, setJson] = useState([]);

  useEffect(() => {
    getJson()
  }, []);


  function getJson() {
    let json = [];

    for (let i = 0; i < 4; i++) {
      json.push({ "name": "Nome do empreendimento", "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id molestie dolor. Phasellus eget bibendum. Etiam pretium feugiat elit, vitae vehicula metus accumsan sit amet. ", "list": [{ "item": "Lorem ipsum dolor" }, { "item": "Lorem ipsum dolor" }, { "item": "Lorem ipsum dolor" }, { "item": "Lorem ipsum dolor" }], "image": releases, "location": "Gaspar - SC", "quantity": "2 Dormitórios", "square_size": "60m²" })
    }
    setJson(json);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "carousel",
  };

  return (
    <section className="releases">
      <div className="container">
        <h2 className="title">Próximos lançamentos</h2>
        <p className="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <Slider {...settings}>
          {json.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="item" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="content">
                  <p className="location">{item.location}</p>

                  <div className="block">
                    <p className="title"><span>Lorem</span> Ipsum</p>
                    <p><FaRulerCombined /> {item.square_size}</p>
                  </div>
                </div>
              </div>
              <div className="content">
                <p className="title">{item.name}</p>
                <p className="description">{item.description}</p>
                <ul>
                  {item.list.map((item, index) => (
                    <li key={index}>{item.item}</li>
                  ))}
                </ul>
                <Link className="link" to="">Saiba mais</Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
