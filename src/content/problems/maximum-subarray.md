---
title: "Maximum Subarray"
leetcodeId: 53
difficulty: "Medium"
topics: ["Array", "Dynamic Programming"]
status: "done"
summary: "Use Kadane's algorithm to track the maximum subarray sum in O(n) time."
createdAt: "2026-03-31"
updatedAt: "2026-03-31"
---

## Problem summary

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum, and return its sum.

## Brute-force idea

Check all possible subarrays and compute their sums.

- Time complexity: O(n^2)
- Space complexity: O(1)

## Optimized idea

Use dynamic programming (Kadane's algorithm).

At each position, decide whether to extend the previous subarray or start a new one.

## Interview Statement:
I'd solve this problem using Kadane's algorithm.

As I iterate through the array, I keep track of the maximum subarray sum ending at the current position. For each element, I decide whether to continue the previous subarray or start a new one from the current element. I also maintain a global maximum to store the best result seen so far.

## Solution
### c++

```c++
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int res = nums[0];
        int total = 0;

        for (int i = 0; i < nums.size(); i++) {
            if (total < 0) total = 0;

            total += nums[i];
            res = max(res, total);
        }
        return res;
    }
};
```

### python
```python
def maxSubArray(nums):
    cur = nums[0]
    res = nums[0]

    for i in range(1, len(nums)):
        cur = max(nums[i], cur + nums[i])
        res = max(res, cur)

    return res
```