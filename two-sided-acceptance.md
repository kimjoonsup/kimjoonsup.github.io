---
layout: page
title: "Learning to Match with Two-Sided Acceptance"
permalink: /research/two-sided-acceptance/
---

**Dissertation · M.S. thesis in progress · Working title**

**Advisor:** [Prof. Min-hwan Oh](https://minoh.io)

## Overview

Motivated by ride-hailing, this thesis studies how to learn matching decisions when both sides must accept a proposed match. I am developing a bandit algorithm that learns both sides’ preferences from sequential feedback to increase the number of mutually accepted matches.

## Approach

The work combines **bilinear matching bandits** with **maximum-weight matching**. Preference learning uses feedback from successive interactions, while the matching step uses the learned information to select assignments. The central challenge is to learn preferences while making matching decisions over a limited number of rounds.

## Theoretical Result

The work establishes an expected cumulative regret bound in terms of the number of rounds, market size, and context-feature dimension. This provides a theoretical characterization of the algorithm’s performance as it learns from sequential feedback.

[← Back to Research]({{ "/research/" | relative_url }})
