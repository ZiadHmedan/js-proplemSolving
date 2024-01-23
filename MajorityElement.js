/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    nums.sort((a, b)=>a - b);

    return nums[Math.ceil(nums.length / 2) - 1]
   
};