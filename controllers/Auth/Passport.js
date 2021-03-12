const passport = require("passport");
const GoogleOAuth20Stratergy = require("passport-google-oauth20").Strategy;
const User = require("../../models/User");

passport.use(
  new GoogleOAuth20Stratergy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log(profile);
      try {
        const user = await User.find({ googleId: profile.id });
        if (user.length == 0) {
          const newUser = new User({
            googleId: profile.id,
            username: profile.displayName,
            emailId: profile.emails[0].value,
            profile,
          });
          newUser.save().then((doc) => {
            console.log(doc);
            return done(null, profile);
          });
        } else {
          done(null, user[0].profile);
        }
      } catch (error) {
        done(error.message ? error.message : "Something Went Wrong", null);
      }
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
