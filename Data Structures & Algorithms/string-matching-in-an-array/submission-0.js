class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let substring = [];
        for (let i = 0; i < words.length ; i++) {
            for (let y = 0 ; y < words.length ; y++) {
                if (i !== y && words[y].includes(words[i])){
                    substring.push(words[i])
                    break
                }
            }
        }
        return substring
    }
}
