class Solution {
    isSorted(arr) {
        // code here
        for ( let i=1; i<arr.length; i++) {
            if(arr[i-1] > arr[i] ) {
                return false;
            }
        }
        return true;
    }
}