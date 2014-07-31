---
layout: post
title: Ryans Pub Carrer Escudellers
category: place
share: true
---

<figure class="text-center">
{% for place in site.data.places limit:1 offset:1 %}
	<a href="{{ place.url }}" title="{{ place.name }}"><img src="/public/img/{{ place.logo }}" alt="{{ place.name}} - exhibidors de barcelona digital art" title="{{ place.name }} - exhibidors de barcelona digital art"></a>
	<figcaption>
		<p><small><a href="{{ place.url }}" title="{{ place.name }}">{{ place.name }}</a> <i class="fa fa-external-link"></i> | <a href="https://twitter.com/{{ place.twitter }}" title="@{{ place.twitter }}"><i class="fa fa-twitter"></i></a> | <a href="{{ place.facebook }}" title="{{ place.name }} a Facebook"><i class="fa fa-facebook"></i></a></small></p>
		<p class="text-left"><strong>Direcció</strong> / <em>Address</em>: {{ place.address }}<br/>
		<strong>Horari projecció</strong> / <em>Screening timetable</em>: <strong>{{ place.screening-ca }}</strong> / <em>{{ place.screening-en }}</em>
		</small>
		</p>
	</figcaption>
{% endfor %}
</figure>