'use strict';
const Hoek = require('hoek');
const Chalk = require('chalk');
const Glue = require('glue');
const Config = require('./config/settings');
const Manifest = require('./config/manifest');


const composeOptions = {
    relativeTo: __dirname
};


const Composer = Glue.compose.bind(Glue, Manifest.get('/'), composeOptions);

Composer(function(err, server) {
    Hoek.assert(!err, err);
    
    server.start(function() {
        
        // Logging initialization
        console.log('--');
        console.log(Chalk.green('Environment:\t\t\t' + process.env.NODE_ENV));
        console.log(Chalk.green('Port:\t\t\t\t' + Config.get('/port/api')));
        
        console.log('Server started @ ' + server.info.uri);
        
        if (process.env.NODE_ENV === 'secure') {
            console.log(Chalk.green('HTTPs:\t\t\t\ton'));
        }
        console.log('--');
    });
});
