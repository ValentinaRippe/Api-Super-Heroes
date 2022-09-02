import { useState } from "react";
import "./Dropdown.css";

export function Dropdown(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="containter_drop">
      <button
        onClick={() => setShow(!show)}
        className="dropdown"
        htmlFor="dropdown"
      >
        {props.name}
      </button>
      {show
        ? props.list.map((item) => (
            <ul className="section-dropdown">
              <li className="listFilter">{item}</li>
            </ul>
          ))
        : null}
    </div>
  );
}
