import "./Home.css";

import { Menu } from "../../components/menu/Menu";
import { SuperheroDetail } from "../../components/superheroDetail/SuperheroDetail";
import { Search } from "../../components/search/Search";
import Pages from "../../components/pages/Pages";

export function Home() {
  return (
    <div className="Home">
      <Menu />

      <div className="ListHeroes">
        <Search />
        <Pages/>
      </div>

      <SuperheroDetail show={false} />
    </div>
  );
}
