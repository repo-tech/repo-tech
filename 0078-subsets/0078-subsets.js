/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let currentPath = [];

    var backtrack = (index) => {
        if (index === nums.length) {
            result.push([...currentPath]); 
            return;
        }

        currentPath.push(nums[index]);
        backtrack(index + 1);

        currentPath.pop();
        backtrack(index + 1);
    };

    backtrack(0);
    return result;
};
