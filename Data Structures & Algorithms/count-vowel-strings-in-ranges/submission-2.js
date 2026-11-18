class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
        let prefix = [0]
        for(let i = 0 ; i < words.length ; i++){
            prefix[i+1] = prefix[i]
            if(vowels.has(words[i][0]) && vowels.has(words[i][words[i].length -1])) {
                prefix[i+1] ++
            }
        }
        let ans = []
        queries.forEach((q, i) => {
            ans[i] = prefix[q[1] + 1] - prefix[q[0]]
        })
        return ans
    }
}
