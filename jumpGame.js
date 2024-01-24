/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let cum = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
            if(i === 0) cum = nums[i]
            else{cum = Math.max(cum - 1, nums[i])}
            if(cum === 0)return false
    }
    return true
};