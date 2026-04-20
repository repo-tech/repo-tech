class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if (prices.size() < 2) return 0;

        int minPrice = prices[0];  
        int maxProfit = 0;    
        for (int i = 1; i < prices.size(); i++) {
            int currentProfit = prices[i] - minPrice;
            
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }

            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
        }
        return maxProfit;
    }
};
