---
layout: page
title: Arxiu 1a mostra 2014 / Archive 1st exhition 2014 / Archivo 1ª muestra 2014
category: mur-diari
---

<div class="posts clearfix">
  {% for post in site.categories['artwork2014'] %}
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
<div id="video-show" class="related">
<figure class="text-center">
  <div class="embed-container embed-container_16-9">
    <iframe src="//player.vimeo.com/video/101696287?title=0&amp;portrait=0" width="500" height="314" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
  <figcaption>
    <h2 class="text-center">1a mostra simultània d'art digital / 1st simultaneous digital art show</h2>
  </figcaption>
</figure>
</div>