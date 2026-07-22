---
title: "About"
permalink: "/about/"
layout: page
---

## Joonsup Kim Academic Homepage

This repository contains a lightweight Jekyll homepage for PhD admissions.

The homepage includes:

- About
- Research
- Education
- Projects & Honors
- Teaching
- CV

## Main Files

- `index.html`: homepage content
- `_config.yml`: site title, navigation, and external links
- `assets/css/index.sass`: homepage-specific styling
- `_sass/basic.sass`: base typography
- `assets/images/projects/autoreply-agent.png`: Kakao project diagram

## CV

When the final CV PDF is ready, place it at:

```text
assets/files/cv.pdf
```

Then update the CV link in `index.html`.

## Local Preview

If Ruby and Bundler are installed:

```sh
bundle install
bundle exec jekyll serve
```
