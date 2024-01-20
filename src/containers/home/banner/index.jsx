import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// IMG
import banner from "../../../assets/images/banner.png";

export function HomeBanner() {
  return (
    <section className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <h1 className="title">Lorem <span>Ipsum</span> is simply</h1>
        <p className="sub-title">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        </p>
        <Link className="link" to="#click">
          clique aqui <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
