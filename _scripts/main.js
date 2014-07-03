var config = require('../config/slide_config');
var SlideDeck = require('./slides/slide-deck');
var funcs = require('./lib/funcs');
var hljs = require('highlight');

// configure highlight.js
hljs.configure({tabReplace: '    '}); // 4 spaces

// load our modernizr build (creates globals and polyfills where needed)
// then, enable specific polyfills if we are missing classlist/dataset
// then, include history management if not supported
require('./vendor/modernizr');
if (!!document.body.classList && !!document.body.dataset) {
  require('./polyfills/classList.min');
  require('./polyfills/dataset.min');
}
if (!!window.history) {
  require('./polyfills/history');
}

// convert all our pre blocks of class prettyprint to highlight blocks
var pre = document.getElementsByTagName('pre');
for (var i = 0, len = pre.length; i < len; i++) {
  if (funcs.hasClass(pre[i], 'prettyprint')) {
    hljs.highlightBlock(funcs.getAttribute(pre[i], 'data-lang'), pre[i]);
  }
}

module.exports = new SlideDeck();
