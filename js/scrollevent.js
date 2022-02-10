
//設計師介紹文章分段滾動事件
let menuHeight = $(".headerdiv").height()
let aboutOffset = $(".content-3").height() //about offset
// console.log(aboutOffset)
let textHeight = $(".text1").height()

let titleHeight = $(".designer-content div").eq(0).height()
let targetOffset = $(".designer-photo").offset().top;
let currentWW = $(window).width()
let scrollTrack = 5000;//總共滾動的長度
let scrollDistance = scrollTrack-targetOffset

let worksOffset = $(".content-2").offset().top
let contentOffset = $(".content-3").offset().top
let targetHeight = $('.content-2').height()

let visualOffset = $('#visual').offset().top
let worksCarouselHeight = $('#visual').height()
console.log(visualOffset)


$(".title-content-elements").removeClass("fadestart").addClass("fadein")

// $(".designer-content").height(textHeight+titleHeight+25)
$(".content-wrapper").height(aboutOffset+25)



$(window).on({
  scroll:function(){
    let scrollCurrent = $(this).scrollTop()
    // console.log(scrollCurrent)

    //大標題浮出
    if(scrollCurrent >　worksOffset){
      $(".title-content-elements").removeClass("fadein").addClass("fadestart")
    }else{
      $(".title-content-elements").removeClass("fadestart").addClass("fadein")
    }

    //主題設計牆浮出
    if(scrollCurrent >= worksOffset-400 && scrollCurrent < contentOffset){
      $(".works").eq(0).removeClass("fadestart").addClass("fadein")
      setTimeout(
        function(){
            $(".works").eq(1).removeClass("fadestart").addClass("fadein")
        },80)
      setTimeout(
        function(){
            $(".works").eq(2).removeClass("fadestart").addClass("fadein")
        },160)
    }else if(scrollCurrent >= contentOffset){
      $(".works").removeClass("fadein").addClass("fadestart")
    }

    //桌機板滾動事件
    if(currentWW>576){
      if(scrollCurrent < targetOffset-menuHeight-80){

        $(".content-3").removeClass("fixed")
        $(".holder").css("height",aboutOffset+scrollDistance).css("padding-top",0)
  
      }else if(scrollCurrent > targetOffset-menuHeight-80 && scrollCurrent<scrollTrack){
          $(".content-3").addClass("fixed")
          $(".holder").css("height",aboutOffset+scrollTrack)
  
      }else{
  
        $(".content-3").removeClass("fixed")
        $(".holder").css("height",aboutOffset+scrollDistance+150).css("padding-top",scrollDistance)
  
        // if(currentWW <=320 && scrollCurrent>targetOffset){
        //   $(".holder").css("height",aboutOffset+scrollDistance+30).css("padding-top",scrollDistance)
        // }
      }

    //手機板
    }else{
      
      if(scrollCurrent < targetOffset-menuHeight-80){

        $(".content-3").removeClass("fixed")
        $(".holder").css("height",aboutOffset+scrollDistance).css("padding-top",0)
  
      }else if(scrollCurrent > worksOffset+808 && scrollCurrent<scrollTrack){
          $(".content-3").addClass("fixed")
          $(".holder").css("height",'3280px')
          $('content-4').css('padding-top','840px')
      }else{
  
        $(".content-3").removeClass("fixed")
        $(".holder").css("height",aboutOffset+scrollDistance+150).css("padding-top",scrollDistance)
        $('content-4').css('padding-top','340px')

  
        if(currentWW <=320 && scrollCurrent>targetOffset){
          $(".holder").css("height",aboutOffset+scrollDistance+30).css("padding-top",scrollDistance)
          $('content-4').css('padding-top','340px')

        }
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
        $(".text3").css("display","block")
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
        $(".designer-content").css("display","block")
        $(".designer-photo").css("display","none")

      }
    }
    console.log(scrollCurrent)

    // 輪播牆的浮出
    if(scrollCurrent >= aboutOffset+scrollTrack-160 && scrollCurrent < aboutOffset+scrollTrack+worksCarouselHeight-160){
      $('#visual').removeClass("fadestart").addClass("fadein")
    }else if(scrollCurrent >= aboutOffset+scrollTrack+worksCarouselHeight-160 && scrollCurrent < aboutOffset+scrollTrack+worksCarouselHeight*2-160){
      $('#commercial').removeClass("fadestart").addClass("fadein")
    }else if(scrollCurrent >= aboutOffset+scrollTrack+(worksCarouselHeight*2)-160){
      $('#print').removeClass("fadestart").addClass("fadein")
    }else if(scrollCurrent < aboutOffset+scrollTrack-500){
      $('#visual').addClass("fadestart").removeClass("fadein")
      $('#commercial').addClass("fadestart").removeClass("fadein")
      $('#print').addClass("fadestart").removeClass("fadein")

    }
  }
})
