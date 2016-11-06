"use strict";$(document).ready(function(){var e=function(){var e=$("#canves"),n=e.find(".overlay-screen"),o=e.find(".game-cover"),t=e.find(".killed-status span"),s=e.find(".life"),i=e.find("#mute-music"),a=e.find("#mute-sounds"),r=e.find(".ammo"),d=e.find(".reload-hint"),u=d.find(".reload-trigger"),m=e.find("#pause-game"),c="SHOOT_SOUND",g="NO_AMMO_SOUND",f="RELOAD_SOUND",l="ROAR_1",p="ROAR_2",b="ROAR_3",v="ROAR_4",h="ROAR_5",S="ROAR_6",z="LAUGHTER",C="SOUNDTRACK",k="PUNCH_1",j="PUNCH_2",O="PUNCH_3",R="PUNCH_4",_=void 0,w=!1,y=!1,T=!1,A=3,N=0,U=0,q=6,H=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},D=H(1300,1700),P=H(1500,1900),M=H(1700,2100),I=H(1800,2400),L=H(5,7),E=H(7,10),F=H(10,14),x=H(14,17),G=L+E+F+x;!function(){createjs.Sound.registerSound("sounds/shoot.mp3",c),createjs.Sound.registerSound("sounds/noammo.mp3",g),createjs.Sound.registerSound("sounds/reload.mp3",f),createjs.Sound.registerSound("sounds/roar/1.mp3",l),createjs.Sound.registerSound("sounds/roar/2.mp3",p),createjs.Sound.registerSound("sounds/roar/3.mp3",b),createjs.Sound.registerSound("sounds/roar/4.mp3",v),createjs.Sound.registerSound("sounds/roar/5.mp3",h),createjs.Sound.registerSound("sounds/roar/6.mp3",S),createjs.Sound.registerSound("sounds/laughter.mp3",z),createjs.Sound.registerSound("sounds/soundtrack.mp3",C),createjs.Sound.registerSound("sounds/punch/1.mp3",k),createjs.Sound.registerSound("sounds/punch/2.mp3",j),createjs.Sound.registerSound("sounds/punch/3.mp3",O),createjs.Sound.registerSound("sounds/punch/4.mp3",R)}();var K=function(e){createjs.Sound.play(e)},B=function(){var n=1===U?H(1,3):2===U?H(1,4):H(1,6);e.append($('<div class="zombie zombie-'+n+" walk-speed-"+H(1,6)+" walk-delay-"+H(1,6)+'" data-strength="'+n+'"><div class="strength-bar"></div></div>'))},J=function(){e.on("click",function(){q>0&&(q--,y||K(c),r.attr("data-ammo",q)),0===q&&(d.addClass("visible"),y||K(g))}),$("body").on("keydown",function(e){82===e.which&&6!==q&&Z()}),u.on("click",function(){if(0===q)return Z(),!1}),e.delegate(".zombie","click",function(e){if(N>=G)return!1;if(0===q)return y||K(g),!1;var n=$(this),o=e.target.dataset.strength.toString(),s=n.find(".strength-bar");"1"===o&&0!==o&&(N++,t.html(N),n.css("pointer-events","none"),s.addClass("hide"),setTimeout(function(){n.addClass("killed"),y||K("ROAR_"+H(1,6))},220),setTimeout(function(){n.fadeOut(function(){n.remove()})},370),X()),o--,n.attr("data-strength",o)})},Q=function(e,n,o){var t=function(n,o){return function(){if("undefined"==typeof o||o-- >0){setTimeout(t,n);try{e.call(null)}catch(s){throw o=0,s.toString()}}}}(n,o);setTimeout(t,n)},V=function(o,t){$("body").off("keydown"),e.off("click"),d.removeClass("visible"),_=!0,U++,n.find(".level-title span").html(U),e.addClass("level-message"),e.attr("data-wave",U),setTimeout(function(){Q(function(){B()},o,t)},1e3),setTimeout(function(){e.removeClass("level-message"),1===U&&e.removeClass("intro"),_=!1,Y(),J()},2200)},W=function(n){$("body").off("keydown"),e.off("click"),_=!0;var o="lose"===n?"game-over":"end-game";e.addClass(o),w||K(z),e.find(".restart-hint").on("click",function(){e.removeClass(o),ee(),"win"===n?ne():(w||K(C),ne())})},X=function(){N===L?(w||K(C),V(P,E)):N===L+E?(w||K(C),V(M,F)):N===L+E+F?(w||K(C),V(I,x)):N>=G&&W("win")},Y=function(){var e=$(".zombie");if(0!==e.length)for(var n=0,o=e.length;n<o;n++){var t=e.eq(n).width()-20;e.eq(n).hasClass("tracking")?e.eq(n).position().left.toFixed()<=-t&&(e.eq(n).remove(),B(),A--,y||K("PUNCH_"+H(1,4)),s.find(".heart-icon").not(".hide").eq(-1).addClass("hide")):e.eq(n).addClass("tracking")}0!==A?_||requestAnimationFrame(Y):W("lose")},Z=function(){y||K(f),q=6,setTimeout(function(){r.addClass("reload")},120),setTimeout(function(){r.attr("data-ammo",q)},150),setTimeout(function(){r.removeClass("reload")},250),d.removeClass("visible")};i.on("click",function(){var e=$(this);e.toggleClass("muted"),w?w=!1:(createjs.Sound.stop(),w=!0),0!==q&&q++}),a.on("click",function(){var e=$(this);e.toggleClass("muted"),y=!y,0!==q&&q++}),m.on("click",function(){var n=$(this);T?(n.removeClass("paused"),e.removeClass("game-paused"),J(),T=!1):(n.addClass("paused"),e.addClass("game-paused"),createjs.Sound.stop(),$("body").off("keydown"),e.off("click"),T=!0)});var ee=function(){N=0,U=0,q=6,A=3,s.find(".heart-icon").removeClass("hide"),t.html(N),r.attr("data-ammo",q),createjs.Sound.stop(),$(".zombie").remove()},ne=function(){ee(),o.fadeIn("slow",function(){e.attr("data-wave","1")}),setTimeout(function(){o.fadeOut("slow",function(){w||K(C),V(D,L)})},2500)},oe=function(e,n){var o=e.length;$(e.map(function(e){return'<img src="'+e+'" />'}).join("")).load(function(){0===--o&&n()})};return{initInto:function(){e.find(".zombie-loader").addClass("zombie-"+H(1,3)),oe(["images/zombies/zombie-1.png","images/zombies/zombie-2.png","images/zombies/zombie-3.png","images/background/bg-1.png","images/background/bg-2.png","images/background/bg-3.png","images/background/bg-4.png","images/ui/cover.jpg","images/ui/frame.png","images/ui/icons.png","images/zombies/zombie-1-death.png","images/zombies/zombie-2-death.png","images/zombies/zombie-3-death.png","images/zombies/zombie-4.png","images/zombies/zombie-4-death.png","images/zombies/zombie-5.png","images/zombies/zombie-5-death.png","images/zombies/zombie-6.png","images/zombies/zombie-6-death.png"],function(){e.find(".loader").remove(),ne()})},killed:N,ammoLeft:q}}();e.initInto()});