/**
 * 45. Jump Game II
 * 
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that position.
 * 
 * Your goal is to reach the last index in the minimum number of jumps.
 * 
 * Example:
 * 
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 *     Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Note:
 * 
 * You can assume that you can always reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	var len = nums.length;
	var step = 0;
	var now = 0;
	var max = 0;
	
	for (var i = 0; i < len - 1; i++) {
			max = Math.max(max, i + nums[i]);
			if (i === now) {
					step++;
					now = max;
			}
	}
	
	return step;
};

// 假设 nums[0] === 8，那就是 1 ~ 8 都只需一步就能到达
// 在 1 ~ 8 里找出跳得最远的，假设能跳到 12，那就是 9 ~ 12 都只需要两步就能到达
// 在 9 ~ 12 里找出跳得最远的...

// 贪心，每次选最好的
