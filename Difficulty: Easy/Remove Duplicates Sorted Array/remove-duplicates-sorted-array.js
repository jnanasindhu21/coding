class Solution {
    removeDuplicates(arr) {
        // code here
        if(arr.length == 1) return arr;
        
        arr.sort((a,b) => a-b);
        
        let a = [];
        let j = 0;
        
        for ( let i = 0; i < arr.length-1; i++) {
            if( arr[i] !== arr[i+1] ){
                a[j++] = arr[i];
            }
            a[j] = arr[arr.length-1];
        }
        return a;
    }
}
