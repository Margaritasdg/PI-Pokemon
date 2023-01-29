import React from "react";
import "./Card.css";

export default function Card({ name, types, image }) {
  let type= types.map((e)=>e.name);
  return (
    <div className="stylesCard">
      <h3 className="name"> {name}</h3>
      <img  src={image} alt="imagen" className="img" width="300px" height="300px"/>
      <ul className="typeStyle">
        <li className="type"> {type.join("-")}</li>
      </ul>
    </div>
  );
}
//type.join("-")
/*{
  typeof types[0] === 'string' ? types[0].charAt(0).toUpperCase() + types[0].slice(1) : types[0]?.name.charAt(0).toUpperCase() +
  types[0].name.slice(1)}   
  { 
  typeof types[1] === 'string' ? " - " + types[1]   :  types[1]?.name
  }*/