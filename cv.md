---
layout: page
title: CV
permalink: /cv/
---

<style>
  .cv-preview {
    display: block !important;
    width: calc(100vw - 3rem) !important;
    max-width: 72rem !important;
    height: 88vh !important;
    margin: 1rem 0 1rem 50% !important;
    transform: translateX(-50%) !important;
    border: 1px solid #848796 !important;
    border-radius: 0.35rem !important;
  }

  @media (max-width: 46em) {
    .cv-preview {
      width: calc(100vw - 2rem) !important;
      height: 85vh !important;
    }
  }
</style>

<iframe class="cv-preview" src="{{ "/assets/files/cv.pdf" | relative_url }}?v={{ site.github.build_revision }}#view=FitH" title="Joonsup Kim CV preview"></iframe>

[Open or download my CV (PDF)]({{ "/assets/files/cv.pdf" | relative_url }})

[Contact me by email](mailto:dankim99@snu.ac.kr)
