import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import { getType, postPokemon } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./Form.css";

const  validate = (pokemon)=>{
  const errors = {};
  if (!pokemon.name.trim){
    errors.name = "Se requiere un Nombre"
  } return errors
}

  const Form=()=> {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors,setErrors] = useState({});

  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    types: [],
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

  


const onInputChange = (e) =>{
  e.preventDefault();
  setPokemon({
    ...pokemon,
    [e.target.name]: e.target.value//name se refiere a cada dato por llenar,por eso en el form aparece name en todos
                                //el value son los inputs de arriba que va a ir cambiando.
  })
  setErrors(validate({
      ...pokemon,
      [e.target.name]: e.target.value,
    }));
    //console.log(pokemon)
}

const handleSelect = (e) => {
  setPokemon({
    ...pokemon,
    types: [...pokemon.types, e.target.value],
  })
};


const onSubmit = (e) =>{
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
      image: "",
      types: [],
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
      
        <label htmlFor="name"> Nombre: </label>
        <input className="input"
          onChange={onInputChange}
          id="name"
          name="name"
          type="text"
          value={pokemon.name}required
        />
        {errors.name && <p className="error"> {errors.name}</p>}
      
      
        <label htmlFor="">Imagen:</label>
        <input
          onChange={onInputChange}
          name="image"
          type="text"
          value={pokemon.image}
          className="input"
        />
      
      
       
        <label htmlFor="">Vida: </label>
        <input
          onChange={onInputChange}
          name="life"
          type="number"
          value={pokemon.life}
          className="input"
        />
    
     
        <label htmlFor="">Fuerza: </label>
        <input
          onChange={onInputChange}
          name="attack"
          type="number"
          value={pokemon.attack}
          className="input"
        />
     
     
        <label htmlFor="">Defensa: </label>
        <input
          onChange={onInputChange}
          name="defense"
          type="number"
          value={pokemon.defense}
          className="input"
        />
     
     
        <label htmlFor="">Velocidad: </label>
        <input
          onChange={onInputChange}
          name="speed"
          type="number"
          value={pokemon.speed}
          className="input"
        />
      
     
        
        <label htmlFor="">Altura: </label>
        <input
          onChange={onInputChange}
          name="height"
          type="number"
          value={pokemon.height}
          className="input"
        />
     
     
        <label htmlFor="">Peso: </label>
        <input
          onChange={onInputChange}
          name="weight"
          type="number"
          value={pokemon.weight}
          className="input"
        />
      
      
        
        <div className="types-s">
          <label className="types">Tipos:</label>
          <select onChange={handleSelect}>
            {types.map((e) => (
              <option key={e.name} value={e.name}>{e.name}</option>
          ))}
          </select>
        </div>

        <div>
          <Link to="/home">
            <button type="submit" className="atras">Atrás</button></Link>
      <button type="submit" className="bottom">Crear</button>

        </div>
    </form>
  );
}

export default Form;