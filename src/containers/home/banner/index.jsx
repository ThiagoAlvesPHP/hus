import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import banner from "../../../assets/images/banner.png";

export function HomeBanner(props) {
  // Verifica se props.data existe antes de acessar suas propriedades
  const backgroundImage = props.data ? props.data.imagem ?? banner : banner;
  const texto = props.data ? props.data.texto : "";
  const link = props.data ? props.data.link : "";

  return (
    <section className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1 className="title">Lorem <span>Ipsum</span> is simply</h1>
        <p className="sub-title">{texto}</p>
        <Link className="link" to={link}>
          clique aqui <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
