'use strict';

const Confidence = require('confidence');
const Config = require('./settings');

let internals = {
    criteria: {
        env: process.env.NODE_ENV
    }
};

internals.manifest = {
    $meta: 'App manifest document',
    $filter: 'env',
    $default: {
        server: {
            connections: {
                router: {
                    stripTrailingSlash: true,
                    isCaseSensitive: false
                },
                routes: {
                    security: true
                }
            }
        },
        connections: [{
            port: Config.get('/port/api'),
            routes: {
                cors: true
            },
            labels: ['api']
        }],
        registrations: [
            // Static file and directory handlers
            {
                plugin: 'inert'
            },

            // Templates rendering support
            {
                plugin: 'vision'
            },

            {
                plugin: 'hapi-swagger'
            },
            
            {
                plugin: './lib/routing/routes'
            }
        ]
    },
    production: {
        server: {
            connections: {
                router: {
                    stripTrailingSlash: true,
                    isCaseSensitive: false
                },
                routes: {
                    security: true
                }
            }
        },
        connections: [{
            port: Config.get('/port/api'),
            labels: ['api'],
            routes: {
                cors: true
            }
        }],
        registrations: [
            // Static file and directory handlers
            {
                plugin: 'inert'
            },
    
            // Templates rendering support
            {
                plugin: 'vision'
            },
    
            {
                plugin: 'hapi-swagger'
            },
            {
                plugin: './lib/routing/routes'
            }
        ]
    }
};

internals.store = new Confidence.Store(internals.manifest);

exports.get = function(key) {
    return internals.store.get(key, internals.criteria);
};
exports.meta = function(key) {
    return internals.store.meta(key, internals.criteria);
};
