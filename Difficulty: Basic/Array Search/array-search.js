/**
 * @param {number[]} arr
 * @param {number} x
 * @return {number}
 */
class Solution {
    search(arr, x) {
        // code here
        for ( let i = 0; i < arr.length; i++) {
            if( x === arr[i] ) {
                return i;
            }
        }
        return -1;
    }
}
