"use strict";

test("argumentless method calls", function () {
  var fixture  = ["a", "bb", "ccc"];
  var actual   = fixture.map(__.toUpperCase());
  var expected = fixture.map(function (s) {
    return s.toUpperCase();
  });

  deepEqual(actual, expected);
});


test("method calls with argument of the same type as __", function () {
  var fixture  = ["a", "bb", "ccc"];
  var actual   = fixture.map(__.indexOf("a"));
  var expected = fixture.map(function (s) {
    return s.indexOf("a");
  });

  deepEqual(actual, expected);
});


test("method calls with arguments", function () {
  var fixture  = [1, 2, 17];
  var actual   = fixture.map(__.toString(16));
  var expected = fixture.map(function (s) {
    return s.toString(16);
  });

  deepEqual(actual, expected);
});


test("property access", function () {
  var fixture  = ["a", "bb", "ccc"];
  var actual   = fixture.map(__.length);
  var expected = fixture.map(function (s) {
    return s.length;
  });

  deepEqual(actual, expected);
});
