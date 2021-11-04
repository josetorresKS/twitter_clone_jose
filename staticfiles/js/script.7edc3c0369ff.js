/////////////////////////////
// JavaScript for Posts page
////////////////////////////

$(function(){
    $('.js-menu-icon').click(function(){
        //$(this) : self element, namely div.js-menu-icon
        // next() : next to div.js-menu-icon, namely div.menu
        // toggle() : Switch show and hide
        $(this).next().toggle();
    })
})