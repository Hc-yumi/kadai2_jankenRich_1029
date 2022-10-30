const water =$("#water");
const clothes =$("clothes");
const furniture =$("furniture");
const shoes =$("shoes");
const cosme =$("#cosme");


$("#water").on("click",function(){
  $("#water").animate({
    "marginLeft":"-300px"
  });
  $("#water").width("-20%");
  $("#water").fadeOut(2000);
});

$("#clothes").on("click",function(){
  $("#clothes").animate({
    "marginLeft":"-300px"
  });
  $("#clothes").width("-20%");
  $("#clothes").fadeOut(2000);
});

$("#furniture").on("click",function(){
  $("#furniture").animate({
    "marginLeft":"-300px"
  });
  $("#furniture").width("-20%");
  $("#furniture").fadeOut(2000);
});

$("#shoes").on("click",function(){
  $("#shoes").animate({
    "marginLeft":"-300px"
  });
  $("#shoes").width("-20%");
  $("#shoes").fadeOut(2000);
});

$("#cosme").on("click",function(){
  $("#cosme").animate({
    "marginLeft":"-300px"
  });
  $("#cosme").width("-20%");
  $("#cosme").fadeOut(2000);
});


