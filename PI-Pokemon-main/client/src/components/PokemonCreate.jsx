import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { getType, postPokemon } from "../actions/index.js";
import { Link } from "react-router-dom";
import "./PokemonCreate.css";

function validate(pokemon){
  let errors = {};
  if (!pokemon.name){
    errors.name = "Se requiere un Nombre"
  } return errors
}

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);

  const [errors,setErrors] = useState({});

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    life: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    dispatch(getType());
  }, [dispatch]);

  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      type: [...pokemon.type, e.target.value],
    });
  }


function onInputChange(e) {
  e.preventDefault();
  setPokemon({
    ...pokemon,
    [e.target.name]: e.target.value,
  });
  setErrors(
    validate({
      ...pokemon,
      [e.target.name]: e.target.value,
    })
  );
}


function onSubmit(e) {
  e.preventDefault();
  setErrors(
    validate({
      ...pokemon,
      [e.target]:e.target.value,
    })
  )
  if(Object.keys(errors).length=== 0){
    dispatch(postPokemon(pokemon));
    alert("Pokemon Creado 👌");
    setPokemon({//seteo todo mi input en cero
      name: "",
      types: [],
      image: "",
      life: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
  });
}else{
  alert('ERROR: Pokemon No Creado  😕');
  return;
}
  history.push("/home");//Redirige
}

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="title"> ¡Crea tu pokemon!</h3>
      
        <label for="name"> Nombre: </label>
        <input
          onChange={onInputChange}
          id="name"
          name="name"
          type="text"
          value={pokemon.name}
          required
          className="input"
        />
        {errors.name && <p className="error"> {errors.name}</p>}
      
      
        <label for="">Imagen: </label>
        <input
          onChange={onInputChange}
          name="image"
          type="text"
          value={pokemon.image}
          className="input"
        />
      
      
       
        <label for="">Vida: </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          value={pokemon.life}
          className="input"
        />
    
     
        <label for="">Fuerza: </label>
        <input
          onChange={onInputChange}
          name="attack"
          type="number"
          value={pokemon.attack}
          className="input"
        />
     
     
        <label for="">Defensa: </label>
        <input
          onChange={onInputChange}
          name="defense"
          type="number"
          value={pokemon.defense}
          className="input"
        />
     
     
        <label for="">Velocidad: </label>
        <input
          onChange={onInputChange}
          name="speed"
          type="number"
          value={pokemon.speed}
          className="input"
        />
      
     
        
        <label for="">Altura: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          value={pokemon.height}
          className="input"
        />
     
     
        <label for="">Peso: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          value={pokemon.weight}
          className="input"
        />
      
      
        
        <p className="types-s">
        <select onChange={handleSelect}>
          {types.map((e) => (
            <option  value={e.name}>{e.name}</option>
          ))}

        </select>
        <ul>
          <li>{pokemon.types.map((e) => e + " , ")}</li>
        </ul>
        </p>
        <Link to="/home">
      <button type="submit" className="atras">Atrás</button></Link>
      <button type="submit" className="bottom">Crear</button>
    </form>
  );
}

