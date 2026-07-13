---
layout: page
title: Projects
permalink: /projects/
---

<style>
  .project-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }

  .project-card {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
    align-items: stretch !important;
  }

  .project-card .project-info {
    padding: 1.25rem !important;
  }

  .project-card .project-info h2 {
    margin: 0 0 0.75rem !important;
    min-height: 0 !important;
  }

  .project-card .project-info p {
    margin: 0 0 1rem !important;
  }

  @media (max-width: 46em) {
    .project-card {
      grid-template-columns: 1fr !important;
    }
  }
</style>

<div class="project-grid">
  <article class="project-card">
    <a class="project-image project-image-pair" href="{{ "/projects/kakao-ai-agent/" | relative_url }}" aria-label="Read about the Kakao AI Agent Competition project">
      <img src="{{ "/assets/images/projects/AutoReply.drawio.png" | relative_url }}" alt="AutoReply agent pipeline diagram">
      <img src="{{ "/assets/images/projects/AdaptivePush.drawio.png" | relative_url }}" alt="Adaptive Push contextual bandit pipeline diagram">
    </a>
    <div class="project-info">
      <h2><a href="{{ "/projects/kakao-ai-agent/" | relative_url }}">Kakao AI Agent Competition</a></h2>
      <p class="project-subtitle">AutoReply / Adaptive Push Agent</p>
      <p class="project-meta">2nd Place · Dec 2025 · KRW 3,000,000 prize</p>
      <p>Two complementary agents designed to reduce the effort of routine replies and notification fatigue.</p>
    </div>
  </article>

  <article class="project-card">
    <a class="project-image" href="{{ "/projects/lg-cns-optimization/" | relative_url }}" aria-label="Read about the LG CNS Optimization Grand Challenge project">
      <img src="{{ "/assets/images/projects/lg-cns-optimization.png" | relative_url }}" alt="Vehicle loading and unloading sequence across five ports">
    </a>
    <div class="project-info">
      <h2><a href="{{ "/projects/lg-cns-optimization/" | relative_url }}">LG CNS Optimization Grand Challenge</a></h2>
      <p class="project-subtitle">Honorable Mention · Top 10%</p>
      <p class="project-meta">Jul 2025 · KRW 500,000 prize</p>
      <p>A graph-based vehicle stowage solution combining cost modeling, optimal assignment, and adaptive penalties.</p>
    </div>
  </article>

  <article class="project-card">
    <a class="project-image" href="{{ "/projects/signal-free-flow/" | relative_url }}" aria-label="Read about the Signal-Free Flow reinforcement learning project">
      <img src="{{ "/assets/images/projects/signal-free-flow-poster.png" | relative_url }}" alt="Signal-Free Flow reinforcement learning project poster">
    </a>
    <div class="project-info">
      <h2><a href="{{ "/projects/signal-free-flow/" | relative_url }}">Signal-Free Flow</a></h2>
      <p class="project-subtitle">Reinforcement Learning Course Project</p>
      <p>A safety-aware PPO controller for reducing congestion at a fully autonomous four-way intersection.</p>
    </div>
  </article>
</div>
