/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    let currentPath = [];
    nums = nums.sort((a, b) => a - b)

    var backtrack = (index) => {
        if (index === nums.length) {
            result.push([...currentPath]); 
            return;
        }

        currentPath.push(nums[index]);
        backtrack(index + 1);

        currentPath.pop();
        let nextIndex = index + 1;
        while (nextIndex < nums.length && nums[nextIndex] === nums[index]) {
            nextIndex++;
        }
        backtrack(nextIndex);
    };


    backtrack(0);
    return result;
};