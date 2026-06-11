/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    let arr = new Array(nums.length); 
    let p = nums.length - 1; 

    while (left <= right) {
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            arr[p] = leftSquare;
            left++; 
        } else {
            arr[p] = rightSquare;
            right--; 
        }
        p--; 
    }

    return arr;
};
