$(document).ready(function(){
    $("#show").click(function(){
    $("#yes").show();
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
        $("#no").hide();
    });

    //november 13
    $(".button").click(function(){
        $(".a").animate({left: '250px'},400,function(){
            $(this).css("background-color", "red")
        }).animate({height:'250px'},400,function(){
            $(".a").css("background-color","blue")
        }).animate({width:'350px'},400,function(){
            $(".a").css("background-color","green")
        }).animate({fontSize:"40px"},400,function(){
            $(".a").css("background-color","pink");
        }).animate({height:'100px',opacity:'0.5'},400,function(){
            $(this).css("background-color","aqua");
        }).animate({height:'200px',width:'200px',fontSize:'16px', opacity:'1', left:0},400,function(){
            $(this).css("background-color","#89CC04");
        })
    });
    });
