---
title: "Best Time to Buy and Sell Stock"
leetcodeId: 121
difficulty: "Easy"
topics: ["Array", "Dynamic Programming", "Greedy"]
status: "done"
summary: "Track the minimum price so far and compute the maximum profit in one pass."
createdAt: "2026-03-31"
updatedAt: "2026-03-31"
---

## Problem summary

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve. If no profit can be made, return 0.

## Brute-force idea

Try all pairs of days (buy and sell) and compute the profit.

- Time complexity: O(n^2)
- Space complexity: O(1)

## Optimized idea

Track the minimum price so far and compute profit at each step.

At each day, calculate the profit if we sell today, and update the maximum profit.

## Interview Statement:
I'd solve this problem using greedy approach.

As I iterate through the array, I keep track of the minimum price seen so far. For each price, I compute the profit if I sell at that day by subtracting the minimum price. I update the maximum profit accordingly. This ensures I always buy before I sell and get the best possible result.

## Solution
### c++

```c++
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = prices[0];
        int res = 0;

        for (int i = 1; i < prices.size(); i++) {
            res = max(res, prices[i] - minPrice);
            minPrice = min(minPrice, prices[i]);
        }

        return res;
    }
};
```

### python
```python
def maxProfit(prices):
    min_price = prices[0]
    res = 0

    for i in range(1, len(prices)):
        res = max(res, prices[i] - min_price)
        min_price = min(min_price, prices[i])

    return res
```