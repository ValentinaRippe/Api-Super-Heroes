import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "../dropdown/Dropdown";
import { resetState } from "../../features/listHeroes/listHeroesSlice";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";
import "./Menu.css";

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
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
    "EyeColor",
    "HairColor",
  ];
  return (
    <>
      <div className={openMenu ? "Menu MenuActive" : "Menu"}>
        <div className="imgLogo">
          <img
            src="https://www.funbox.co.uk/wp-content/themes/funbox/library/images/Logo/superheroes_logo.png"
            alt=""
          />
        </div>
        <div className="filters">
          <div className="filter" key={"powerstats"}>
            <Dropdown
              name={"Sort by powerstats"}
              category={"powerstats"}
              list={arrPowerstats}
            />
          </div>
          <div className="filter" key={"appearance"}>
            <Dropdown
              name={"Filter by appearance"}
              category={"appearance"}
              list={arrAppearance}
            />
          </div>
          <div onClick={() => dispatch(resetState(dispatch))} className="filter">
              <span className="all">All SuperHeroes</span>
          </div>
        </div>
        <div className="imgHero">
          <img
            src="https://cutewallpaper.org/24/hero-png/download-hero-free-png-photo-images-and-clipart-freepngimg.png"
            alt=""
          />
        </div>
      </div>
      <div onClick={() => setOpenMenu(!openMenu)} className="close">
        {!openMenu ? <AiOutlineDoubleLeft /> : <MdOutlineMenuOpen />}
      </div>
    </>
  );
}
