/**
 * @param {number[]} arr
 * @param {number} x
 * @returns {number}
 */

class Solution {

    findFloor(arr, x) {
        // your code here
       let max = -1;
        
        for (let i = 0; i<arr.length; i++) {
            if (x >= arr[i]) {
                max = i;
            }
        }
        return max;
    
    }
}