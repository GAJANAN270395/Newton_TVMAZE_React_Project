import "./style.css";
// import notfound from '../notfound.png';
const Actor = (props) => {
    const { imageUrl, name } = props;


    return (
        <div className="card-wrapper">
            <img className="card-image" src={imageUrl} alt="Card cover" />
            <div className="bottom-container">
                <h6>{name}</h6>

                {/* <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <div>{rating}</div> */}

            </div>
        </div>
    );
};

export default Actor;