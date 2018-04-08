const { expect } = require('chai');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let h = {}

  nums.forEach((num, i) => {
    h[num] = i;
  })

  for (var i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;

    if (!(diff in h)) return;

    return [i, h[diff]];
  }
}

describe("twoSum", () => {
  it("returns array of indexs summing to target", () => {
    expect(twoSum([2,7,11,15], 9)).to.deep.eq([0,1]);
  })
})
