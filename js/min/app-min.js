jQuery(document).ready(function($){$("#header__handler").on("click",function(){$("nav").slideDown(400)}),$("#icon-close").on("click",function(){$("nav").slideUp("400")}),$("#exito").hover(function(){$(".exito").toggleClass("girar"),$(".exito_reverse").toggleClass("girar_reverse")},function(){$(".exito").removeClass("girar"),$(".exito_reverse").removeClass("girar_reverse")}),$("#js-mapa-web").on("click",function(){$(this).toggleClass("icon-circle-up"),$(".mapa--web--displayed").slideToggle(400)}),$("#js-last-works").on("click",function(){$("#js-last-works").toggleClass("icon-circle-up"),$(".footer-last-works-displayed").slideToggle(400)}),$("#js-rrss").on("click",function(){$("#js-rrss").toggleClass("icon-circle-up"),$(".footer-rrss-displayed").slideToggle(400)}),$("#js-contactanos").on("click",function(){$("#js-contactanos").toggleClass("icon-circle-up"),$(".footer-contactanos-displayed").slideToggle(400)})});