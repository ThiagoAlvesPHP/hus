import { Link } from "react-router-dom";

// IMG
import whatsapp from "../../../assets/images/Whatsapp.png";
import chat from "../../../assets/images/Chat.png";

export function HomeConsultants() {

  return (
    <section className="consultants">
      <div className="container">
        <div className="box">
          <h2 className="title">Fale com nossos consultores</h2>
          <p className="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

          <div className="actions">
            <Link className="link">
              <img src={ whatsapp } alt="Whatsapp" />
              <div className="texts">
                <small>Entre em contato</small>
                <p>Whatsapp</p>
              </div>
            </Link>
            <Link className="link">
              <img src={ chat } alt="Whatsapp" />
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
