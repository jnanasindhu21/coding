
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        let lar = arr[0];
        for(let i = 0; i < arr.length; i++) {
            if(lar < arr[i]) {
                lar = arr[i];
            }
        }
        return lar;
    }
}
