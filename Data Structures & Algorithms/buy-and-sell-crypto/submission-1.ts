class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let bestBuyYet:number = Infinity
        let profitYet:number = null
    
        for (let i = 0; i<prices.length; i++){
           const current = prices[i]
           if(current < bestBuyYet)  bestBuyYet = current
           profitYet = Math.max(current- bestBuyYet,profitYet)

        }
        return profitYet
    }
}
