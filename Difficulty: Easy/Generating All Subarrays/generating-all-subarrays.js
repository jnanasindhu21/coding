class Solution {
    getSubArrays(arr) {
        let n = arr.length;
        let result = [];

        for (let st = 0; st < n; st++) {
            for (let end = st; end < n; end++) {
                result.push(arr.slice(st, end + 1));
            }
        }

        return result;
    }
}