'use strict',

$(document).ready(function($) {
    $(".mobileNav").hide();
    $(".mobile-toggle").click(function() {
        $(".mobileNav").toggle(550);
    });
});