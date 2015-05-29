---
layout: page
title: Tallers / Workshops
category: mur
---

<div class="posts">
  {% for post in site.categories['tallers'] reversed %}
  <div class="post">
  <h2 class="post-title">
    <a href="{{ post.url }}">
      {{ post.title }}
    </a>
    </h2>
    {{ post.excerpt }}
  </div>
  {% endfor %}
</div>