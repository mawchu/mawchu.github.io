
// 漢堡跳動
var hamClickTime = 0;
$("#hamburger").on({
  mouseenter:function(){
    $(this).find("i").css("transform","rotate(200deg)")
    $(this).addClass(`animated bounce infinite`)
    // console.log("mouseenter")
    $(".menu-list-show").css("display","block")
  },
  mouseleave:function(){
    $(this).find("i").css("transform","rotate(180deg)")
    $(this).removeClass(`animated tada infinite`)
    // console.log("mouseenter")
  },
  click:function(){
    $(this).find("i").css("transform","rotate(200deg)")
    $(this).addClass(`animated bounce infinite`)
    // console.log("mouseenter")
    $(".menu-list-show").css("display","block")
    hamClickTime++;

    if(hamClickTime%2 == 0){
     $(this).find("i").css("transform","rotate(180deg)")
     $(this).removeClass(`animated tada infinite`)
    }
  }
})


//下拉漢堡
var clickTime = 0;
$("#hamburger").on({
  click:function(){
    $(".menu-list").css("display","none")
    $(".menu-list-show").css("display","block")
    clickTime++;

    if(clickTime%2 == 0){
      $(".menu-list-show").css("display","none")
    }
  }
})

$(".menu-list-show").on({
  click:function(){
    $(this).css("display","none")
  },
  mouseenter:function(){
    $(this).css("display","block")
  },
  mouseleave:function(){
    $(this).css("display","none")
  }
})

$(".menu-list-show li").on({
  mouseenter:function(){
    $(this).addClass("current").css("background","#f8ebe3").find("a").css("color","#4f3c3b")
    $(this).siblings().find("a").removeClass("current")
  },
  mouseleave:function(){
    $(this).removeClass("current").css("background","#dbbdbd").find("a").css("color","#fff")
  },
  click:function(){
    $(this).closest(".menu-list-show").css("display","none")

  }
})


