"use strict";

const Boom = require('boom');


const Controller = {
    get: (request, reply) => { reply({"version":"v1"}); },
};

module.exports = Controller;