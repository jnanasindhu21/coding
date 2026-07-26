/**
 * @param {string} s
 * @return {string}
 */

class Solution {

    reverseString(s) {
        // code here
        let res=[];
        for( let i = s.length-1; i>=0; i--) {
            res.push(s[i]);
        }
        
        return res.join("");;
    }
}
