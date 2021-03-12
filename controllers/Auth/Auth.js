const passport = require("passport");
require("./Passport");

exports.googleAuthenticate = passport.authenticate("google", {
  scope: ["profile", "email"],
  session: false,
});

exports.googleAuthCb = passport.authenticate("google", {
  failureRedirect: "/auth/failure",
  failureFlash: true,
});

exports.authCallback = (req, res, next) => {
  return res.json({
    user: req.user,
  });
};

exports.logout = (req, res, next) => {
  req.session = null;
  req.logout();
  res.redirect("/code/");
};
