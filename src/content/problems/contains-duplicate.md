---
title: "Contains Duplicate"
leetcodeId: 217
difficulty: "Easy"
topics: ["Array", "Hash Table"]
status: "done"
summary: "Use a hash set to detect duplicates in O(n) time."
createdAt: "2026-03-30"
updatedAt: "2026-03-30"
---

## Problem summary

Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Brute-force idea

Compare every pair of elements using two nested loops.

- Time complexity: O(n^2)
- Space complexity: O(1)

## Optimized idea

Use a hash set to track elements we've already seen.

As we iterate through the array:

- if the current element is already in the set → duplicate found → return true  
- otherwise, add it to the set  

If we finish scanning without finding duplicates, return false.

- Time complexity: O(n)
- Space complexity: O(n)

## Interview Statement:
I'd solve this problem using a hash set in one pass.

As I iterate through the array, I check whether the current element has already exists in the hash set. If it has, that means a duplicate exists and I can return true immediately. Otherwise, I insert it into the set and continue.

## Solution
### c++

```c++
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;
        for (int x : nums) {
            if (seen.count(x)) {
                return true;
            }
            seen.insert(x);
        }
        return false;
    }
};
```
### python
```python
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set
        for n in nums:
            if n in seen:
                return True
            else:
                seen.add(n)
        return False
```