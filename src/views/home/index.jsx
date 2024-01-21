import { HomeBanner } from "../../containers/home/banner";
import { HomeProjects } from "../../containers/home/projects";
import { HomeReleases } from "../../containers/home/releases";
import { HomeConsultants } from "../../containers/home/consultants";
import { HomeAbout } from "../../containers/home/about";

import { useState, useEffect } from "react";

// SERVICEs
import { getAllAcfFind } from "../../core/services/Api";

export function ViewHome() {
  const [data, setData] = useState([]);
  const [data_projects, setDataProjects] = useState([]);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    let result = await getAllAcfFind(2);

    if (result && result.data.acf) {
      setData(result.data.acf);
    }
    // let res = await getAllAcf();
    let projects = await getAllAcfFind(56);
    if (projects && projects.data.acf) {
      setDataProjects(projects.data.acf);
    }
  };

  return (
    <main>
      <HomeBanner data={data.banner} />
      <HomeProjects data={data.projetos_recentes} projects={data_projects.projetos} />
      <HomeReleases />
      <HomeConsultants />
      <HomeAbout />
    </main>
  );
}
