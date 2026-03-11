/**
 * @param {number[]} arr
 */

class Solution {
    getAlternates(arr) {
        // code here
        let a = []
        for (let i = 0; i < arr.length; i+=2) {
            a.push(arr[i]);
        }
        return a;
    }
}