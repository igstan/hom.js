// hom – Higher-Order Messages
//
;(function (global) {
  "use strict";

  var __ = Proxy.create({
    get: function (receiver, member) {
      return function (object) {
        if (object && typeof object[member] !== "function") {
          return object[member];
        }

        var args = arguments;
        return function (object) {
          return object[member].apply(object, args);
        };
      };
    }
  });

  global.__ = __;

})(this);
