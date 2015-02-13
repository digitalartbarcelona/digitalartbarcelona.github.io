---
layout: page
title: Peces / Artworks
category: mur-diari
---

<div class="countdown text-center"></div>

<div class="posts clearfix">
  {% for post in site.categories['artwork'] %}
  <div class="post">

    {{ post.excerpt }}    

  <h2 class="post-title">
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <p class="text-center"><a href="{{ post.url }}"><i class="fa fa-lg fa-plus-square-o"></i></a></p>
    </div>
  {% endfor %}
</div>