class Solution {
    intersection(a, b) {
        // code here
        let arr = []
        let k = 0;
        let a1 = new Set(a);
        let b1 = new Set(b);
        // console.log(a1);
        //  console.log(b1);
        
        for(let item of a1) {
            if(b1.has(item)){
                arr.push(item);
            }
        }
        return arr;
    }
}