import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocalStorage } from "@uidotdev/usehooks";

// SERVICEs
import { getAllAcfFind } from "../../../core/services/Api";

const limitItems = 9;
const limitDots = 3;

export function EnterprisesBody() {
  const [json, setJson] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [project, saveProject] = useLocalStorage("project");

  const countPages = Math.ceil(json.length / limitItems);

  useEffect(() => {
    getJson()
  }, []);

  useEffect(() => {
    getItemsForPage();
  }, [json, currentPage])

  async function getJson() {
    let json = [];
    // let data = await getAllAcf();
    let result = await getAllAcfFind(56);
    if (result && result.data) {
      let params = result.data.acf.projetos;
      setData(result.data.acf.topo);
      params.forEach(el => {
        json.push(el)
      });
    }

    setJson(json);
  }

  function getItemsForPage() {
    if (json.length > 0) {
      setItems(json.filter((itemJson, index) => {
        if (index >= ((currentPage - 1) * limitItems) && index < (limitItems * currentPage)) {
          return itemJson;
        }
      }))
    }
  }

  function prev() {
    if (json.length > 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function prox() {
    if (json.length > 0 && currentPage < countPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function page(real_page) {
    if (json.length > 0 && real_page <= countPages) {
      setCurrentPage(real_page);
    }
  }

  return (
    <section className="enterprises-body">
      <div className="container">
        <p className="sub-title">{data && data.sub_titulo && data.sub_titulo}</p>
        <h1 className="title">{data && data.titulo && data.titulo}</h1>

        <div className="content">
          {items.map((item, index) => (
            <div key={index} className="items">
              <Link className="item" to="/projeto" onClick={() => saveProject(item)} style={{ backgroundImage: `url(${item.imagem})` }}>
                <div className="body">
                  <p className="location"><FaLocationDot /> {item.cidade_uf}</p>

                  {item.items.map((el, index) => (
                    index < 2 &&
                    <p key={index}><img src={el.icone} alt="Icone" /> {el.item}</p>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="actions">
          <div className="arrow" onClick={prev}>
            <FaArrowLeft />
          </div>

          {countPages > 0 &&
            Array(limitDots).fill(0).map((_, index) => {
              const real_current_page = (currentPage + index) - 1;

              if (real_current_page > 0 && real_current_page <= countPages) {
                return (
                  <div
                    className={real_current_page === currentPage ? "active-dot" : ""}
                    onClick={() => page(real_current_page)}
                    key={index}
                  >
                    {real_current_page}
                  </div>
                );
              } else {
                return false;
              }
            })
          }

          <div className="arrow" onClick={prox}>
            <FaArrowRight />
          </div>
        </div>

      </div>
    </section>
  );
}
