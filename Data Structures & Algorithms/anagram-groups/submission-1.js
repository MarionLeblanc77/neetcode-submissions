class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let set = {}

        function add(value){
            const letters = [...value].sort()
            const key = letters.join('')
            if (!set[key]) {
                set[key] = [value]
                return
            } 
            set[key].push(value)
        }

        for (let i = 0; i < strs.length ; i++){
            add(strs[i])
        }

        return Object.values(set)
    }
}
