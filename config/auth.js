// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : 'DLSOCS', // your App ID
        'clientSecret'    : 'DLSOCS', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'DLSOCS',
        'consumerSecret'     : 'DLSOCS',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'DLSOCS',
        'clientSecret'     : 'DLSOCS',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
