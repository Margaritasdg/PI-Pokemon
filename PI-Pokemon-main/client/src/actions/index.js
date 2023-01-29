import axios from "axios";


export function postPokemon(payload){
return async function () {
  const response = await axios.post("http://localhost:3001/pokemons" , payload)
  return response;
}
}

export function searchPoke(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/pokemons?name=" + name) 
      return dispatch({
        type: "SEARCH_NAME",
        payload: json.data //es lo que me devuelve la ruta una vez que le asigno algo por name
      });
    } catch {
      return alert("No se encontró el pokemon 😕");
    }
  };
}


export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function Sort(order){
  return {
      type: "SORT",
      payload: order
  }
}
export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload
  };
}

export function filterByAttack(payload){
  return {
    type: "FILTER_BY_ATTACK",
    payload
  }
}

export function getPokemons() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/pokemons");
    dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}


export function getDetail(id) {
  if(id){
  return async function (dispatch) {
    try{
        const detail = await axios.get(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
      type: "GET_DETAILS",
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

export function getType() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: "GET_TYPE",
      payload: json.data
    })
  }

}