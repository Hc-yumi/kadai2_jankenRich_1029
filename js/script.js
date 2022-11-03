// 1.対象のモノの個数を選択したら、その定義に入っている数量を加算する
      //(見え方は重量にする)
// 2.選んだものの合計値を出す
// 3.3つ選んだら非活性にする
// 4.運ぶものを決めたら決定ボタンを押す
// 5.決定ボタンを押したら画面が遷移する
// 6.トラックの積載可能重量を割り当てる
// 7.トラックの車格を選ぶ
// 8.車格に応じて所持金が減る
// 9.2.で決めた荷物の重量よりも小さければOK,重ければNGを出す（アラート）
// 10.重量よりも重ければペナルティ-¥100,000 ／ 重量よりも軽ければ+¥100,000


// $("#water").on("click",function(){
  // $("#water").animate({
    // "marginLeft":"-300px"
  // });
  // console.log(x =+ water);
  // $("#water").width("-20%");
  // $("#water").fadeOut(2000);
// });

let total = 0;

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
  
    for(let j = 0; j < hairetu.length; j++){
      total += hairetu[j];
    }    
    $("#item_weight_total").val(total + "kg");


    if( total > 0 && total <= 1000) {
        // alert("軽");
        console.log("軽");
        // let kei = 1000;
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
        // let niton = 2000;
        // $("#niton").on("click",function(){
        //   alert("OK");
        // })

      } else if(total > 2000 && total <= 4000){
        // alert("4t");
        console.log("4t");
        // let yonton = 4000;
        // $("#yonton").on("click",function(){
        //   alert("OK");
        // })

      } else if (total > 4000 && total <= 10000){
        // alert("10t")
        console.log("10t");
        // let zyuton = 10000;
        // $("#jyuton").on("click",function(){
        //   alert("OK");
        // })
      }  


      //ローカルストレージを使う方法
      // function saveData(){
      //   var score = new scoretotal();
      //   localStorage.setItem(total);
      // }
      // localStorage.setItem('key', 'value1');
      // localStorage.saveKey = 'value2';

      //車格判定をする 
      let kei=10000;
      let niton=20000;
      let yonton=30000;
      let jyutton =50000; 

    
  //  console.log(total);  
  // let value = null;

  //軽¥10,000を所持金から引いた金額を表示する
  //  $("#kei").on("click",function(){
  //   // alert("OK");
  //   $("#now_money").html('¥90,000');

  //    if( total > 0 && total <= 1000 ){
  //      alert("OK");
  //     //  value = OK;
  //      $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
  //      $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');
  //    } else {
  //      alert("NG");
  //     //  value = NG;
  //      $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
  //      $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
       
  //    }      
    
  //  })
 
  //2t ¥20,000を所持金から引いた金額を表示する
  //  $("#niton").on("click",function(){
  //   $("#now_money").html('¥80,000');
  //    if( total <= 2000 ){
  //      alert("OK");
  //     //  value = OK;
  //      $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
  //      $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');

  //    } else {
  //      alert("NG");
  //     //  value = NG;
  //      $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
  //      $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
  //    }          
  //  })

  //4t ¥30,000を所持金から引いた金額を表示する 
  //  $("#yonton").on("click",function(){
  //   $("#now_money").html('¥70,000');
  //    if( total <= 4000 ){
  //      alert("OK");
  //     //  value = OK;
  //      $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
  //      $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');
  //    } else {
  //      alert("NG");
  //     //  value = NG;
  //      $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
  //      $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
  //    }          
  //  })


  //10t ¥50,000を所持金から引いた金額を表示 
  //  $("#jyuton").on("click",function(){
  //   $("#now_money").html('¥50,000');
  //    if( total <= 10000 ){
  //      alert("OK");
  //     //  value = OK;
  //      $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
  //      $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');
  //    } else {
  //      alert("NG");
  //     //  value = NG;
  //      $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
  //      $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
  //    }          
  //  })      

  });  

  //決定ボタンを押した後の効果音
  $("#decision").on("click",function(){
    $("#play_kettei").get(0).play();
  })


  //トラックの後ろ姿が動く＋音がなる
  $('#shipping').on("click",function(){
    // alert("OK");
    $("#play_ship").get(0).play(); 
    $("#back_truck").addClass('yure')
    $("#last").addClass('result_text');    

   })

});

//軽¥10,000を所持金から引いた金額を表示する
$("#kei").on("click",function(){
  // alert("OK");
  $("#now_money").html('¥90,000');

   if( total > 0 && total <= 1000 ){
     alert("OK");
    //  value = OK;
     $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
     $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');
   } else {
     alert("NG");
    //  value = NG;
     $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
     $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
     
   }      
  
 })

 //2t ¥20,000を所持金から引いた金額を表示する
 $("#niton").on("click",function(){
  $("#now_money").html('¥80,000');
   if( total <= 2000 ){
     alert("OK");
    //  value = OK;
     $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
     $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');

   } else {
     alert("NG");
    //  value = NG;
     $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
     $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
   }          
 })

 //4t ¥30,000を所持金から引いた金額を表示する 
 $("#yonton").on("click",function(){
  $("#now_money").html('¥70,000');
   if( total <= 4000 ){
     alert("OK");
    //  value = OK;
     $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
     $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');
   } else {
     alert("NG");
    //  value = NG;
     $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
     $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
   }          
 })

 //10t ¥50,000を所持金から引いた金額を表示 
 $("#jyuton").on("click",function(){
  $("#now_money").html('¥50,000');
   if( total <= 10000 ){
     alert("OK");
    //  value = OK;
     $("#result").hide(2000).fadeIn(5000).html('正しい選定をありがとう！ボーナス¥100,000');
     $("#result_money").hide().fadeIn(20000).html('+ ¥100,000');
   } else {
     alert("NG");
    //  value = NG;
     $("#result").hide(2000).fadeIn(5000).html('積載オーバーだよ・・。ペナルティマイナス¥100,000・・まだまだだね。');
     $("#result_money").hide().fadeIn(20000).html('- ¥100,000');
   }          
 })      






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



