---
title: "Product of Array Except Self"
leetcodeId: 238
difficulty: "Medium"
topics: ["Array", "Prefix Sum"]
status: "done"
summary: "Use prefix and suffix products to compute the result in O(n) time without division."
createdAt: "2026-03-31"
updatedAt: "2026-03-31"
---

## Problem summary

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

## Brute-force idea

For each index, multiply all elements except itself.

- Time complexity: O(n^2)
- Space complexity: O(1)

## Optimized idea

Use prefix and suffix products.

First, compute the product of all elements to the left of each index.  
Then, multiply it with the product of all elements to the right.

## Interview Statement:
I'd solve this problem using prefix and suffix products.

First, I iterate from left to right and store the product of all elements before each index. Then I iterate from right to left while maintaining a running suffix product, and multiply it into the result array. This way, each position gets the product of all elements except itself, without using division.

## Solution
### c++

```c++
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> pre(nums.size(), 1);
        vector<int> suff(nums.size(), 1);
        vector<int> result;

        for (int i = 1; i < nums.size(); i++) {
            pre[i] *=  pre[i-1] * nums[i-1];
        }

        for (int i = nums.size()- 2; i >= 0; i--) {
            suff[i] *= suff[i+1] * nums[i+1];
        }
        
        for (int i = 0; i < nums.size(); i++) {
            result.push_back(pre[i] * suff[i]);
        }
        return result;
    }
};
```

### python
```python
def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n

    for i in range(1, n):
        res[i] = res[i - 1] * nums[i - 1]

    right = 1
    for i in range(n - 1, -1, -1):
        res[i] *= right
        right *= nums[i]

    return res
```