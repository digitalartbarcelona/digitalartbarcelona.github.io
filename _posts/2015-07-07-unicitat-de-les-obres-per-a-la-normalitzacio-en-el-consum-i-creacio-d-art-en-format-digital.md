---
layout: post
title: "Unicitat de les obres per a la normalització en el consum i creació d'Art en format digital"
category: tallers
share: true
class: tallers
og: true
taller: 13
og-type: article
---

{% assign taller_data = site.data.activitats.tallers | where:"id", page.taller %}
{% assign taller = taller_data | first %}
<figure class="no-margin margin-bottom-1">
    <div class="embed-container embed-container_{{ taller.aspect_ratio }}">
      <iron-image sizing="cover" class="iron-image-size" preload fade src="/public/img/tallers/{{ taller.featured_src }}"></iron-image> 
    </div>
    <div class="padding-arttaller-container">
        <p><small>Del <strong>{{ taller.startDate | date_to_string }}</strong> al <strong>{{ taller.endDate | date_to_string }}</strong><br/>
        <strong>Horari:</strong> {{ taller.timetable }}<br/>
        <strong>Ponents:</strong><br/>
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

<div class="row">
    <div class="col-md-6">
        <p><img class="img-responsive img-rounded" src="/public/img/tallers/{{ taller.01-gallery_src }}" alt="{{ taller.name }}"></p>
    </div>
    <div class="col-md-6">
        <p><strong>{{ taller.description }}</strong></p>
    </div>
</div>

<hr />

<div class="row">
    <div class="col-md-6">
        <p>{{ taller.description-es }}</p>
    </div>
    <div class="col-md-6">
        <p><img class="img-responsive img-rounded" src="/public/img/tallers/{{ taller.02-gallery_src }}" alt="{{ taller.name }}"></p>
    </div>
</div>

<hr />

<div class="row">
    <div class="col-md-6">
        <p><img class="img-responsive img-rounded" src="/public/img/tallers/{{ taller.03-gallery_src }}" alt="{{ taller.name }}"></p>
    </div>
    <div class="col-md-6">
        <p><em>{{ taller.description-en }}</em></p>
    </div>
</div>