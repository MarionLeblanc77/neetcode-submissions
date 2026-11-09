class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const words = s.split(" ");
        let last = ""
        while (last === "") {
            last = words.pop()
        }
        return last.length

    }
}
