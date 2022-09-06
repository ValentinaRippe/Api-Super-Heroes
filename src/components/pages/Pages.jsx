import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SuperheroesList } from "../../components/superheroesList/SuperheroesList";
import { curPages } from "../../features/listHeroes/listHeroesSlice";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import "./Pages.css";

export default function Pages() {
  const listHeroesState = useSelector((state) => state.listHeroes.dataFilter);
  const selectOrderState = useSelector((state) => state.listHeroes.order);
  const currentPages = useSelector((state) => state.listHeroes.currentPages)
  const dispatch = useDispatch()

  const listHeroes = listHeroesState.slice(currentPages, currentPages + 9);

  const nextPages = () => {
    if (listHeroesState.length > currentPages + 9) {
      dispatch(curPages(currentPages + 9));
    }
  };

  const prevPages = () => {
    if (currentPages > 0) {
      dispatch(curPages(currentPages - 9));
    }
  };
  return (
    <div className="Pages">
      <div className="container">
        <div>
          {currentPages > 0 ? (
          <button className="buttonPage" onClick={prevPages}>
            <AiFillLeftCircle />
          </button>
        ) : null}
        {listHeroesState.length > currentPages + 9 ? (
          <button className="buttonPage" onClick={nextPages}>
            <AiFillRightCircle />
          </button>
        ) :null}
        </div>
        {selectOrderState.sort || selectOrderState.filter ? (
          <div className="order">
            <span>Sort: <u>{selectOrderState.sort}</u></span>
            <span>Filter: <u>{selectOrderState.filter}</u></span>
          </div>
        ) : null}
      </div>
      <>
        <SuperheroesList listHeroes={listHeroes} />
      </>
    </div>
  );
}
