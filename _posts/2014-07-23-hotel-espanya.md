---
layout: post
title: Hotel Espanya Rambles
category: place
share: true
---

<figure class="text-center">
{% for place in site.data.places limit:1 offset:4 %}
	<a href="{{ place.url }}" title="{{ place.name }}"><img src="/public/img/{{ place.logo }}" alt="{{ place.name}} - exhibidors de barcelona digital art" title="{{ place.name }} - exhibidors de barcelona digital art"></a>
	<figcaption>
		<p><small><i class="fa fa-external-link"></i> <a href="{{ place.url }}" title="{{ place.name }}">{{ place.name }}</a><br/>
		<strong>Direcció</strong> / <em>Address</em>: {{ place.address }}<br/>
		<strong>Horari projecció</strong> / <em>Screening timetable</em>: {{ place.screening }}<br/>
		<a href="https://twitter.com/{{ place.twitter }}" title="@{{ place.twitter }}"><i class="fa fa-twitter"></i></a><br/>
		<a href="{{ place.facebook }}" title="{{ place.name }} a Facebook"><i class="fa fa-facebook"></i></a>
		</small></p>
	</figcaption>
{% endfor %}
</figure>