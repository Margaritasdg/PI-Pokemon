import React from "react";
import Card from "../Card/card";
import "../CardsContainer/CardsContainer.css";



const CardsContainer = ({name,types,image})=>{  
  return (
      <div className= "contenedor" >
            <Card 
            image={image}
            name={name}
            types={types}
            />
          
        
    </div>
  
  )
}

export default CardsContainer;

//   {curren.map((e)=>{