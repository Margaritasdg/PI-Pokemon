import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPoke } from "../actions/index";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")


  
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name.length){
      alert('Ingresa un Nombre ');
    } else {
      dispatch(searchPoke(name));//name es lo que escribe el usuario
      setName('');
  }
};

  return (
    <div>
      <input className="search"
        type="text"
        value = {name}
        placeholder="Buscar pokemon..."
        onChange= {(e) => handleInputChange(e)}
        
      />
      <button className ="boton" type="submit" onClick= {(e) => handleSubmit(e)}>Buscar </button>
    </div>
  );
}