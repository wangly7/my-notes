---
title: "Valid Anagram"
leetcodeId: 242
difficulty: "Easy"
topics: ["Hash Table", "String", "Sorting"]
status: "done"
summary: "Use a frequency counter (array or hashmap) to compare character counts."
createdAt: "2026-03-30"
updatedAt: "2026-03-30"
---
## Problem summary

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.

An anagram means both strings contain the same characters with the same frequencies.

## Brute-force idea

Sort both strings and compare them.

- Time complexity: O(n log n)
- Space complexity: O(1) or O(n) depending on sorting

## Optimized idea

Use a frequency counter to track character counts.

As we iterate through both strings:

- increment counts for characters in `s`  
- decrement counts for characters in `t`  
- if all counts are zero → anagram  

## Interview Statement:
I'd solve this problem using a frequency counter.

First, I check if the lengths of the two strings are equal—if not, they can't be anagrams. Then I use an array (or hashmap) to count character frequencies. I increment counts for characters in `s` and decrement for `t`. If all counts end up zero, the strings are anagrams. This runs in O(n) time.

## Solution

### c++

```c++
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) return false;

        vector<int> count(128, 0);

        for (char c : s) count[c - 'a']++;
        for (char c : t) count[c - 'a']--;

        for (int x : count) {
            if (x != 0) return false;
        }
        return true;
    }
};
```

### python
```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        count = [0] * 128

        for c in s:
            count[ord(c) - ord('a')] += 1

        for c in t:
            count[ord(c) - ord('a')] -= 1

        return all(x == 0 for x in count)
```