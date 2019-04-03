'use strict';

var index = require('../');

function debug () {
    if (index.debug_mode) {
        data = Array.from(arguments);
        data.unshift(new Date());
        console.error.apply(null, data);
    }
}

module.exports = debug;
