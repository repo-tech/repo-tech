/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    const absX = Math.abs(x);
    
    const reversed = parseInt(absX.toString().split('').reverse().join('')) * sign;
    
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return reversed;
};
