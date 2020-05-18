
//設計師介紹文章分段滾動事件
var menuHeight = $(".headerdiv").height()
var contentHeight = $(".content-3").height()
var textHeight = $(".text1").height()
// console.log(textHeight)
var titleHeight = $(".designer-content div").eq(0).height()
var targetOffset = $(".designer-photo").offset().top;
var currentWW = $(window).width()
var scrollTrack = 5000;//總共滾動的長度
var scrollDistance = scrollTrack-targetOffset

var worksOffset = $(".content-2").offset().top
var contentOffset = $(".content-3").offset().top
console.log(worksOffset)

// var visualOffset = $(".content-4").offset().top
// console.log(visualOffset)
// var commercialOffset = $(".content-5").offset().top
// var printingOffset = $(".content-6").offset().top

$(".title-content-elements").removeClass("fadestart").addClass("fadein")

// $(".designer-content").height(textHeight+titleHeight+25)
$(".content-wrapper").height(contentHeight+25)



$(window).on({
  scroll:function(){
    let scrollCurrent = $(this).scrollTop()
    // console.log(scrollCurrent)
    if(scrollCurrent >　worksOffset){
      $(".title-content-elements").removeClass("fadein").addClass("fadestart")
    }else{
      $(".title-content-elements").removeClass("fadestart").addClass("fadein")
    }


    if(scrollCurrent >= worksOffset-300 && scrollCurrent < contentOffset){
      $(".works").eq(0).removeClass("fadestart").addClass("fadein")
      setTimeout(
        function(){
            $(".works").eq(1).removeClass("fadestart").addClass("fadein")
        },150)
      setTimeout(
        function(){
            $(".works").eq(2).removeClass("fadestart").addClass("fadein")
        },300)
    }else if(scrollCurrent >= contentOffset){
      $(".works").removeClass("fadein").addClass("fadestart")
    }


    if(scrollCurrent < targetOffset-menuHeight-80){

      $(".content-3").removeClass("fixed")
      $(".holder").css("height",contentHeight+scrollDistance).css("padding-top",0)

    }else if(scrollCurrent > targetOffset-menuHeight-80 && scrollCurrent<scrollTrack){

      $(".content-3").addClass("fixed")
      $(".holder").css("height",contentHeight+scrollTrack)

    }else{

      $(".content-3").removeClass("fixed")
      $(".holder").css("height",contentHeight+scrollDistance+150).css("padding-top",scrollDistance)

      if(currentWW <=320 && scrollCurrent>targetOffset){
        $(".holder").css("height",contentHeight+scrollDistance+30).css("padding-top",scrollDistance)
      }
    }

    //三段式內容 320以上
    if(scrollCurrent<2800){
      $(".text1").css("display","block")
      $(".text2").css("display","none")
      $(".text3").css("display","none")
    }else if(scrollCurrent>2800 && scrollCurrent<3800){
      $(".text1").css("display","none")
      $(".text2").css("display","block")
      $(".text3").css("display","none")
    }else{
      $(".text1").css("display","none")
      $(".text2").css("display","none")
      $(".text3").css("display","block")
    }

    //三段式內容 576以上
    if(currentWW <=576 && currentWW >350){
      if(scrollCurrent<2800){
        $(".text1").css("display","block")
        $(".text2").css("display","none")
        $(".text3").css("display","none")
      }else if(scrollCurrent>2800 && scrollCurrent<3800){
        $(".text1").css("display","none")
        $(".text2").css("display","block")
        $(".text3").css("display","none")
      }else if(scrollCurrent>2800 && scrollCurrent<5000){
        $(".text1").css("display","none")
        $(".text2").css("display","none")
        $(".text3").css("display","block")
      }else{
        $(".text1").css("display","none")
        $(".text2").css("display","none")
        $(".text3").css("display","none")
      }
    }

    //三段式內容 350以上
    if(currentWW <=350){
      if(scrollCurrent<2800){
        $(".designer-photo").css("display","block")
      }else if(scrollCurrent>2800 && scrollCurrent<3800){
        $(".designer-content").css("display","block")
        $("li.m-hide").css("display","none")
      }else if(scrollCurrent>2800 && scrollCurrent<5000){
        $(".designer-content").css("display","block")
      }else{
        $(".designer-content").css("display","none")
        $(".designer-photo").css("display","none")

      }
    }

    // if(scrollCurrent >= visualOffset && scrollCurrent<commercialOffset){
    //   $(".outer-wrapper").eq(0).removeClass("fadestart").addClass("fadein")
    // }else{
    //   $(".outer-wrapper").eq(0).removeClass("fadein").addClass("fadestart")
    // }
  }
})
