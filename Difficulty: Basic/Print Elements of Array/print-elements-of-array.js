// User function Template for javascript

/**
 * @param {number[]} arr
 */
class Solution {
    printArray(arr) {
        // code here
        let output = [];
        for ( let i = 0; i < arr.length; i++ ) {
            output += arr[i] + " ";
        }
        console.log(output);
    }
}