const { Router } = require("express");
const { Type } = require("../db.js");
const axios = require("axios");
const router = Router();

const getTypesHandlers =  async (req, res, next) => {
    try {
    const api = await axios.get("https://pokeapi.co/api/v2/type"); //Trae todos los tipos
    const types = await api.data // trae la respuesta en data
    for (const type of types.results) { //Entra a la propiedad results, a cada elemento..
      const find = await Type.findOne({ where: {name: type.name}}); // Entra a la propiedad name y busca si ya existe 
      if (!find)  { // Si no lo encuentra..
        await Type.create({ name: type.name }); //Lo agrega a la base de datos
        } else {
        return res.json(await Type.findAll()) // Sino devuelve todos los tipos
        }
    }
    res.json(await Type.findAll()); //Finalmente devuelvo todos los tipos de la Db.
    } catch (error) {
    next(error);
    }
};

module.exports = {getTypesHandlers};
