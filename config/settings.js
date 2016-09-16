'use strict';

const Confidence = require('confidence');

// Confidence criteria
let internals = {
    criteria: {
        env: process.env.NODE_ENV
    }
};


//  Confidence document object

internals.config = {
    $meta: 'kopfkino',
    port: {
        api: {
            $filter: 'env',
            dev: 3005,
            development: 3005,
            $default: process.env.PORT
        }
    },
    baseUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://kopfkino.herokuapp.com',
        $default: 'http://0.0.0.0:3005'
    }
};

internals.store = new Confidence.Store(internals.config);

exports.get = function(key) {
    return internals.store.get(key, internals.criteria);
};

exports.meta = function(key) {
    return internals.store.meta(key, internals.criteria);
};
