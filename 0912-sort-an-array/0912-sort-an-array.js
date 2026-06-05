/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (!nums || nums.length <= 1) return nums;
    
    const temp = new Array(nums.length);
    
    const mergeSort = (left, right) => {
        if (left >= right) return;
        
        const mid = Math.floor(left + (right - left) / 2);
        
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    };
    
    const merge = (left, mid, right) => {
        for (let i = left; i <= right; i++) {
            temp[i] = nums[i];
        }
        
        let i = left;    
        let j = mid + 1;  
        let k = left;    
        
        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                nums[k++] = temp[i++];
            } else {
                nums[k++] = temp[j++];
            }
        }
        
        while (i <= mid) {
            nums[k++] = temp[i++];
        }
    };
    
    mergeSort(0, nums.length - 1);
    return nums;
};
