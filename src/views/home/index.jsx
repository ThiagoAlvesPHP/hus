import { HomeBanner } from "../../containers/home/banner";
import { HomeProjects } from "../../containers/home/projects";
import { HomeReleases } from "../../containers/home/releases";
import { HomeConsultants } from "../../containers/home/consultants";
import { HomeAbout } from "../../containers/home/about";

import { useState, useEffect } from "react";

// SERVICEs
import { getAllAcf, getAllAcfFind } from "../../core/services/Api";

export function ViewHome() {
  const [data, setData] = useState([]);
  const [data_projects, setDataProjects] = useState([]);
  const [data_links, setDataLinks] = useState([]);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    let result = await getAllAcf();
  
    let banner = await getAllAcfFind(2);
    if (banner && banner.data.acf) {
      setData(banner.data.acf);
    }

    let projects = await getAllAcfFind(56);
    if (projects && projects.data.acf) {
      setDataProjects(projects.data.acf);
    }

    let links = await getAllAcfFind(92);
    if (links && links.data.acf) {
      setDataLinks(links.data.acf.links);
    }
  };

  return (
    <main>
      <HomeBanner data={data.banner} />
      <HomeProjects data={data.projetos_recentes} projects={data_projects.projetos} />
      <HomeReleases projects={data_projects.projetos} />
      <HomeConsultants data={data.fale_conosco} links={data_links ?? ""} />
      <HomeAbout sobre_nos={data.sobre_nos} siga_nos={data.siga_nos} links={data_links ?? ""} />
    </main>
  );
}
