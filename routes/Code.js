//* Import Statements *//
const { Router } = require("express");
const Code = require("../controllers/Code/Code");
const isAuth = require("../handlers/isAuth");
const router = Router();

//* Routes *//
router.get("/getAll", isAuth, Code.getAll);
router.get("/get/:id", isAuth, Code.getSpecific);
router.post("/new", isAuth, Code.createPost);

//* Exporting The Router *//
module.exports = router;
