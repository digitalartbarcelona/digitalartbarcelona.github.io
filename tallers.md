---
layout: page
title: Tallers / Workshops / Talleres
category: mur
class: ''
og: true
og-type: article
---

##(... i activitats paral·leles)

<div class="posts">
  {% for post in site.categories['tallers'] reversed %}
  <div class="post">
  <h3 class="post-title">
    <a href="{{ post.url }}">
      {{ post.title }}
    </a>
    </h3>
    {{ post.excerpt }}
  </div>
  {% endfor %}
</div>