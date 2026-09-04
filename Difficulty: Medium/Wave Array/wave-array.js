class Solution {
    sortInWave(arr) {
        // code here
        
        for ( let i = 0; i<arr.length-1; i+=2 ) {
            if(arr[i] < arr[i+1]) {
                let t = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = t;
            }
        }
    }
}
