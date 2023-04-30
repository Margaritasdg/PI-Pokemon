import React from "react";
import  "../Card/Card.css";


const Type = ({ type }) => {
  const typeName = typeof type === 'string' ? type : type.name;
  return <span>{capitalizeFirstLetter(typeName)}</span>;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Card = ({ name, types, image }) => {
  const typeList = types.map((type, index) => (
    <React.Fragment key={index}>
      {index > 0 && <span> - </span>}
      <Type type={type} />
    </React.Fragment>
  ));

  return (
    <div className="stylesCard">
      <h3 className="name">{capitalizeFirstLetter(name)}</h3>
      <img src={image} alt="imagen" className="img" width="120px" height="120px" />
      <ul className="typeStyle">
        <li className="type">{typeList}</li>
      </ul>
    </div>
  );
};

  export default Card;

//<h5 className="type">{type.join("-")}</h5>