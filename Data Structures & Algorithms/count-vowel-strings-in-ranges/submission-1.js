class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
        const analyzedWords = words.map((w)=> vowels.has(w[0]) && vowels.has(w[w.length -1]))

        let ans = []
        queries.forEach((q, i) => {
            const filteredAnalyzedWords = analyzedWords.slice(q[0], q[1] + 1)
            ans[i] = filteredAnalyzedWords.filter((l) => l === true).length
        })
        return ans
    }
}
