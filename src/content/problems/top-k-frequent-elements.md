---
title: "Top K Frequent Elements"
leetcodeId: 347
difficulty: "Medium"
topics: ["Array", "Hash Table", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Bucket Sort"]
status: "done"
summary: "Count frequencies with a hash map, then keep the top k elements using a min-heap."
createdAt: "2026-03-30"
updatedAt: "2026-03-30"
---

## Problem summary

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

You may return the answer in any order.

## Brute-force idea

Count the frequency of each number, then sort all unique numbers by frequency in descending order, and take the first `k`.

- Time complexity: O(n + m log m), where `m` is the number of unique elements
- Space complexity: O(m)

## Optimized idea

Use a hash map to count frequencies, then maintain a min-heap of size `k`.

- First, use an `unordered_map` to store how many times each number appears
- Then iterate through the map and push `(number, frequency)` into a min-heap
- If the heap size becomes larger than `k`, pop the top element
- This way, the heap always keeps the `k` most frequent elements seen so far

At the end, the heap contains exactly the top `k` frequent elements.

- Time complexity: O(n + m log k)
- Space complexity: O(m + k)

## Interview Statement:

I'd first use a hash map to count the frequency of each number.

After that, instead of putting everything into a big max-heap, I use a min-heap of size `k`. The reason is that I only care about the top `k` frequent elements, not the full ordering of all unique elements.

With a min-heap, the smallest frequency among the current top `k` stays at the top. So whenever I insert a new element and the heap size becomes greater than `k`, I can immediately remove the least frequent one. That means the heap always stores only the best `k` candidates.

This is better than using a max-heap here because a max-heap would usually store all `m` unique elements and cost `O(m log m)` overall, while the min-heap keeps the heap size bounded by `k`, giving `O(m log k)`. When `k` is much smaller than the number of unique elements, this is more efficient.

## Solution

### c++

```c++
class Solution {
    class comparison{
    public:
        bool operator()(const pair<int, int>& a, const pair<int, int>& b) {
            // if return true: a has lower priority than b, b goes to the top
            // min heap
            return a.second > b.second;
        }
    };

public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> map;
        for(int i = 0; i < nums.size();i++) {
            map[nums[i]]++;
        }
        
        priority_queue<pair<int, int>, vector<pair<int, int>>, comparison> que;

        for(unordered_map<int, int>::iterator it = map.begin(); it != map.end(); it++) {
            que.push(*it);
            if (que.size() > k) que.pop();
        } 
        vector<int> result(k);
        for(int i = k -1; i >=0; i--) {
            result[i] = que.top().first;
            que.pop();
        }
        return result;
    }
};
```