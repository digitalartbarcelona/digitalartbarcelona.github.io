---
layout: post
title: "Photoshop per a artistes"
category: tallers
share: true
class: tallers
og: true
taller: 6
og-type: article
---

{% assign taller_data = site.data.activitats.tallers | where:"id", page.taller %}
{% assign taller = taller_data | first %}
<figure class="no-margin margin-bottom-1">
    <div class="embed-container embed-container_{{ taller.aspect_ratio }}">
    <iframe src="https://player.vimeo.com/video/67581679" width="500" height="195" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <div class="padding-arttaller-container">
        <p><small>Del <strong>{{ taller.startDate | date_to_string }}</strong> al <strong>{{ taller.endDate | date_to_string }}</strong><br/>
        <strong>Horari:</strong> {{ taller.timetable }}<br/>
        <strong>Professorat:</strong><br/>
        {% for performer in taller.performer %}
     	{% if forloop.last != true %}
        {{ performer.name }} | <a href="{{ performer.sameAs }}"><i class="fa fa-external-link"></i></a><br/>
        {% elsif forloop.last == true %}
     	{{ performer.name }} | <a href="{{ performer.sameAs }}"><i class="fa fa-external-link"></i></a>
     	{% endif %}
     	{% endfor %}<br/>
     	<strong>Preu:</strong> {{ taller.offers.price }}€ | <a href="{{ taller.offers.url }}"><i class="fa fa-credit-card"></i> inscriu-t'hi</a><br/>
        <strong>On:</strong> {{ taller.location.name }}. <strong>Adreça:</strong> {{ taller.location.address }} - <a href="{{ taller.location.googleMap }}" title="Com arribar-hi"><i class="fa fa-map-marker"></i></a></small></p>
    </div>
</figure>

<!--more-->

<p><strong>{{ taller.description }}</strong></p>
<hr/>
<p><em>{{ taller.description-es }}</em></p>