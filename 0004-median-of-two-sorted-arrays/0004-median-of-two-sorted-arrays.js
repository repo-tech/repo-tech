/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Hamesha chhote array par binary search karte hain efficiency ke liye
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        // nums1 mein partition point
        let partitionX = Math.floor((low + high) / 2);
        // nums2 mein partition point taaki left half balance rahe
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // Boundary values handle karna (Infinity use karke)
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX === m) ? Infinity : nums1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY === n) ? Infinity : nums2[partitionY];

        // Sahi partition mil gaya?
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Agar total length ODD hai
            if ((m + n) % 2 !== 0) {
                return Math.max(maxLeftX, maxLeftY);
            } 
            // Agar total length EVEN hai
            else {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            }
        } 
        // Agar hum zyada right chale gaye hain, toh left move karo
        else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } 
        // Agar hum zyada left hain, toh right move karo
        else {
            low = partitionX + 1;
        }
    }
};
