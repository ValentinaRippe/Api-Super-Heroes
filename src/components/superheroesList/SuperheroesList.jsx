import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHeroesAsync } from "../../features/listHeroes/listHeroesSlice";
import { Card } from "../card/Card";
import Spinner from "../spinner/Spinner";
import "./SuperheroesList.css";

export function SuperheroesList({ listHeroes }) {
  const listHeroesState = useSelector((state) => state.listHeroes.dataFilter);
  const load = useSelector((state) => state.listHeroes.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroesAsync(dispatch));
  }, [dispatch]);

  return (
    <div>
      {load ? (
        listHeroesState.length >= 1 ? (
          <div className="cards">
            {listHeroesState &&
              listHeroes.map((item) => <Card key={item.id} item={item} />)}
          </div>
        ) : (
          <h1>No results</h1>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}
