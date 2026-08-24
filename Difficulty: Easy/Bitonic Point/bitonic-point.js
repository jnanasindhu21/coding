/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    findMaximum(arr) {
        // your code here
        for (let i=0; i<arr.length-1; i++) {
            if(arr[i] > arr[i+1]) {
                return arr[i];
            }
        }
    }
}