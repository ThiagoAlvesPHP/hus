import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export function HomeBanner(props) {
  const backgroundImage = props.data ? props.data.imagem ?? props.data.imagem : "";
  const titulo = props.data ? props.data.titulo : "";
  const texto = props.data ? props.data.texto : "";
  const link = props.data ? props.data.link : "";

  return (
    <section className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <h1 className="title">
          <div dangerouslySetInnerHTML={{ __html: titulo ?? "" }}></div>
        </h1>
        <p className="sub-title">{texto}</p>
        <Link className="link" to={link}>
          clique aqui <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
