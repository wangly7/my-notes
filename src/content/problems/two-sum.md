---
title: "Two Sum"
leetcodeId: 1
difficulty: "Easy"
topics: ["Array", "Hash Table"]
status: "done"
summary: "Use a hash map to reduce the lookup from O(n^2) to O(n)."
createdAt: "2026-03-28"
updatedAt: "2026-03-28"
---

## Problem summary

Given an array of integers and a target value, return the indices of two numbers such that they add up to the target.

## Brute-force idea

Use two nested loops to test every pair.

- Time complexity: O(n^2)
- Space complexity: O(1)

## Optimized idea

Scan the array once and store previously seen numbers in a hash map.

For each current value `x`:

- the needed value is `target - x`
- if that value already exists in the map, return the pair
- otherwise store the current value and its index

## Interview Statement:
I'd solve this problem using a hash map in one pass.

As I iterate the array, I check whether the current number already exists as a key in the map. In this approach, the key represents the complement I'm waiting for, and the value store the index of the number that needs it. If the current number matches a key, I can immediately return the stored index and the current index.

## Solution
### c++

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        std::unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            auto iter = map.find(nums[i]);
            if (iter== map.end()) {
                map.insert(pair(target - nums[i], i));
            }else{
                return {iter->second, i};
            }
        }
        return {};
    }
};
```

### python
```python
def twoSum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i
```
