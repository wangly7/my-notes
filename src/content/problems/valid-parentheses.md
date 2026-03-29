---
title: "Valid Parentheses"
slug: "valid-parentheses"
leetcodeId: 20
difficulty: "Easy"
topics: ["Stack", "String"]
status: "done"
summary: "Use a stack to match the most recent unmatched opening bracket."
createdAt: "2026-03-28"
updatedAt: "2026-03-28"
---

## Core idea

This is a classic stack problem.

- push opening brackets onto the stack
- when seeing a closing bracket, check whether it matches the top of the stack

## Python template

```python
def isValid(s):
    pairs = {')': '(', ']': '[', '}': '{'}
    stack = []

    for ch in s:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()

    return not stack