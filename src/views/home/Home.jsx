import "./Home.css";

import { Menu } from "../../components/menu/Menu";
import { SuperheroesList } from "../../components/superheroesList/SuperheroesList";
import { SuperheroDetail } from "../../components/superheroDetail/SuperheroDetail";

export function Home() {
  return (
    <div className="Home">
      <Menu />

      <SuperheroesList />

      <SuperheroDetail show={false} />
    </div>
  );
}
