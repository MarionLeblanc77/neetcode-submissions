class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const possibleProfits = [0];
        for (let i = 0; i < prices.length; i++) {
            for (let y = i+1; y < prices.length; y++) {
                possibleProfits.push(prices[y] - prices[i] > 0 ? prices[y] - prices[i] : 0);
            }
        }
        return possibleProfits.toSorted((a, b) => b - a)[0]
    }
}
