const {Router} = require ("express");
const getAllPokemons = require ("../Controllers/getPokemons.js");
const{Pokemon,Type} = require("../db.js");
const {getPokemonsHandlers,getPokemonHandlers,createPokemonsHandlers
}= require ("../handlers/pokemonsHandlers.js");

const router = Router();


router.get("/",getPokemonsHandlers);

router.get("/:id",getPokemonHandlers);

router.post("/",createPokemonsHandlers);

//router.put("/",putPokemonsHandlers);







module.exports = router;
