const LocalStrategy = require('passport-local');
const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            //Match User
            User.findOne({ where: {email: email}})
                .then(user => {
                    if(!user) {
                        return done(null, false, { message: 'That email is not registered' })
                    }

                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'Password incorrect' })
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    )

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findByPk(id)
        .then(function (user) {
            if (user) {
                done(null, user.get())
            } else {
                done(user.errors, null);
            }
    });
})

};