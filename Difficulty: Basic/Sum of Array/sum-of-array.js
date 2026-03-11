// User function Template for javascript
/**
 * @param {number[]} arr - The array of numbers to sum
 * @return {number} - The sum of the array elements
 */
class Solution {
    arraySum(arr) {
        // code here
        let sum = 0;
        
        for (let i = 0 ; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }
}