"use strict";

module.exports = utils;

var utils = {}

utils.l = console.log;

utils.protos = function(obj, call) {
  call(obj);
  if (obj !== null) {
    utils.protos(obj.__proto__, call);
  }
}
