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

## Python template

```python
def twoSum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i