---
layout: post
title: "Mostra Completa Amister MAD Barcelona 2015 (III)"
category: videos
share: true
class: videos
og: true
video: 13
og-type: video
---

{% assign video_data = site.data.videos | where:"id", page.video %}
{% assign video = video_data | first %}
<figure class="no-margin margin-bottom-1">
    <div class="embed-container embed-container_{{ video.aspect-ratio }}">
        <video id="teaser" controls preload="auto" poster="/public/video/{{ video.poster }}">
            <source src="/public/video/{{ video.source-webm}}" type='video/webm; codecs="vorbis,vp8"'>
            <source src="/public/video/{{ video.source-mp4 }}" type='video/mp4; codecs="aac,h264"'>
        </video>
    </div>
    <figcaption>
      <p><small><strong>{{ video.title }}</strong>. Mostra Completa a / Muestra complete en / Full show at: <span class="label label-info"><a href="/place/2015/06/05/amister-art-hotel/">Amister</a></span></small></p>
    </figcaption>
</figure>

<!--more-->

<p><strong>{{ video.description }}</strong></p>
<hr/>
<p>{{ video.description-en }}</p>
<hr/>
<p><em>{{ video.description-es }}</em></p>