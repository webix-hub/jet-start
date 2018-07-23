const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(new GoogleStrategy({
    clientID: "you id here",
    clientSecret: "your secret here",
    //when deploying, change line below to the production site
    callbackURL: "http://localhost:8080/server/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

function route(app){
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback', 
    passport.authenticate('google', { 
      failureRedirect: '/denied.html',
      successRedirect: '/' 
    })
  );

  app.post("/login/status", (req, res) => {
    res.send(req.session.passport || null);
  });
  app.post("/logout", (req, res) => {
    delete req.session.passport;
    res.send({});
  });
    
}

module.exports = { route };