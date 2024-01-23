import { useState, useEffect } from "react";

// SERVICEs
import { getAllWP, getAllWPFind } from "../../../core/services/Api";

export function PolicyAndPrivacyBody() {
  const [data, setData] = useState([]);

  useEffect(() => {
    get();
  }, []);

  async function get() {
    let result = await getAllWPFind(128);
    if (result && result.data) {
      console.log(result.data);
      setData(result.data);
    }
  }

  return (
    <section className="policy-and-privacy">
      <div className="container">
        <h1 className="title">{data && data.title && data.title.rendered}</h1>
        <div className="content">
          <div className="text" dangerouslySetInnerHTML={{ __html: data && data.content && data.content.rendered }} />
        </div>
      </div>
    </section>
  );
}
