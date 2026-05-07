/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sortArr= [...nums1,...nums2].sort((a,b)=>(a-b));
    let n = sortArr.length;
    let mid= Math.floor(n/2);

    if (n % 2 !== 0) {
        return sortArr[mid];
    } 
    else {
        return (sortArr[mid - 1] + sortArr[mid]) / 2;
    }
    
};