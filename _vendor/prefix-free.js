var PrefixFree = window.PrefixFree || undefined;
var StyleFix = window.StyleFix || undefined;

require('./prefix-free/prefix-free');

module.exports = {
  PrefixFree: window.PrefixFree,
  StyleFix: window.StyleFix
};

window.PrefixFree = PrefixFree;
window.StyleFix = StlyeFix;
