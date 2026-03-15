/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    reverseArray(arr) {
        // code here
        let n = arr.length;
        for(let i = 0; i < n/2; i++) {
            let t = arr[i];
            arr[i] = arr[n-i-1];
            arr[n-i-1] = t;
        }
    }
}