import { HomeBanner } from "../../containers/home/banner";
import { HomeProjects } from "../../containers/home/projects";
import { HomeReleases } from "../../containers/home/releases";
import { HomeConsultants } from "../../containers/home/consultants";
import { HomeAbout } from "../../containers/home/about";

export function ViewHome() {
  return (
    <main>
      <HomeBanner />
      <HomeProjects />
      <HomeReleases />
      <HomeConsultants />
      <HomeAbout />
    </main>
  );
}
