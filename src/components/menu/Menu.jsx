import { Dropdown } from "../dropdown/Dropdown";
import "./Menu.css";

export function Menu() {
  const arrPowerstats = [
    "Intelligence",
    "Strength",
    "Speed",
    "Durability",
    "Power",
    "Combat",
  ];
  const arrAppearance = [
    "Gender",
    "Race",
    "Height",
    "Weight",
    "Eye Color",
    "Hair Color",
  ];
  /* const arrSort = ["A-Z", "Z-A", "Ascendant", "Descendant"]; */

  return (
    <div className="Menu">
      <div className="imgLogo">
        <img
          src="https://www.funbox.co.uk/wp-content/themes/funbox/library/images/Logo/superheroes_logo.png"
          alt=""
        />
      </div>
      <div className="filters">
        <div className="filter">
          <Dropdown name={"Filter by powerstats"} list={arrPowerstats} />
        </div>
        <div className="filter">
          <Dropdown name={"Filter by appearance"} list={arrAppearance} />
        </div>
        {/* <div className="filter">
          <Dropdown name={"sort by"} list={arrSort} />
        </div> */}
      </div>
      <div className="imgHero">
        <img
          src="https://cutewallpaper.org/24/hero-png/download-hero-free-png-photo-images-and-clipart-freepngimg.png"
          alt=""
        />
      </div>
    </div>
  );
}
