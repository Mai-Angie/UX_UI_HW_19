$(document).ready(function(){
    $(".round").hover(function(){
      $(this).css("border-radius", "50%");
     }, function(){
         $(this).css("border-radius", "0%");
    });
    $("button").hover(function(){
        $(this).css("background-color", "pink");
       }, function(){
           $(this).css("background-color", "lightpink");
      });
      $("#nav li").hover(function(){
        $(this).css("color", "pink");
       }, function(){
           $(this).css("color", "black");
      });
      $("footer li").hover(function(){
        $(this).css("color", "pink");
       }, function(){
           $(this).css("color", "white");
      });




 
  });//.end document ready function