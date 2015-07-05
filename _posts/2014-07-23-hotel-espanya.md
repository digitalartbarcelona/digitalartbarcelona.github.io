---
layout: post
title: Hotel Espanya Rambles
category: place
share: true
og: true
og-type: place
place: 5
---

<figure class="text-center">
{% for place in site.data.places limit:1 offset:4 %}
	<a href="{{ place.url }}" title="{{ place.name }}"><img src="/public/img/{{ place.logo }}" alt="{{ place.name}} - exhibidors de barcelona digital art" title="{{ place.name }} - exhibidors de barcelona digital art"></a>
	<figcaption>
		<p><small><a href="{{ place.url }}" title="{{ place.name }}">{{ place.name }}</a> <i class="fa fa-external-link"></i> | <a href="https://twitter.com/{{ place.twitter }}" title="@{{ place.twitter }}"><i class="fa fa-twitter"></i></a> | <a href="{{ place.facebook }}" title="{{ place.name }} a Facebook"><i class="fa fa-facebook"></i></a></small></p>
		<p class="text-left"><strong>Adreça</strong> / <em>Address</em> / Dirección: {{ place.address }}<br/>
		<strong><a href="{{ place.getdirections }}">Com arribar-hi?</a></strong> / <em><a href="{{ place.getdirections }}">Get directions</a></em> / <a href="{{ place.getdirections }}">¿Cómo llegar?</a><br/>
		<strong>Horari projecció</strong> / <em>Screening timetable</em>: <strong>{{ place.screening-ca }}</strong> / <em>{{ place.screening-en }}</em>
		</small>
		</p>
	</figcaption>
{% endfor %}
</figure>
<!--more-->
<hr />
{% for place in site.data.places limit:1 offset:4 %}
<div class="row">
	<div class="col-sm-6">
		<div class="embed-container embed-container_16-9">
			<a href="{{ place.url }}" title="{{ place.name }}"><iron-image sizing="cover" class="iron-image-size" preload fade src="/public/img/{{ place.img }}" title="{{ place.name }} - exhibidors de barcelona digital art"></iron-image></a>
		</div>
	</div>
	<div class="col-sm-6">
		<p>{{ place.description }}</p>
	</div>
</div>
{% endfor %}