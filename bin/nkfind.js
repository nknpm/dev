#!/usr/bin/env node

"use strict";

var userArgs = process.argv.slice(2);
var searchParam = userArgs[0];
var execute = require('child_process').exec;

var childProc = execute('ls -a | grep ' + searchParam, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
});
