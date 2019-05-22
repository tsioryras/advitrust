/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.css');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
 const $ = require('jquery');
require('bootstrap');


$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});


// require the JavaScript
$("#mobile-nav-toggle" ).click(function() {
    $("#back-shadow").toggleClass("hidden");
    $("#close-menu").toggleClass("hidden");
    $(this).addClass("hidden");
    $("#side-menu").css({
        'left': '0','transition-property': 'left', 'transition-duration': '0.4s'
    });
    $("#content_body").css({'overflow-y':'hidden'});
});

$( "#close-menu" ).click(function() {
    $("#back-shadow").toggleClass("hidden");
    $("#close-menu").toggleClass("hidden");
    $("#mobile-nav-toggle").toggleClass("hidden");
    $("#side-menu").css({
        'left': '-250px','transition-property': 'left', 'transition-duration': '0.4s'
    });
    $("#content_body").css({'overflow-y':'auto'});
});

$(function(){
    $(window).bind("scroll", function() {
        let $this = $(this);
        if ($this.scrollTop() > 110) {
            $("#menu-navbar").addClass("fixed-scroll");
        }else{
            $("#menu-navbar").removeClass("fixed-scroll");
        }
    });
});
//console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
