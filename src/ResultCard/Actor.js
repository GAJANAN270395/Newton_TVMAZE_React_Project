import "./style.css";
// import notfound from '../notfound.png';
const Actor = (props) => {
  const { imageUrl, name, country } = props;


  return (
    <div className="card-wrapper">
      <img className="card-image" src={imageUrl} alt="Card cover" />
      <div className="bottom-container">
        <h6>Name: {name}</h6>
        <h6>Country: {country}</h6>
      </div>
    </div>
  );
};

export default Actor;