---
layout: page
title: Qui som? / Who are we?
category: mur
---

<div class="posts">
  {% for post in site.categories['patrocinadors'] reversed %}
  <div class="post">

    {{ post.excerpt }}
    
    <h2 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>

  </div>
  {% endfor %}
</div>