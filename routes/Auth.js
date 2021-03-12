const { Router } = require("express");
const router = Router();
const Auth = require("../controllers/Auth/Auth");
const isAuth = require("../handlers/isAuth");

router.get("/google", Auth.googleAuthenticate);
router.get("/google/callback", Auth.googleAuthCb, Auth.authCallback);
router.get("/logout", Auth.logout);
router.get("/test", isAuth, (req, res, next) => {
    res.json({
        message: 'You Are Authorized!'
    });
});

module.exports = router;