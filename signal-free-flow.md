---
layout: page
title: "Signal-Free Flow: Reinforcement Learning for Autonomous Intersections"
permalink: /projects/signal-free-flow/
---

![Signal-Free Flow reinforcement learning project poster]({{ "/assets/images/projects/signal-free-flow-poster.png" | relative_url }})

**Reinforcement Learning Course Final Project · Team Project**

Signal-Free Flow studies whether reinforcement learning can improve traffic flow at a fully autonomous four-way intersection. We built a custom simulator and compared fixed-time signal control, cooperative rule-based control, and a decentralized PPO policy.

## Approach

Pure reinforcement learning was highly sensitive to reward scaling: aggressive policies collided, while overly conservative policies stopped before entering the intersection. To make learning safer and more stable, we combined PPO with:

- rule-based safety knowledge for safe distance, conflict detection, and yielding;
- a behavior-cloning warm start from safe driving examples;
- a runtime safety shield that overrides unsafe actions during PPO fine-tuning.

## Results

The PPO controller reduced waiting time while increasing throughput across traffic levels. The project’s central finding is that reinforcement learning works best here when explicit safety mechanisms provide a reliable starting point and guard unsafe actions, allowing PPO to focus on traffic efficiency.

[← Back to Projects]({{ "/projects/" | relative_url }})
