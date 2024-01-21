// IMG
import image01 from "../../../assets/images/about/image_01.png";
import image02 from "../../../assets/images/about/image_02.png";
import image03 from "../../../assets/images/about/image_03.png";

export function AboutTop() {
  return (
    <section className="about-top">
      <div className="container">
        <div className="column">
          <div className="item">
            <p className="sub-title">What is Lorem Ipsum</p>
            <h1 className="title">Sobre a HUS</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur. Praesent dolor quam non quam massa velit sit libero condimentum. Consectetur enim ac suscipit nunc gravida nisl quam. Ut amet vitae tortor vel id molestie. Est pharetra morbi mi eget. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            <div className="division"></div>
          </div>
          <div className="item">
            <img src={image01} className="about-img" alt="Image" />
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src={image02} className="about-img" alt="Image" />
          </div>
          <div className="item">
            <img src={image03} className="about-img" alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
