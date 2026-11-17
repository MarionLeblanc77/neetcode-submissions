class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let pascal = [[1]];
        for (let i = 0 ; i < numRows - 1; i++) {
            const newPascal = [1]
            for (let y = 0 ; y < pascal[i].length ; y++){
                newPascal.push(pascal[i][y] + (pascal[i][y+1] ? pascal[i][y+1] : 0))
            }
            pascal.push(newPascal)
        }
        return pascal
    }
}
