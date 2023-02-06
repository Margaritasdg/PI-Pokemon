
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterPokemonsByType,
  filterCreated,
  Sort,
  filterByAttack,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Paginado from "../../components/Paginado/Paginado";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";


const Home= ()=> {
  const dispatch = useDispatch();//me trae el reduce ,el estado pokemons
  const allPokemons = useSelector((state) => state.pokemons) //con useSelector hago que me traiga todo lo q esta en el estado de pokemon y lo guardo en esta constante
  const [currentPage, setCurrentPage] = useState(1);//estado local.siempre arranca de la pag. 1//guardame la pag. actual y una constante que me setee la pag.actual
  const [pokemonsPerPage] = useState(12);//otro estado local, setear los pokemons por pag. //guardar cuantos quiero por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage;//1*12
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(//pokemon por pag. actual
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginado = (pageNumber) => {   // me va  ayudar al renderizado
    setCurrentPage(pageNumber);
  };
    //me traigo los pokemons cuando el componente se monta
  useEffect(() => {  // paso la accion q arriba declare 
    dispatch(getPokemons());
  }, [dispatch]);  //arreglo vacio porque no depende de nada , se monta tranquilo

  function handleFilterType(e) {
    dispatch(filterPokemonsByType(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleFilterAttack(e) {
    dispatch(filterByAttack(e.target.value));
  }

  function onSelectsChange(e) {  
    dispatch(Sort(e.target.value));
  }
  
  return (
     <>
      <NavBar />
      <SearchBar className="search"/>
      <div className="home">
        <div>
          <select name="select" onChange={onSelectsChange} className="a-z">
            <option value="Filtro"> A-Z:</option>
            <option value="ASCENDENTE">Ascendente</option>
            <option value="DESCENDENTE">Descendente</option>
          </select>
          <select name="selects" onChange={handleFilterAttack}
            className="attack"
          >
            <option value="Fuerza"> Fuerza </option>
            <option value="Mayor fuerza">Mayor fuerza</option>
            <option value="Menor fuerza">Menor fuerza</option>
          </select>
          <select onChange={handleFilterType}>
          <option value="type"> Tipo </option>
            <option value="normal"> Normal </option>
            <option value="flying"> Flying </option>
            <option value="poison"> Poison </option>
            <option value="ground"> Ground </option>
            <option value="bug"> Bug </option>
            <option value="fire"> Fire </option>
            <option value="water"> Water </option>
            <option value="grass"> Grass </option>
            <option value="electric"> Electric </option>
            <option value="fairy"> Fairy </option>
          </select>
          <select onChange={handleFilterCreated}>
            <option value="Todos"> Todos </option>
            <option value="Creados"> Creados </option>
            <option value="Existentes"> Existentes </option>
          </select>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          {currentPokemons?.map((e) => {
              return (
                <>
                  <Link to={"/home/" + e.id}> 
                    <CardsContainer 
                      name={e.name}
                      image={e.image}
                      types={e.types}
                      key={e.id}
                    />
                  </Link>
                </>
              );
            })}
            
          </div>
        </div>
        </>
    );
}

export default Home;

//<CardsContainer curren={currentPokemons}/>
