import { Link } from "react-router-dom";

// IMG
import chat from "../../../assets/images/Chat.png";

export function HomeConsultants(props) {
  const titulo = props.data ? props.data.titulo : "";
  const sub_titulo = props.data ? props.data.sub_titulo : "";
  const whatsapp = props.links ? props.links.whatsapp : "";
  const whatsapp_icon = props.links ? props.links.whatsapp_icone : "";

  return (
    <section className="consultants">
      <div className="container">
        <div className="box">
          <h2 className="title">{titulo}</h2>
          <p className="sub-title">{sub_titulo}</p>

          <div className="actions">
            <Link to={whatsapp} target="_blank" className="link">
              <img src={whatsapp_icon} alt="Whatsapp" />
              <div className="texts">
                <small>Entre em contato</small>
                <p>Whatsapp</p>
              </div>
            </Link>
            <Link className="link" to="/contato">
              <img src={chat} alt="Whatsapp" />
              <div className="texts">
                <small>Entre em contato</small>
                <p>Formulário</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
