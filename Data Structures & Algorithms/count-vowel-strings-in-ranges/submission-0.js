class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        const analyzedWords = words.map((w)=> vowels.includes(w[0]) && vowels.includes(w[w.length -1]))
        
        let ans = []
        queries.forEach((q, i) => {
            const filteredAnalyzedWords = analyzedWords.slice(q[0], q[1] + 1)
            ans[i] = filteredAnalyzedWords.filter((l) => l === true).length
        })
        return ans
    }
}
