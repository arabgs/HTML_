$(document).ready(function(){

$("#top_section").hover(function(){
$(this).toggleClass("active_top")
$("#left_section").toggleClass("active_left")


})
$("#left_section").hover(function(){
$(this).toggleClass("active_left")
$("#top_section").toggleClass("active_top")


})





})