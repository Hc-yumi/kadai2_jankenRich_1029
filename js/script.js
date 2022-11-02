// 1.対象のモノの個数を選択したら、その定義に入っている数量を加算する
      //(見え方は重量にする)
// 2.3つ選ぶ
// 3.3つ選んだら非活性にする
// 4.運ぶものを決めたら決定ボタンを押す
// 5.決定ボタンを押したら画面が遷移する
// 6.トラックの積載可能重量を割り当てる
// 7.トラックの車格を選ぶ
// 8.車格に応じて所持金が減る
// 9.2.で決めた荷物の重量よりも小さければOK,重ければNGを出す（アラート）
// 10.重量よりも重ければペナルティ-¥30,000 ／ 重量よりも軽ければ+¥30,000


// $("#water").on("click",function(){
  // $("#water").animate({
    // "marginLeft":"-300px"
  // });
  // console.log(x =+ water);
  // $("#water").width("-20%");
  // $("#water").fadeOut(2000);
// });

$(function() {

  $("select").change(function() {
  
    let hairetu = [];
    for(let i = 0; i < $(".baggage_item").length; i++){
  
      let item_wight = $(".baggage_item").eq(i).data("weight");
      let item_select = $(".baggage_item").eq(i).next("select").find("option:selected").data("num");
  
    
      if( item_select > 0 ) {
        hairetu.push(item_wight * item_select);
      } else {
        0;
      }
    }
  
    let total = 0;
    for(let j = 0; j < hairetu.length; j++){
      total += hairetu[j];
    }  
  
    $("#item_weight_total").val(total + "kg");

    // $("#decision").on("click",function(){
    //   console.log(total);
    // })

    if( total > 0 && total <= 1000) {
        // alert("軽");
        console.log("軽");
        // let kei;
        // $("#kei").on("click",function(){
        //   if( total < 1000 ){
        //     alert("OK");
        //   } else {
        //     alert("NG");
        //   }          
        // })


      } else if (total > 1000 && total <= 2000){
        // alert("2t");
        console.log("2t");
        // let niton;
        // $("#niton").on("click",function(){
        //   alert("OK");
        // })

      } else if(total > 2000 && total <= 4000){
        // alert("4t");
        console.log("4t");
        // let yonton;
        // $("#yonton").on("click",function(){
        //   alert("OK");
        // })

      } else if (total > 4000 && total <= 10000){
        // alert("10t")
        console.log("10t");
        // let zyuton;
        // $("#jyuton").on("click",function(){
        //   alert("OK");
        // })
      }  

      //車格判定をする

  const car_var = total;

  $("#kei").on("click",function(){
    if( car_var > 0 && car_var <= 1000 ){
      alert("OK");
    } else {
      alert("NG");
    }          
  })

  $("#niton").on("click",function(){
    if( car_var <= 2000 ){
      alert("OK");
    } else {
      alert("NG");
    }          
  })

  $("#yonton").on("click",function(){
    if( car_var <= 4000 ){
      alert("OK");
    } else {
      alert("NG");
    }          
  })

  $("#jyuton").on("click",function(){
    if( car_var <= 10000 ){
      alert("OK");
    } else {
      alert("NG");
    }          
  })
      
      

  });  

  

  // click イベントとif文を使って、輸送可否判断のアニメーションつくる！
  
  
  // $("#kei").on("click",function(){
  //   let keisya;
  //   if(total < 1000){
  //     alert("OK");
  //     $("#result").html("うまく運べたね♪")

  //   }else{
  //     alert("NG");
  //     $("#result").html("積載オーバー・・")
  //   }
  // }) 
});

// $(function(){
  // $("#kei").on('click',function(){
  //   alert("OK");
  //   if(total<1000){
  //     alert("うまいね");
  //   }else{
  //     alert("下手だね");
  //   }
  // })
// })

// $("#kei").on({
//   "click":function(){
//     console.log("クリックされました");
//   },
//   "mouseenter":function(){
//     console.log("マウスが重なりました");
//   }
// })

// function judge(){        
//   if(total < 1000){
//     alert("上手く運べたね♪");
//   } else{
//     alert("積載オーバー・・");
//   }
// }


// $("#clothes").on("click",function(){
//   $("#clothes").animate({
//     "marginLeft":"-300px"
//   });
//   console.log(x =+ clothes);
//   $("#clothes").width("-20%");
//   $("#clothes").fadeOut(2000);
// });

// $("#furniture").on("click",function(){
//   $("#furniture").animate({
//     "marginLeft":"-300px"
//   });
//   console.log(x =+ furniture);
//   $("#furniture").width("-20%");
//   $("#furniture").fadeOut(2000);
// });

// $("#shoes").on("click",function(){
//   $("#shoes").animate({
//     "marginLeft":"-300px"
//   });
//   console.log(x =+ shoes);
//   $("#shoes").width("-20%");
//   $("#shoes").fadeOut(2000);
// });

// $("#cosme").on("click",function(){
//   $("#cosme").animate({
//     "marginLeft":"-300px"
//   });
//   console.log(x =+ cosme);
//   $("#cosme").width("-20%");
//   $("#cosme").fadeOut(2000);
// });



