import axios from "axios";


export const postPokemon=(payload)=>{
return async function () {
  const response = await axios.post("http://localhost:3001/pokemons" , payload)
  return response;
}
}
export const SEARCH_NAME = "SEARCH_NAME";
export const searchPoke=(name)=> {
  return async function (dispatch) {
    try {
      const json = await axios.get("http://localhost:3001/pokemons?name=" + name) 
      return dispatch({
        type: SEARCH_NAME,
        payload: json.data //es lo que me devuelve la ruta una vez que le asigno algo por name
      });
    } catch {
      return alert("No se encontró el pokemon 😕");
    }
  };
}

export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const filterPokemonsByType =(payload)=> {//el payload es el value del input
  return {
    type:FILTER_BY_TYPE ,
    payload,
  };
}
export const SORT = "SORT";
export const Sort=(option)=>{//asc y desc
  return {
      type: SORT,
      payload:option
  }
}
export const FILTER_CREATED = "FILTER_CREATED";
export const filterCreated=(payload)=> {//db
  return {
    type: FILTER_CREATED,
    payload
  };
}
export const FILTER_BY_ATTACK = "FILTER_BY_ATTACK" ;
export const filterByAttack=(payload)=>{
  return {
    type: FILTER_BY_ATTACK,
    payload
  }
}
export const GET_POKEMONS = "GET_POKEMONS";
export const getPokemons = ()=> {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/pokemons");
    dispatch({
      type: GET_POKEMONS,
      payload: apiData.data,
    });
  };
}

export const GET_DETAILS ="GET_DETAILS";
export const getDetail=(id)=> {
  if(id){
  return async function (dispatch) {
    try{
        const detail = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
      type: GET_DETAILS,
      payload: detail.data
    })
   
} catch(error) {
  console.log(error)
}
  }
}
return {
  type: 'RESET',
}
};    
export const GET_TYPE = "GET_TYPE";
export const getType=()=> {
  return async function (dispatch) {
    const type = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPE,
      payload: type.data
    })
  }

}
