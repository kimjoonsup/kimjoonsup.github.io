---
layout: page
title: "Signal-Free Flow: Reinforcement Learning for Autonomous Intersections"
permalink: /projects/signal-free-flow/
---

![Behavior cloning warm start from rule-based driving data]({{ "/assets/images/projects/behavior-cloning-warm-start.png" | relative_url }})

**Reinforcement Learning Course Final Project · Team Project**

Signal-Free Flow studies whether reinforcement learning can improve traffic flow at a fully autonomous four-way intersection. We built a custom simulator and compared fixed-time signal control, cooperative rule-based control, and a decentralized PPO policy.

## Approach

Pure reinforcement learning was highly sensitive to reward scaling: aggressive policies collided, while overly conservative policies stopped before entering the intersection. We therefore separated safety from efficiency and trained the controller in two stages.

### Behavior-Cloning Warm Start

A rule-based controller generated about 6,000 observation–action pairs across low-, medium-, and high-traffic conditions. We pretrained the policy for four epochs to imitate its decelerate, maintain-speed, and accelerate decisions. This gave PPO a safe initial driving policy instead of requiring it to discover basic following, conflict-avoidance, and yielding behavior through unsafe random exploration.

### PPO Fine-Tuning with a Safety Shield

![PPO fine-tuning with a runtime safety shield]({{ "/assets/images/projects/ppo-safety-shield.png" | relative_url }})

During PPO fine-tuning, a runtime safety shield inspected each action before it reached the simulator. Actions that violated the safe time gap or failed to yield to a higher-priority conflicting vehicle were replaced with deceleration or speed maintenance. PPO learned from the action actually executed, while an 80-episode curriculum gradually increased traffic density. This allowed the policy to focus on reducing delay and improving throughput within a structurally safe operating region.

## Results

The PPO controller reduced waiting time while increasing throughput across traffic levels. The project’s central finding is that reinforcement learning works best here when explicit safety mechanisms provide a reliable starting point and guard unsafe actions, allowing PPO to focus on traffic efficiency.

[← Back to Projects]({{ "/projects/" | relative_url }})
