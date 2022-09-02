import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderData } from "../../features/listHeroes/listHeroesSlice";
import "./Dropdown.css";

export function Dropdown(props) {
  const [show, setShow] = useState(false);
  const [showLi, setShowLi] = useState(false);
  const listHeroesState = useSelector((state) => state.listHeroes.dataFilter);
  const AllHeroesState = useSelector((state) => state.listHeroes.data);
  const listAppareanceState = useSelector(
    (state) => state.listHeroes.appearance
  );
  const dispatch = useDispatch();

  const orderList = (item) => {
    if (props.category === "powerstats") {
      let arr = [...listHeroesState];
      let listSort = arr.sort(
        (a, b) => a.powerstats[item] - b.powerstats[item]
      );
      dispatch(orderData(listSort));
    } else {
      let arr = [...AllHeroesState];
      let listFilter = arr.filter((obj) =>
        Object.values(obj.appearance).some((i) => i.includes(item))
      );
      dispatch(orderData(listFilter));
    }
  };

  return (
    <div className="containter_drop">
      <button
        onClick={() => setShow(!show)}
        className="dropdown"
        htmlFor="dropdown"
      >
        {props.name}
      </button>

      {show ? (
        <ul className="section-dropdown">
          {props.list.map((item, i) => (
            <>
              <li
                onClick={() =>
                  props.category === "powerstats"
                    ? orderList(item.toLowerCase())
                    : setShowLi(!showLi)
                }
                key={i}
                className="listFilter"
              >
                {item}
              </li>
              <ul className="listCategory">
                {props.category === "appearance"
                  ? Object.values(listAppareanceState[i]).map((appareance) =>
                   appareance
                        .filter(
                          (v, i, a) => a.findIndex((v2) => v2 === v) === i
                        )
                        .sort()
                        .map((e) => (
                        showLi?<li onClick={() => orderList(e)}>{e}</li>:null
                        ))
                    )
                  : ""}
              </ul>
            </>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
