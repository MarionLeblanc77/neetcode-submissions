class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let substring = [];
        words.sort((a, b)=> a.length - b.length)
        for (let i = 0; i < words.length - 1 ; i++) {
            for (let y = i + 1 ; y < words.length ; y++) {
                if (words[y].includes(words[i])){
                    substring.push(words[i])
                    break
                }
            }
        }
        return substring
    }
}
