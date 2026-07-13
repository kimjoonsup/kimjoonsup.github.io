---
layout: page
title: Kakao AI Agent Competition
permalink: /projects/kakao-ai-agent/
---

**AutoReply Agent / Adaptive Push · 2nd Place · Dec 2025 · KRW 3,000,000 prize**

This project addressed two everyday communication problems: the effort required to send routine replies and the distraction caused by treating every notification as equally important. We implemented two complementary agents and validated their core workflows through the Telegram API and MCP-based tools.

## AutoReply Agent

![AutoReply agent pipeline diagram]({{ "/assets/images/projects/AutoReply.drawio.png" | relative_url }})

AutoReply reduces the effort of composing routine messages without allowing AI to intervene in every conversation. It first analyzes past group-chat history to extract the user’s language habits and structure them as persona data. When a new message arrives, the agent decides whether it is suitable for a simple automated response or requires direct user intervention. Only suitable messages are passed to the LLM, which uses the conversation context and persona data to propose three personalized reply candidates for one-click sending or further editing.

## Adaptive Push

![Adaptive Push contextual bandit pipeline diagram]({{ "/assets/images/projects/AdaptivePush.drawio.png" | relative_url }})

Adaptive Push reduces notification fatigue while preserving important connections. A contextual bandit uses message and sender embeddings to estimate the expected reward of two actions—push or no push—and chooses between them. User reactions provide online feedback that updates the model, allowing notification priorities to adapt to individual preferences and changes over time rather than relying on fixed rules.

The prototype used message content, sender identity, contact frequency, and average response speed as contextual information. Its reward design reflected whether pushed messages were opened and whether muted messages were checked later, balancing unnecessary interruptions against the risk of missing important communication.

[← Back to Projects]({{ "/projects/" | relative_url }})
