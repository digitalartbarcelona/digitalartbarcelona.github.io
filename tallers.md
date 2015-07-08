---
layout: page
title: Tallers (... i activitats paral·leles) / Workshops / Talleres
category: mur
class: ''
og: true
og-type: article
---


<div class="posts">
  {% for post in site.categories['tallers'] %}
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