import { useState, useEffect } from "react";
// SERVICEs
import { getAllAcf, getAllAcfFind } from "../../../core/services/Api";

// IMG
import lines from "../../../assets/images/home-about-lines.png";
import vector from "../../../assets/images/about/vector.png";
import star from "../../../assets/images/about/star.png";

export function AboutBody() {
  const [data, setData] = useState([]);
  const [contador, setContador] = useState([]);

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let result = await getAllAcfFind(200);
    if (result && result.data.acf) {
      console.log(result.data.acf.contador);
      setData(result.data.acf.ceo);
      setContador(result.data.acf.contador);
    }
  }

  return (
    <section className="about-body">
      <div className="section-primary">
        <div className="container">
          <div className="collum">
            <img src={data && data.imagem && data.imagem} alt="CEO" className="photo" />
            <img src={lines} alt="" className="lines" />
          </div>
          <div className="collum">
            <img src={vector} alt="" className="vector" />

            <div className="content">
              <p className="text">{data && data.texto && data.texto}</p>
              <div className="starts">
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
                <img src={star} alt="start" />
              </div>
              <p className="name">{data && data.nome && data.nome}</p>
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
            <h2 className="title">{contador && contador.titulo && contador.titulo}</h2>
            <p className="text">{contador && contador.sub_titulo && contador.sub_titulo}</p>
          </div>
          <div className="collum">
            <div className="items">
              {contador && contador.valores &&
                contador.valores.map((el, index) => (
                  <div key={index} className="item">
                    <span className="title">{el.titulo}</span>
                    <div className="params">
                      <div className="division"></div>
                      <span>{el.texto}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
