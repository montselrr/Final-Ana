$(document).ready(function(){
  $(".desplegables").on( "click", ".menu--boton__desplegable", (function(){
    $(this).siblings(".menu--submenu").slideDown("slow");
    $(this).removeClass("menu--boton__desplegable");
    $(this).addClass("menu--boton__desplegado");
  }) );
  $(".desplegables").on( "click", ".menu--boton__desplegado", (function(){
    $(this).siblings(".menu--submenu").slideUp("fast");
    $(this).removeClass("menu--boton__desplegado");
    $(this).addClass("menu--boton__desplegable");
  }) );
});