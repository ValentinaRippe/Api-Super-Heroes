import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHeroesAsync } from "../../features/listHeroes/listHeroesSlice";
import { Card } from "../card/Card";
import { Search } from "../search/Search";
import "./SuperheroesList.css";

export function SuperheroesList() {
  const listHeroesState = useSelector((state) => state.listHeroes.dataFilter);
  const initialId = 1;
  const finalId = 150;
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
        .map((item) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}
