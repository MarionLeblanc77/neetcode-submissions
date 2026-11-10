class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let tPointer = 0;
        let maxSequence = 0;
        for (let i in s) {
            if (s[i] == t[tPointer]) {
                maxSequence ++
                tPointer ++
            }

        }
        return t.length - maxSequence
    }
}
