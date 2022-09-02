import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "../dropdown/Dropdown";
import { getHeroesAsync } from "../../features/listHeroes/listHeroesSlice";
import "./Menu.css";

export function Menu() {
  const [openMenu, setOpenMenu] = useState(true);
  const initialId = 1;
  const finalId = 150;
  const dispatch = useDispatch();
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
  const onRefresh =() =>{
    for(let i = initialId; i<finalId; i++ ){
      dispatch(getHeroesAsync(i));
    }
  }

  return (
    <>
      {openMenu ? (
        <>
          <div className="Menu">
            <div className="imgLogo">
              <img
                src="https://www.funbox.co.uk/wp-content/themes/funbox/library/images/Logo/superheroes_logo.png"
                alt=""
              />
            </div>
            <div className="filters">
              <div className="filter">
                <Dropdown
                  name={"Sort by powerstats"}
                  category={"powerstats"}
                  list={arrPowerstats}
                />
              </div>
              <div className="filter">
                <Dropdown
                  name={"Filter by appearance"}
                  category={"appearance"}
                  list={arrAppearance}
                />
              </div>
              <div className="filter">
                <h2 onClick={()=>onRefresh()} className="init">Refresh ⟳</h2>
              </div>
            </div>
            <div className="imgHero">
              <img
                src="https://cutewallpaper.org/24/hero-png/download-hero-free-png-photo-images-and-clipart-freepngimg.png"
                alt=""
              />
            </div>
          </div>
        </>
      ) : null}
      <h2 onClick={() => setOpenMenu(!openMenu)} className="close">
        {openMenu ? "⇇" : "⇉"}
      </h2>
    </>
  );
}
