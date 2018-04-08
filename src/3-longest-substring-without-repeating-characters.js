const { expect } = require('chai');

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  s = s.split("");

  let results = [];
  for (var i = 0; i < s.length; i++) {
    results[i] = [s[i]];

    for (var j = i + 1; j < s.length; j++) {
      if (results[i].indexOf(s[j]) >= 0) {
        // found a repeating char
        break;
      }
      results[i].push(s[j]);
    }
  }

  let biggest = [];
  results.forEach(result => {
    if (result.length > biggest.length) {
      biggest = result;
    }
  });

  return biggest.join("");
};

describe("lengthOfLongestSubstring", () => {
  it("finds length of longest substring", () => {
    let tests = [["abcabcbb", "abc"], ["bbbb", "b"], ["pwwkew", "wke"]];

    tests.forEach(test => {
      let result = lengthOfLongestSubstring(test[0]);

      expect(result).to.eq(test[1]);
    });
  })


})
