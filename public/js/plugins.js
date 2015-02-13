// jQuery Countodown
(function(e){"use strict";if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";function i(e){if(e instanceof Date){return e}if(String(e).match(r)){if(String(e).match(/^[0-9]*$/)){e=Number(e)}if(String(e).match(/\-/)){e=String(e).replace(/\-/g,"/")}return new Date(e)}else{throw new Error("Couldn't cast `"+e+"` to a date object.")}}function o(e){var t=e.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(t)}function u(e){return function(t){var n=t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(n){for(var r=0,i=n.length;r<i;++r){var u=n[r].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),f=o(u[0]),l=u[1]||"",c=u[3]||"",h=null;u=u[2];if(s.hasOwnProperty(u)){h=s[u];h=Number(e[h])}if(h!==null){if(l==="!"){h=a(c,h)}if(l===""){if(h<10){h="0"+h.toString()}}t=t.replace(f,h.toString())}}}t=t.replace(/%%/,"%");return t}}function a(e,t){var n="s",r="";if(e){e=e.replace(/(:|;|\s)/gi,"").split(/\,/);if(e.length===1){n=e[0]}else{r=e[0];n=e[1]}}if(Math.abs(t)===1){return r}else{return n}}var t=100;var n=[],r=[];r.push(/^[0-9]*$/.source);r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source);r=new RegExp(r.join("|"));var s={Y:"years",m:"months",w:"weeks",d:"days",D:"totalDays",H:"hours",M:"minutes",S:"seconds"};var f=function(t,r,i){this.el=t;this.$el=e(t);this.interval=null;this.offset={};this.instanceNumber=n.length;n.push(this);this.$el.data("countdown-instance",this.instanceNumber);if(i){this.$el.on("update.countdown",i);this.$el.on("stoped.countdown",i);this.$el.on("finish.countdown",i)}this.setFinalDate(r);this.start()};e.extend(f.prototype,{start:function(){if(this.interval!==null){clearInterval(this.interval)}var e=this;this.update();this.interval=setInterval(function(){e.update.call(e)},t)},stop:function(){clearInterval(this.interval);this.interval=null;this.dispatchEvent("stoped")},toggle:function(){if(this.interval){this.stop()}else{this.start()}},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this);n[this.instanceNumber]=null;delete this.$el.data().countdownInstance},setFinalDate:function(e){this.finalDate=i(e)},update:function(){if(this.$el.closest("html").length===0){this.remove();return}this.totalSecsLeft=this.finalDate.getTime()-(new Date).getTime();this.totalSecsLeft=Math.ceil(this.totalSecsLeft/1e3);this.totalSecsLeft=this.totalSecsLeft<0?0:this.totalSecsLeft;this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30),years:Math.floor(this.totalSecsLeft/60/60/24/365)};if(this.totalSecsLeft===0){this.stop();this.dispatchEvent("finish")}else{this.dispatchEvent("update")}},dispatchEvent:function(t){var n=e.Event(t+".countdown");n.finalDate=this.finalDate;n.offset=e.extend({},this.offset);n.strftime=u(this.offset);this.$el.trigger(n)}});e.fn.countdown=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){var r=e(this).data("countdown-instance");if(r!==undefined){var i=n[r],s=t[0];if(f.prototype.hasOwnProperty(s)){i[s].apply(i,t.slice(1))}else if(String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i)===null){i.setFinalDate.call(i,s);i.start()}else{e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,s))}}else{new f(this,t[0],t[1])}})}})


/*Browser detection patch*/

if(!jQuery.browser){

	jQuery.browser = {};
	jQuery.browser.mozilla = false;
	jQuery.browser.webkit = false;
	jQuery.browser.opera = false;
	jQuery.browser.safari = false;
	jQuery.browser.chrome = false;
	jQuery.browser.msie = false;
	jQuery.browser.android = false;
	jQuery.browser.blackberry = false;
	jQuery.browser.ios = false;
	jQuery.browser.operaMobile = false;
	jQuery.browser.windowsMobile = false;
	jQuery.browser.mobile = false;

	var nAgt = navigator.userAgent;
	jQuery.browser.ua = nAgt;

	jQuery.browser.name  = navigator.appName;
	jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}

// In MSIE < 11, the true version is after "MSIE" in userAgent
	else if ( (verOffset=nAgt.indexOf("MSIE"))!=-1) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
	}

// In TRIDENT (IE11) => 11, the true version is after "rv:" in userAgent
	else if (nAgt.indexOf("Trident")!=-1 ) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:")+3;
		var end = start+4;
		jQuery.browser.fullVersion = nAgt.substring(start,end);
	}

// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.chrome = true;
		jQuery.browser.name = "Chrome";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.safari = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("AppleWebkit"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		jQuery.browser.mozilla = true;
		jQuery.browser.name = "Firefox";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
		jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
		jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
		if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
			jQuery.browser.name = navigator.appName;
		}
	}

	/*Check all mobile environments*/
	jQuery.browser.android = (/Android/i).test(nAgt);
	jQuery.browser.blackberry = (/BlackBerry/i).test(nAgt);
	jQuery.browser.ios = (/iPhone|iPad|iPod/i).test(nAgt);
	jQuery.browser.operaMobile = (/Opera Mini/i).test(nAgt);
	jQuery.browser.windowsMobile = (/IEMobile/i).test(nAgt);
	jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile;


// trim the fullVersion string at semicolon/space if present
	if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
	if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

	jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
	if (isNaN(jQuery.browser.majorVersion)) {
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	}
	jQuery.browser.version = jQuery.browser.majorVersion;
}

var txt = '' + 'navigator.appName = ' + navigator.appName + '<br>' + 'navigator.userAgent = ' + navigator.userAgent + '<br><br><br>' + 'jQuery.browser.name  = ' + jQuery.browser.name + '<br>' + 'jQuery.browser.fullVersion  = ' + jQuery.browser.fullVersion + '<br>' + 'jQuery.browser.version = ' + jQuery.browser.version + '<br>' + 'jQuery.browser.majorVersion = ' + jQuery.browser.majorVersion + '<br><br><br>' + 'jQuery.browser.msie = ' + jQuery.browser.msie + '<br>' + 'jQuery.browser.mozilla = ' + jQuery.browser.mozilla + '<br>' + 'jQuery.browser.opera = ' + jQuery.browser.opera + '<br>' + 'jQuery.browser.chrome = ' + jQuery.browser.chrome + '<br>'+ 'jQuery.browser.webkit = ' + jQuery.browser.webkit + '<br>' + '<br>' + 'jQuery.browser.android = ' + jQuery.browser.android + '<br>' + 'jQuery.browser.blackberry = ' + jQuery.browser.blackberry + '<br>' + 'jQuery.browser.ios = ' + jQuery.browser.ios + '<br>' +  'jQuery.browser.operaMobile = ' + jQuery.browser.operaMobile + '<br>' + 'jQuery.browser.windowsMobile = ' + jQuery.browser.windowsMobile + '<br>' + 'jQuery.browser.mobile = ' + jQuery.browser.mobile;

$("#result").html(txt);