/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let num = parseInt(s, 10);

    if (isNaN(num)) return 0;

    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;

    return num;
};
