---
title: "Python BFS Template"
language: "python"
tags: ["bfs", "graph", "tree", "template"]
summary: "A reusable BFS template using deque."
createdAt: "2026-03-28"
updatedAt: "2026-03-28"
---

## BFS template

```python
from collections import deque

def bfs(start):
    q = deque([start])
    visited = {start}

    while q:
        node = q.popleft()
        for nxt in graph[node]:
            if nxt not in visited:
                visited.add(nxt)
                q.append(nxt)