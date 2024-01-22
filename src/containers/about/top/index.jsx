import { useState, useEffect } from "react";
// SERVICEs
import { getAllAcfFind } from "../../../core/services/Api";

export function AboutTop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get();
  }, []);

  async function get(){
    let result = await getAllAcfFind(200);
    if (result && result.data.acf) {
      setData(result.data.acf.sobre);
    }
  }

  return (
    <section className="about-top">
      <div className="container">
        <div className="column">
          <div className="item">
            <p className="sub-title">{data && data.sub_titulo && data.sub_titulo}</p>
            <h1 className="title">{data && data.titulo && data.titulo}</h1>
            <p className="text" dangerouslySetInnerHTML={{ __html: data && data.texto && data.texto }}></p>

            <div className="division"></div>
          </div>
          <div className="item">
            <img src={data && data.imagem_02 && data.imagem_02} className="about-img" alt="Image" />
          </div>
        </div>
        <div className="column">
          <div className="item">
            <img src={data && data.imagem_01 && data.imagem_01} className="about-img" alt="Image" />
          </div>
          <div className="item">
            <img src={data && data.imagem_03 && data.imagem_03} className="about-img" alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
}
