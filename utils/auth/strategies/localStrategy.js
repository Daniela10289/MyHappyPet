const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const AuthService  = require('./../../../services/authService');
const service = new AuthService();

const LocalStrategy = new Strategy({
        usernameField: 'document',
        passwordField: 'password'
    },
    async (document, password, done) => {
        try {
            const user = await service.getUser(document, password);
            done(null, user);
          } catch (error) {
            done(error, false);
          }
    });

module.exports = LocalStrategy
