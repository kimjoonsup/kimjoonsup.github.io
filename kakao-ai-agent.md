---
layout: page
title: Kakao AI Agent Competition
permalink: /projects/kakao-ai-agent/
---

![AutoReply agent pipeline diagram]({{ "/assets/images/projects/AutoReply.drawio.png" | relative_url }})

**AutoReply Agent · 2nd Place · KRW 3,000,000 prize · Dec 2025**

Designed an AI agent workflow for context-aware message reply generation. The system first extracts persona information from group chat data, then uses a response-decision step to avoid replying to messages that require direct user intervention. For appropriate messages, it combines the new text with persona data and prompts an LLM to produce recommended responses.

- **Problem:** Generate useful automated replies while preserving user control when manual intervention is needed.
- **Approach:** Persona extraction, response-appropriateness filtering, and LLM-based reply recommendation.
- **Outcome:** 2nd place in the Kakao AI Agent Competition.

[← Back to Projects]({{ "/projects/" | relative_url }})
