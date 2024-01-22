import { useState, useEffect } from "react";

// SERVICEs
import { getAllWP } from "../../../core/services/Api";

export function PolicyAndPrivacyBody() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get();
  }, []);

  async function get(){
    let result = await getAllWP();
    setData(result.data[1]);
  }
  
  return (
    <section className="policy-and-privacy">
      <div className="container">
        <h1 className="title">{data && data.title.rendered && data.title.rendered}</h1>
        <div className="content">
          <div className="text" dangerouslySetInnerHTML={{ __html: data && data.content.rendered && data.content.rendered }} />
        </div>
      </div>
    </section>
  );
}
