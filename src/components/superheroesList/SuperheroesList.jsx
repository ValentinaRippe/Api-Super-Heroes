import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHeroesAsync } from "../../features/listHeroes/listHeroesSlice";
import { Search } from "../search/Search";
import "./SuperheroesList.css";

export function SuperheroesList() {
  const listHeroesState = useSelector((state) => state.listHeroes.dataFilter);
  const initialId = 1;
  const finalId = 20;
  const dispatch = useDispatch();

  useEffect(() => {
    for(let i = initialId; i<finalId; i++ ){
      dispatch(getHeroesAsync(i));
    }
  }, [dispatch]);

  return (
    <div className="ListHeroes">
      <>
        <Search />
      </>
      <div className="cards">
        {listHeroesState && listHeroesState
        .filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .map((item) => (
          <div className="card" key={item.id}>
            <img
              className="card_imgHero"
              src={
                item.image.url
                  ? item.image.url
                  : "https://cutewallpaper.org/24/hero-png/download-hero-free-png-photo-images-and-clipart-freepngimg.png"
              }
              alt=""
            />
            <div className="infoHero">
              <span>
                <div className="card_nameHero">
                  {" "}
                  <h3>{item.name}</h3>
                </div>
                <div>{item.biography.publisher}</div>
              </span>
              <span>
                <div className="infoHero2">
                  {item.work.occupation.slice(0, 10)}...
                  <img
                    className="iconHero"
                    src="https://i.pinimg.com/originals/7f/3e/9d/7f3e9db988ba74dd2d84d21c11dceacc.png"
                    alt=""
                  />
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
