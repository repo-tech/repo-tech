/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length-1;
    let arr = [];

    while(left<=right){
        let rs = Math.abs(nums[left])*Math.abs(nums[left]);
        arr.push(rs);
        left+=1;
    }

    return arr.sort((a,b)=>(a-b))
};