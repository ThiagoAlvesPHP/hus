// IMG
import image from "../../../assets/images/about/image_04.png";
import lines from "../../../assets/images/home-about-lines.png";
import vector from "../../../assets/images/about/vector.png";
import star from "../../../assets/images/about/star.png";

export function AboutBody() {
  return (
    <section className="about-body">
      <div className="section-primary">
        <div className="container">
          <div className="collum">
            <img src={image} alt="" className="photo" />
            <img src={lines} alt="" className="lines" />
          </div>
          <div className="collum">
            <img src={vector} alt="" className="vector" />

            <div className="content">
              <p className="text">Eu acredito que o design e o conforto de uma casa tem relação direta com o bem estar das pessoas que moram ali. Esse é o objetivo que a HUS se propõe a entregar em seus empreendimentos.</p>
              <div className="starts">
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
              </div>
              <p className="name">Marcelo Maffezzolli</p>
              <p className="ceo">
                <div className="line"></div>
                <span>CEO DA HUS</span>
              </p>
            </div>
          </div>
        </div>
        <h2 className="title">HUS</h2>
      </div>

      <div className="section-secondy">
        <div className="container">
          <div className="collum">
            <h2 className="title">Lorem Ipsum</h2>
            <p className="text">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          </div>
          <div className="collum">
            <div className="items">
              <div className="item">
                <span className="title">40k</span>
                <div className="params">
                  <div className="division"></div>
                  <span>Lorem Ipsum</span>
                </div>
              </div>
              <div className="item">
                <span className="title">50k</span>
                <div className="params">
                  <div className="division"></div>
                  <span>Lorem Ipsum</span>
                </div>
              </div>
              <div className="item">
                <span className="title">250</span>
                <div className="params">
                  <div className="division"></div>
                  <span>Lorem Ipsum</span>
                </div>
              </div>
              <div className="item">
                <span className="title">200</span>
                <div className="params">
                  <div className="division"></div>
                  <span>Lorem Ipsum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
