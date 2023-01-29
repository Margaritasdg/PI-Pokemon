const {Router} = require ("express");
const {Type} = require ("../db.js");
const router= Router();
const{ getTypesHandlers } = require ("../handlers/typesHandlers.js");



router.get("/",getTypesHandlers);


module.exports = router;

