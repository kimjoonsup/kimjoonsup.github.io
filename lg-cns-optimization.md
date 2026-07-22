---
layout: page
title: LG CNS Optimization Grand Challenge
permalink: /projects/lg-cns-optimization/
---

![Vehicle loading and unloading sequence across five ports]({{ "/assets/images/projects/lg-cns-optimization.png" | relative_url }})

**Honorable Mention · Top 10% finish · Jul 2025**

## Problem

The challenge was to plan how vehicles are loaded, unloaded, and repositioned as a carrier visits multiple ports. The deck is represented as a graph, with each node holding one vehicle and node 0 serving as the only entrance. Every vehicle must reach its destination port along an unobstructed path while minimizing total handling cost, including the costly rehandling of blocking vehicles.

## Approach

I defined a cost for every vehicle–node pair using features such as distance from the entrance, graph centrality, destination timing, and the likelihood that the node would block a future route. The Hungarian algorithm then found the minimum-cost assignment of vehicles to available nodes. I iteratively tuned the weights and nonlinear parameters through evolutionary and local search. When a vehicle had to be moved because it blocked another vehicle, I added penalties to that vehicle–node pair and to nodes on problematic paths, discouraging the next iteration from repeating the same placement.

[← Back to Projects]({{ "/projects/" | relative_url }})
