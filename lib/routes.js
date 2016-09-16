'use strict';

const Controller = require('./controller');

const parse_routes = require('./parse/routes');

let internals = {};

exports.register = (server, options, next) => {

    server.dependency([], internals.setup);
    return next();

};

internals.setup = function (server, next) {

    server.route(parse_routes);
    server.route([
        {
            path: '/',
            method: 'GET',
            config: {
                auth: false,
                handler: Controller.get,
                notes: 'returns the version',
                tags: ['api'],
            }
        },
    ]);
    

    return next();
};

exports.register.attributes = {
    name: 'v1-route',
    version: '1.0.0'
};
