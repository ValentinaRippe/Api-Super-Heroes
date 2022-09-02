import "./Card.css";

export function Card({ item }) {
  return (
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
  );
}
