---
layout: page
title: Projects
permalink: /projects/
page_class: collection-page projects-page
---

<div class="project-grid">
  <a class="project-card" href="{{ "/projects/grover-nonogram/" | relative_url }}" aria-labelledby="project-title-grover-nonogram">
    <div class="project-image">
      <img src="{{ "/assets/images/projects/grover-nonogram-cover.png" | relative_url }}?v={{ site.github.build_revision }}" alt="Title slide of Solving a 3×3 Nonogram with Grover’s Algorithm">
    </div>
    <div class="project-info">
      <p class="project-meta"><span>Quantum Computing</span><span aria-hidden="true">·</span><time datetime="2026-11">Nov 2026</time></p>
      <h2 id="project-title-grover-nonogram">Solving a 3×3 Nonogram with Grover’s Algorithm</h2>
      <p>A 12-qubit circuit that searches 512 possible boards using a reversible constraint-counting oracle and amplitude amplification.</p>
    </div>
  </a>

  <a class="project-card" href="{{ "/projects/kakao-ai-agent/" | relative_url }}" aria-labelledby="project-title-kakao-ai-agent">
    <div class="project-image project-image-pair">
      <img src="{{ "/assets/images/projects/AutoReply.drawio.png" | relative_url }}" alt="AutoReply agent pipeline diagram">
      <img src="{{ "/assets/images/projects/AdaptivePush.drawio.png" | relative_url }}" alt="Adaptive Push contextual bandit pipeline diagram">
    </div>
    <div class="project-info">
      <p class="project-meta"><span>AI Agent Competition</span><span aria-hidden="true">·</span><time datetime="2025-12">Dec 2025</time></p>
      <h2 id="project-title-kakao-ai-agent">Kakao AI Agent Competition</h2>
      <p>Awarded 2nd place for AutoReply and Adaptive Push, two agents that reduce routine reply effort and notification fatigue.</p>
    </div>
  </a>

  <a class="project-card" href="{{ "/projects/lg-cns-optimization/" | relative_url }}" aria-labelledby="project-title-lg-cns-optimization">
    <div class="project-image">
      <img src="{{ "/assets/images/projects/lg-cns-optimization.png" | relative_url }}" alt="Vehicle loading and unloading sequence across five ports">
    </div>
    <div class="project-info">
      <p class="project-meta"><span>Optimization Competition</span><span aria-hidden="true">·</span><time datetime="2025-07">Jul 2025</time></p>
      <h2 id="project-title-lg-cns-optimization">LG CNS Optimization Grand Challenge</h2>
      <p>An Honorable Mention (top 10%) vehicle stowage solution combining cost modeling, optimal assignment, and adaptive penalties.</p>
    </div>
  </a>

  <a class="project-card" href="{{ "/projects/signal-free-flow/" | relative_url }}" aria-labelledby="project-title-signal-free-flow">
    <div class="project-image">
      <img src="{{ "/assets/images/projects/signal-free-flow-poster.png" | relative_url }}" alt="Signal-Free Flow reinforcement learning project poster">
    </div>
    <div class="project-info">
      <p class="project-meta"><span>Reinforcement Learning</span><span aria-hidden="true">·</span><time datetime="2026-06">Jun 2026</time></p>
      <h2 id="project-title-signal-free-flow">Signal-Free Flow</h2>
      <p>A safety-aware PPO controller for reducing congestion at a fully autonomous four-way intersection.</p>
    </div>
  </a>
</div>
