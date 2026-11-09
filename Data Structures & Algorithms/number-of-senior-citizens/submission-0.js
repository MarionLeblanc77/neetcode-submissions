class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for (let i = 0; i < details.length ; i++) {
            if (parseInt(details[i].slice(-4, -2)) > 60) count ++
        }
        return count
    }
}
