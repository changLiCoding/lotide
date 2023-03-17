const letterPositions = function(sentence) {
  const results = {};
  const strSpc = sentence.toLowerCase();
  for (let i = 0; i < strSpc.length; i++) {
    if (strSpc[i] === ' ') continue;
    if (results[strSpc[i]]) {
      results[strSpc[i]].push(i);
    } else {
      results[strSpc[i]] = [i];
    }
  }
  console.log(results);
  return results;
};

module.exports = letterPositions;

const assertArraysEqual = function(actual,expected) {
  if (typeof actual !== typeof expected) {

    console.log(`🌚🌚🌚Assertion Failed Different Data Type: ${actual} !== ${expected}`);
    return;
  } else {
    if (actual.length === expected.length && actual instanceof Array) {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
          console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
          return;
        }
      }
      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);
      return true;
    } else if (actual === expected) {
      console.log(`🌝🌝🌝Assertion Passed: ${actual} === ${expected}`);

    } else {
      console.log(`🌚🌚🌚Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

assertArraysEqual(letterPositions("lighthouse in the house").e, [9]);
letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);
