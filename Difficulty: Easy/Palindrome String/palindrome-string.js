/**
 * @param {string} s
 * @return {boolean}
 */
class Solution {
    isPalindrome(s) {
        // code here
        for( let i=0, j=s.length-1; i<s.length/2; i++, j-- ) {
            if( s[i] != s[j] ) {
                return false;
            }
        }
        return true;
    }
}
