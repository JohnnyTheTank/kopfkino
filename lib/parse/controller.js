'use strict';

const Boom = require('boom');
const Promise = require('bluebird');
const request = Promise.promisifyAll(require('request'));


const Controller = {
    post: post
};

let internals = {};

module.exports = Controller;

// [POST] /parse
function post(request, reply) {
    
    if(true) {
        reply(true);
    } else {
        reply(false)
    }
    
}