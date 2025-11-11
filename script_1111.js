$(document).ready(function(){
    $("#show").click(function(){
    $("div").show();
    }); 

    $("p").hover(function(){
        $(this).css("background-color", "red");
    },function(){
        $(this).css("background-color", "white")
    });
    $("p").dblclick(function(){
        $(this).css("font-size", "30px")
    });
    $("#a").click(function(){
        $("*").hide();
    });
    
});