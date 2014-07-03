var rclass = /[\t\r\n\f]/g;

// https://github.com/jquery/jquery/blob/d837f119c3729565103005d5d7fa89e1dd8110cb/src/attributes/classes.js
module.exports.hasClass = function(el, selector) {
  var className = " " + selector + " ";
  if (el.nodeType === 1 && (" " + el.className + " ").replace(rclass, " ").indexOf(className) >= 0 ) {
    return true;
  }
  return false;
};

// http://stackoverflow.com/questions/3755227/cross-browser-javascript-getattribute-method
module.exports.getAttribute = function(el, attr) {
  var result = (el.getAttribute && el.getAttribute(attr)) || null;
  if(!result) {
    var attrs = el.attributes;
    var length = attrs.length;
    for(var i = 0; i < length; i++) {
      if(attrs[i].nodeName === attr) {
        result = attrs[i].nodeValue;
      }
    }
  }
  return result;
};
