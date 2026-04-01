---
title: "Maximum Product Subarray"
leetcodeId: 152
difficulty: "Medium"
topics: ["Array", "Dynamic Programming"]
status: "done"
summary: "Track both the maximum and minimum product ending at each position in one pass."
createdAt: "2026-03-31"
updatedAt: "2026-03-31"
---

## Problem summary

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

## Brute-force idea

Check all possible subarrays and compute their products.

- Time complexity: O(n^2)
- Space complexity: O(1)

## Optimized idea

Track both the maximum product and minimum product ending at the current position.

This is because a negative number can turn a small negative product into a large positive product.

## Interview Statement:
I'd solve this problem in one pass by tracking both the maximum and minimum product ending at the current position.

As I iterate through the array, I update the current maximum and current minimum because multiplying by a negative number can swap them. For each element, I consider three cases: starting a new subarray at the current number, extending the previous maximum product, or extending the previous minimum product. I keep a global maximum to store the best product seen so far.

## Solution
### c++

```c++
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int res = nums[0];
        int curMax = 1;
        int curMin = 1;

        for (int n : nums) {
            int temp = curMax * n;
            curMax = max({n, temp, curMin * n});
            curMin = min({n, temp, curMin * n});
            res = max(res, curMax);
        }

        return res;
    }
};
```

### python
```python
def maxProduct(nums):
    res = nums[0]
    cur_max = 1
    cur_min = 1

    for n in nums:
        temp = cur_max * n
        cur_max = max(n, temp, cur_min * n)
        cur_min = min(n, temp, cur_min * n)
        res = max(res, cur_max)

    return res
```