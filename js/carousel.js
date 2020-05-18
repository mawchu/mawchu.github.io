
      // 主輪播圖
      let mainSliderWidth = $(".slider-wrap").width()
      // console.log(mainSliderWidth)
      let index = 0;
      let slideCount = $(".slider-img li").length;
      // console.log(slideCount)
      let currentW = $(window).width()

      // scroll選單定住
      let scrollLast = 0;
      let topDistance = $(".headerdiv").offset().top;


      //大標換行
      if(currentW>1190){
        $(".title-content-elements h1").html(`Design works<br>
                introduction`)
      }else{
        $(".title-content-elements h1").html(`Design works introduction`)
      }




      $(".slider-bar").on({
        mouseenter:function(){
          // $(this).addClass("active")
          // $(this).siblings().removeClass("active")

          index = $(this).index()
          // console.log(index)
          goTo();
        }
      })


      function goTo(){
        $(window).resize(function(){
          mainSliderWidth = $(".wrapper").width()
        })

        mainSliderMove = 0-index*mainSliderWidth;

        $(".slider-img").css("left",mainSliderMove)
        $(".slider-bar").eq(index).addClass("active").siblings().removeClass("active")



        if(index==2 && currentW<1190 && currentW>1040){
          $(".title-content-elements h1,.title-content-elements p").css("color","#fff")
        }else{
          $(".title-content-elements h1,.title-content-elements p").css("color","#4f3c3b")
        }

      }

      // console.log(mainSliderWidth)
      // 自動撥放
      let autoSlide = setInterval(slideTimer, 3000);
      function slideTimer(){
        index= index>=(slideCount-1) ? 0 : index+1;
        goTo();
      }

      $(window).resize(function(){
        mainSliderWidth = $(".wrapper").width()
        $(".slider-img").css("width", slideCount*mainSliderWidth)
        goTo();
      })





      // //作品牆輪播
      // // let w = $(".outer-wrapper").width()
      // // let m = $(".industry div figure").css("margin")
      // // let g = parseInt(m);
      // let workSliderWidth1 = $(".outer-wrapper").width()
      // // console.log(workSliderWidth1)
      // let worksIndex =0;
      // let worksSlideCount = $(".industry").length;
      //   // console.log(worksSlideCount)


      // $(".works-wall-slider-bars").on({

      //   mouseenter:function(){
      //     worksIndex = $(this).index()
      //     // console.log(worksIndex)
      //     goToWorks()

      //     //標題切換
      //     $(".subtitles").css("left",(0-126)*worksIndex)
      //   }
      // })
      // $(".works-wall-slider-bars-2").on({

      //   mouseenter:function(){
      //     worksIndex = $(this).index()
      //     // console.log(worksIndex)
      //     goToWorks()

      //     //標題切換
      //     $(".subtitles").css("left",(0-126)*worksIndex)
      //   }
      // })
      // $(".works-wall-slider-bars-3").on({

      //   mouseenter:function(){
      //     worksIndex = $(this).index()
      //     // console.log(worksIndex)
      //     goToWorks()

      //     //標題切換
      //     $(".subtitles").css("left",(0-126)*worksIndex)
      //   }
      // })
      // function goToWorks(){
      //   $(window).resize(function(){
      //   //    $(".inner-wrapper").css("left",0)

      //     workSlideWidth1 = $(".inner-wrapper li").width()
      //     // console.log(workSlideWidth1)
      //     $(".inner-wrapper").css("width", worksSlideCount*workSlideWidth1)
      //      goToWorks()

      //   })
      //   if (workSliderWidth1>576){
      //     workSliderMove1 = 0-worksIndex*(workSliderWidth1+40);
      //   } else if(workSliderWidth1<576){
      //     workSliderMove1 = 0-worksIndex*(workSliderWidth1+30);
      //   }

      //   // console.log(workSliderWidth1)
      //   $(".inner-wrapper").css("left",workSliderMove1)
      //   $(".works-wall-slider-bars").eq(worksIndex).addClass("active").siblings().removeClass("active")
      //   $(".content-4").find(".works-wall-slider-bars").eq(worksIndex).addClass("active").siblings().removeClass("active")

      //   $(".works-wall-slider-bars-2").eq(worksIndex).addClass("active").siblings().removeClass("active")
      //   $(".content-5").find(".works-wall-slider-bars-2").eq(worksIndex).addClass("active").siblings().removeClass("active")

      //   $(".works-wall-slider-bars-3").eq(worksIndex).addClass("active").siblings().removeClass("active")
      //   $(".content-6").find(".works-wall-slider-bars-3").eq(worksIndex).addClass("active").siblings().removeClass("active")

      // }

    //   $(window).resize(function(){
    //     workSlideWidth1 = $(".outer-wrapper").width()
    //     $(".inner-wrapper").css("width", worksSlideCount*workSlideWidth1)
    //     goToWorks();
    //   })


    $(window).on({
      scroll:function(){
        let scrollTop = $(this).scrollTop()
        // console.log(scrollTop)
        if(currentW>1190){
          // PC版 滾動之後
          if(scrollTop>topDistance){
            $(".headerdiv").addClass("scrollfixed").addClass("round").css("background","#ebcdcd")
            $(".menu-list .main-nav li a").removeClass("active").addClass("text-color").on({
              mouseenter:function(){
                $(this).addClass("active")
              },
              mouseleave:function(){
                $(this).removeClass("active")
              }
            })

            // logo替換
            $(".logo-A").css("display","none")
            $(".logo-B").css("display","block")
            $(".logo").css("width","80px").css("transform","translateX(40px)")
            $('.m-m-5').css('margin','50px 80px 0 80px')

            //  底線的位置
            $(".main-header div").css("transform","translateY(-35px)")
            $(".menu-underline").css("bottom","-36px")
          }else{
            // PC版 滾動之前 回到頂部
            $(".main-nav li a").eq(0).addClass("active")


            $(".logo-A").css("display","block")
            $(".logo-B").css("display","none")
            $('.m-m-5').css('margin','50px 80px 30px 80px')

            $(".headerdiv").removeClass("scrollfixed").removeClass("round").css("background","#fff")
            $(".logo").css("width","250px")
            $(".main-header div").css("transform","translateY(-40px)")
            $(".menu-underline").css("bottom","-46px")

          }
        }else{
          // 手機板 滾動之後
          if(scrollTop>topDistance){
            $(".headerdiv").addClass("scrollfixedm").css("background","#f1dcdb")

            $(".logo-A").css("display","none")
            $(".logo-B").css("display","block")
            $(".logo").css("width","75px")
            $(".menu-underline").css("bottom","-6px")
          }else{
            // 手機板 滾動之前 回到頂部
            $(".logo-A").css("display","block")
            $(".logo-B").css("display","none")
            $(".headerdiv").removeClass("scrollfixedm").css("background","#fff")
            $(".logo").css("width","140px")
            $(".menu-underline").css("bottom","-46px")
          }
        }
      }
    })

    if(currentW>760 && currentW<800){
      $("#lightboxImg").css("width","70%")
    }
