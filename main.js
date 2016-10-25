

///////////////////////////////////////////////
$(document).ready(function(){

$("#but1").click(function(){
$("p#par1").fadeOut()});
$("#but2").click(function(){
$("p#par1").fadeIn()});
$("p#par2").mouseover(function(){
$(this).fadeTo(3000,0.5)});
$("p#par2").mouseout(function(){
$(this).fadeTo(0,1)});
$("#but3").click(function(){
$("#wrap1").slideUp(5000)});
$("#but4").click(function(){
$("#wrap1").slideDown(7000)});

$("#but5").click(function(){
for(var i=0; i<6; i++){
var toSquare = "#square"+i;
$("#redsquare").animate({top:parseInt($(toSquare).css("top"))+5+"px", 
left:parseInt($(toSquare).css("left"))+5+"px"},1000);
}
})

});