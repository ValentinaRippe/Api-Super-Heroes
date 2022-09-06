import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  orderData,
  selectFilter,
  selectSort,
} from "../../features/listHeroes/listHeroesSlice";
import AppearanceLi from "./AppearanceLi";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import "./Dropdown.css";

export function Dropdown(props) {
  const [show, setShow] = useState(false);
  const [listAppearance, setListAppearance] = useState("");
  const [showLi, setShowLi] = useState(false);
  const listHeroesState = useSelector((state) => state.listHeroes.dataFilter);
  const AllHeroesState = useSelector((state) => state.listHeroes.data);
  const listAppearanceState = useSelector(
    (state) => state.listHeroes.appearance
  );
  const dispatch = useDispatch();

  const orderList = (item, appearance) => {
    if (props.category === "powerstats") {
      let arr = [...listHeroesState];
      let listSort = arr.sort(
        (a, b) => a.powerstats[item] - b.powerstats[item]
      );
      dispatch(selectSort(item));
      dispatch(orderData(listSort));
    } else {
      let arr = [...AllHeroesState];
      let listFilter = arr.filter((obj) =>
        Object.values(obj.appearance).some((i) => i?.includes(item))
      );
      dispatch(selectFilter(`${appearance} - ${item}`));
      dispatch(orderData(listFilter));
    }
  };

  return (
    <div key={props.name} className="containter_drop">
      <button
        onClick={() => setShow(!show)}
        className="dropdown"
        htmlFor="dropdown"
      >
        {props.name} {!show ? <BsCaretDown /> : <BsCaretUp />}
      </button>

      {show ? (
        <ul className="section-dropdown">
          {props.list.map((item, i) => (
            <div key={i.toString()}>
              <li
                onClick={() =>
                  props.category === "powerstats"
                    ? orderList(item.toLowerCase())
                    : (setShowLi(!showLi),
                      setListAppearance(Object.keys(listAppearanceState[i])))
                }
                className="listFilter"
              >
                {item}
              </li>
              <ul className="listCategory">
                {props.category === "appearance"
                  ? Object.values(listAppearanceState[i]).map(
                      (appearanceItem, index) => (
                        <div key={index.toString()}>
                          <AppearanceLi
                            appearanceItem={appearanceItem}
                            show={showLi}
                            orderList={orderList}
                            listAppearance={listAppearance}
                            appearance={item}
                          />
                        </div>
                      )
                    )
                  : ""}
              </ul>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
