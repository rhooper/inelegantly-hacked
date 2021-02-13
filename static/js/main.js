"use strict";

require("bootstrap");

var _elasticlunr = _interopRequireDefault(require("elasticlunr"));

require("elasticlunr-search-widget");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const idx = (0, _elasticlunr.default)(function () {
  this.addField("title");
  this.addField("summary");
  this.addField("url");
  this.addField("tags");
});