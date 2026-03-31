---
title: "Intersection of Two Arrays"
leetcodeId: 349
difficulty: "Easy"
topics: ["Array", "Hash Table"]
status: "done"
summary: "Use hash sets to efficiently compute the unique intersection of two arrays."
createdAt: "2026-03-30"
updatedAt: "2026-03-30"
---

## Problem summary

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique, and you may return the result in any order.

## Brute-force idea

Compare every element in `nums1` with every element in `nums2` and collect matches, while ensuring uniqueness.

- Time complexity: O(n * m)
- Space complexity: O(1) (excluding output)

## Optimized idea

Use hash sets to remove duplicates and enable fast lookup.

Steps:

- convert both arrays into sets to eliminate duplicates  
- iterate through one set and check whether each element exists in the other set  
- collect common elements into the result  

This reduces lookup time to O(1) on average.

## Interview Statement:
I'd solve this problem using hash sets.

First, I convert both arrays into sets to remove duplicates. Then, I iterate through one set and check whether each element exists in the other set. If it does, I add it to the result. This ensures uniqueness and gives an overall time complexity of O(n + m).

## Solution
### c++

```c++
class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> result;
        unordered_set<int> numSet(nums1.begin(), nums1.end());
        
        for(int i = 0; i < nums2.size(); i++) {
            if (numSet.find(nums2[i]) != numSet.end()) {
                result.insert(nums2[i]);
            }
        }

        return vector<int>(result.begin(), result.end());
        
    }
};
```

### python
```python
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1_set = set(nums1)
        nums2_set = set(nums2)
        return list(nums1_set & nums2_set)
```