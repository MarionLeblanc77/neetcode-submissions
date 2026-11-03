class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /\W/gi;
        const newS = s.toLowerCase().replaceAll(regex, '');

        return newS === [...newS].toReversed().toString().replaceAll(',', '')
    }
}
