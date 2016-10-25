$(document).ready(function(){
  
   $("div div").css("color","yellow"); 

});  
$(document).ready(function(){

$('#but1').click(function(){$('#par1').css('color','green').css('fontSize','20px');});

$('#href1').hover(function(){document.getElementById('href1').style.color ='orange';}).mouseout(function(){document.getElementById('href1').style.color = 'blue';});

$('#text1').select(function(){$(this).css('color','red').css('fontSize','20px');});

$('#but2').toggle(function(){$('#par2').css('fontFamily','Times New Roman').css('color','red').css('border','none');},function(){$('#par2').css('fontFamily','Arial').css('color','blue');},function(){$('#par2').css('fontWeight','bold').css('fontFamily','Verdana').css('border','1px solid');});

});

////////////////////

$(document).ready(function(){

    $("#but1").click(function(){
        var t=$("#par1").html();
        $("#par2").html(t);
    });

    $("#but2").click(function(){
        $("#par3").append("HTML");
        $("#par4").prepend("CSS");
        $("#par5").prepend("Java Script");
        $("#par6").prepend("JQery");
    });
    $("#but3").click(function(){
        $("#href1").html($("#href1").attr("href"));
    });

    $("#but4").click(function(){

        $("#par8").attr("id","style2");
        $("#par9").attr("id","style3");
        $("#par10").attr("id","style1");
        $("#par11").attr("id","style4");
    });
});


////////////////////////////////////////

$(document).ready(function(){


    $("#but1").click(function(){
        var arr = [];
        for(var i = 1; i <=3; i++){ $("#par"+i).each(function(){arr.push("par" + i + " - " + $(this).css("color")); });}
        alert(arr); });

    $("#but2").click(function(){
        $("#par4").css("color","red"),
            $("#par5").css("font-size","25px"),
            $("#par6").css({"font-family":"Verdana","font-size":"33px"})
        $("#par7").css({"font-weight":"bold","font-family":"Times New Roman","color":"red","font-size":"27px"})
    });
});

/////////////////////////////////
$(document).ready(function(){

    $("#but1").click(function(){$("#par1").load("autumn.txt")});
    $("#but2").click(function(){$("#par1").load("winter.txt")});
    $("#but3").click(function(){$("#par1").load("summer.txt")});
    $("#but4").click(function(){$("#par1").load("spring.txt")});

    $("#but5").click(function(){$("#let1").load("secretword.php", "horse=10")}),
        $("#but5").click(function(){$("#let2").load("secretword.php", "look=5&meadow=23")}),
        $("#but5").click(function(){$("#let3").load("secretword.php", "dew=6&mount=64")}),
        $("#but5").click(function(){$("#let4").load("secretword.php", "bond=24&march=40")}),
        $("#but5").click(function(){$("#let5").load("secretword.php", "wise=43&strong=4&curve=29")}),
        $("#but5").click(function(){$("#let6").load("secretword.php", "fast=31&clever=76&moon=20")});

    $("#but6").click(function(){
        $.ajax({url: "secretword.php", data: "horse=10", success: function(result){
            $("#slet1").html(result);}});
        $.ajax({url: "secretword.php", data: "look=5&meadow=23", success: function(result){
            $("#slet2").html(result);}});
        $.ajax({url: "secretword.php", data: "dew=6&mount=64", success: function(result){
            $("#slet3").html(result);}});
        $.ajax({url: "secretword.php", data: "bond=24&march=40", success: function(result){
            $("#slet4").html(result);}});
        $.ajax({url: "secretword.php", data: "wise=43&strong=4&curve=29", success: function(result){
            $("#slet5").html(result);}});
        $.ajax({url: "secretword.php", data: "fast=31&clever=76&moon=20", success: function(result){
            $("#slet6").html(result);}});});

});
