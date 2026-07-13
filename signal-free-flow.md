---
layout: page
title: "Signal-Free Flow: Reinforcement Learning for Autonomous Intersections"
permalink: /projects/signal-free-flow/
---

![Average waiting time and throughput for fixed-signal, rule-based, and PPO controllers across traffic levels]({{ "/assets/images/projects/signal-free-flow-results.png" | relative_url }})

**Reinforcement Learning Course Final Project · Team Project**

Signal-Free Flow studies whether cooperative autonomous-driving policies can replace traffic lights at a four-way intersection. We built a custom simulator and compared a fixed-time signal controller, a cooperative rule-based controller, and a decentralized PPO policy under low-, medium-, and high-traffic conditions.

## Approach

Each active vehicle shares a PPO policy and chooses among deceleration, maintaining speed, and acceleration from a 54-dimensional local observation. Because reward design alone produced policies that either collided or became overly conservative, we introduced three safety priors:

- a rule-based controller encoding car-following and conflict-priority rules;
- behavior-cloning warm start from approximately 6,000 expert state-action pairs;
- a runtime safety shield that replaces unsafe actions before execution.

## Results

The safety-aware PPO controller completed evaluation without collisions and outperformed both baselines on waiting time, delay, throughput, and completion rate across all three traffic levels. Compared with the fixed-time signal, it reduced average delay by **80%, 69%, and 38%** in low-, medium-, and high-traffic settings, respectively, while increasing throughput by approximately **2.8–3.4×**.

The ablation study also showed that safety did not emerge reliably from reward tuning alone: removing the runtime shield caused every evaluation episode to end in a collision. The project therefore highlights a practical division of labor—explicit safety mechanisms define the admissible behavior, while reinforcement learning optimizes efficiency within that safe region.

[View the full project report (PDF)]({{ "/assets/files/signal-free-flow-report.pdf" | relative_url }})

[← Back to Projects]({{ "/projects/" | relative_url }})
