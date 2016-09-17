"use strict";

const Joi = require('joi'),
    Boom = require('boom');

const params = {};

const query = {};


const Validator = {
    post: post(params, query),
};

function post(params, query) {
    return {
        params: params,
        query: query
    };
}

module.exports = Validator;