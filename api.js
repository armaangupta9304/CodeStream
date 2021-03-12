const { Router } = require("express");
const router = Router();
const Auth = require("./routes/Auth");
const Code = require("./routes/Code");

router.use("/auth", Auth);
router.use("/code", Code);

module.exports = router;