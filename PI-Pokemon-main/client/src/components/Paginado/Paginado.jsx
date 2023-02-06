import React from "react";
import "./Paginado.css"

const Paginado =({ pokemonsPerPage, allPokemons, paginado }) =>{
  const pageNumbers = []; //  declaro un arreglo vacio
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {  // todos los pokemons vividido por pokemon que quiero por pag
    pageNumbers.push(i);    // lo guardo en pageNumbers
  }

  return (
    <nav>
      <ul className='paginado' >
        {pageNumbers && pageNumbers.map(number => {
            return <li className="number" key ={number}>
            <button className="btn" onClick={() => paginado(number)}>
              {number}</button>
            </li>
          })}
      </ul>
    </nav>
  );
}
export default  Paginado;