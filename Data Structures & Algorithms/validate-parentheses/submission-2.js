class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const myMap = new Map([
        ["(", ")"],
        ["{", "}"],
        ["[", "]"],
        ]);
        const openingRef = ["(", "{", "["];
        let openingList = [];
        let isOpening = true;
        for (let i = 0; i < s.length; i++) {
            if (!openingRef.includes(s[i])) {
                isOpening = false;
                if (s[i] !== myMap.get(openingList.at(openingList.length-1))) {
                    return false
                } else {
                    openingList.pop();
                }
            } else {
                isOpening = true;
                openingList.push(s[i]);
            }
        } 
        if (openingList.length > 0) {
            return false
        }
        return true
    }
}
