---
title: "Certifications"
layout: archive
permalink: /certifications/
has_children: true
published: true
---

{% assign children = site.pages | where: "parent", "Certifications" %}
{% for child in children %}
  - [{{ child.title }}]({{ child.url }})
{% endfor %}
