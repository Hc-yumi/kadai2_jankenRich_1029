let x = 0;
let water = 8;
let clothes = 6;
let furniture = 10;
let shoes = 2;
let cosme = 4;

$("#water").on("click",function(){
  $("#water").animate({
    "marginLeft":"-300px"
  });
  console.log(x =+ water);
  $("#water").width("-20%");
  $("#water").fadeOut(2000);
});

$("#clothes").on("click",function(){
  $("#clothes").animate({
    "marginLeft":"-300px"
  });
  console.log(x =+ clothes);
  $("#clothes").width("-20%");
  $("#clothes").fadeOut(2000);
});

$("#furniture").on("click",function(){
  $("#furniture").animate({
    "marginLeft":"-300px"
  });
  console.log(x =+ furniture);
  $("#furniture").width("-20%");
  $("#furniture").fadeOut(2000);
});

$("#shoes").on("click",function(){
  $("#shoes").animate({
    "marginLeft":"-300px"
  });
  console.log(x =+ shoes);
  $("#shoes").width("-20%");
  $("#shoes").fadeOut(2000);
});

$("#cosme").on("click",function(){
  $("#cosme").animate({
    "marginLeft":"-300px"
  });
  console.log(x =+ cosme);
  $("#cosme").width("-20%");
  $("#cosme").fadeOut(2000);
});




