#!/usr/bin/env node

const haykal = require('./lib/haykal');

module.exports = haykal


if(require.main == module)
    haykal()