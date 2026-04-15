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

- Time complexity: O(n)
- Space complexity: O(n)

## Interview Statement:
I'd solve this problem using prefix and suffix products.

I'd compute a prefix product for each element - everything before it, and a suffix product - everything after it. Then I multiply these two for each index in the result array. This ensures we get the product of all elements except the current one wihout using division.

## Solution
### c++

```c++
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> result(n, 1);

        int left_product = 1;
        for (int i = 0; i < n; i++) {
            result[i] = left_product;
            left_product *= nums[i];
        }

        int right_product = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= right_product;
            right_product *= nums[i];
        }

        return result;
    }
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