const localStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const users = require("../Models/users.model.js");

module.exports = async function(passport) {
  passport.use(
    "local",
    new localStrategy(
      { usernameField: "username" },
      async (username, password, done) => {
        await users
          .findOne({ username: username })
          .then(user => {
            if (!user) {
              return done(null, false, { message: "User Not Found" });
            } else if (user) {
              bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                  console.log(err);
                }
                if (isMatch) {
                  return done(null, user);
                } else {
                  return done(null, false, {
                    message: "Incorrect Username or Password"
                  });
                }
              });
            }
          })
          .catch(err => console.log(err));
      }
    )
  );
  passport.serializeUser(function(user, done) {
    console.log("user serialised")
    done(null, user.id);
  });
  passport.deserializeUser(async function(id, done) {
    console.log("user deserialisesd")
   await users.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
