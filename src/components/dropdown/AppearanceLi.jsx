export default function AppearanceLi(props) {
  const { appearanceItem, appearance, listAppearance, show, orderList } = props;
  return (
    <div>
      {appearanceItem
        .filter((v, i, a) => a.findIndex((v2) => v2 === v) === i && v !== "-")
        .sort((a, b)=> a-b)
        .map((e) =>
          show &&
          appearance.toLowerCase().includes(listAppearance[0].toLowerCase()) ? (
            <li key={e} onClick={() => orderList(e, appearance)}>
              {e}
            </li>
          ) : null
        )}{" "}
    </div>
  );
}
