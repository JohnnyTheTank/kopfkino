'use strict';

const Validator = require('./schema');
const Controller = require('./controller');

const routes = [
    {
        path: '/parse',
        method: 'POST',
        config: {
            auth: false,
            handler: Controller.post,
            notes: 'parse',
            tags: ['api'],
            validate: Validator.post
        }
    }
];

module.exports = routes;