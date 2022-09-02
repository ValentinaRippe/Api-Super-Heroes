import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { searchHeroes } from "../../features/listHeroes/listHeroesSlice";
import './Search.css'

export function Search() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const onSearchValueChange = (event) => {
    event.preventDefault();
    dispatch(searchHeroes(searchValue));
    setSearchValue("");
  };

  return (
    <div className="Search">
      <form onSubmit={onSearchValueChange} className="formSearch">
        <input
          className="inputSearch"
          type="text"
          placeholder="Search song or artist..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          required
        />
        <button className="buttonSearch" type="submit" value="Search">Search</button>
      </form>
    </div>
  );
}
