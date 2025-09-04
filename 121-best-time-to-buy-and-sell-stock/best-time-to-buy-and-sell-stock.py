class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """

        buy = prices[0]
        profit = 0

        for i in range(len(prices)):
            if buy > prices[i]:
                buy = prices[i]
            
            if profit < prices[i] - buy:
                profit = prices[i] - buy
        
        return profit
        