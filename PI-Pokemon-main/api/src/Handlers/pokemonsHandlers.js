const { Router } = require("express");
const router = Router();
const getAllPokemons= require("../Controllers/getPokemons.js");
const { Pokemon, Type } = require("../db.js");



const getPokemonsHandlers = async (req,res,next)=>{
    try{
    const {name} = req.query;
    const pokemonsTotal = await getAllPokemons();
    if(name){
        const pokemonName = await pokemonsTotal.filter((el)=>
            el.name.toLowerCase().includes(name.toLowerCase())
        );
        pokemonName.length
        ?res.status(200).send(pokemonName)
        :res.status(404).send("El pokemon ingresado no existe")
    }else{
        res.status(200).send(pokemonsTotal);
    }
}catch(error){
    next(error);
}
};

const getPokemonHandlers = async (req, res, next) => { //Busqueda por id
    try {
        const {id} = req.params;
        const pokemonsTotal = await getAllPokemons();
      if (id) { //Si me pasan un ID, filtro el que coincida con ese mismo, sino devuelvo texto.
        const pokemonId = pokemonsTotal.filter((el) => el.id == id); 
        pokemonId.length
            ? res.status(200).json(pokemonId)
            : res.status(404).send("No se encontró el pokemon");
        }
        } catch (error) {
        next(error);
    }
    };
const createPokemonsHandlers = async(req,res,next)=>{
try {
    const { name, image, life, attack, defense, speed, height, weight, types} = req.body //Datos que necesito pedir
    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
       
        
    });
    
    if (!name) return res.json({ info: "El nombre es obligatorio" });

    if(Array.isArray(types) && types.length){ //Consulto si lo que me llega en TYPES, es un arreglo y si tiene algo adentro.
        const dbTypes = await Promise.all( //creo una constante que dentro tendra una resolucion de promesas
          types.map((e) => { // Agarro la data de types y le hago un map para verificar que cada elemento exista en 
            return Type.findOne({where:{ name: e}}) // nuestra tabla de tipos
        })
        )
       await newPokemon.setTypes(dbTypes) //Una vez que se resuelva la promesa del Pokemon.create, le agrego los tipos
    
        return res.status(201).send("Pokemon creado exitosamente");
        }

} catch (error) {
    
}
res.status(400).json("No se creo ");

};

/*const putPokemonsHandlers = async (req, res, next) =>{
    
try {
    const {id,name}= req.body;
    const updatedPokemon=await getAllPokemons();

    if(!id || !name)throw Error("Error en data");
    const pokemonUser = updatedPokemon.find((pokemonUser)=> pokemonUser.id == id);
    if(!pokemonUser) throwError("No existe");
    pokemonUser.name = name;
    return res.status(200).json("modificado con exito")
} catch (error) {

}
res.status(400).json("Error en data");
};*/

module.exports={
    getPokemonsHandlers,
    getPokemonHandlers,
    createPokemonsHandlers,
    //putPokemonsHandlers ,
};
