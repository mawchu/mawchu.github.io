
//作品牆輪播
let nowIndex = 0;
const slideCount2 =$('.m-works-cate').length//要輪播的div數目
const slideBtn = $('.works-wall-slider-bars')
// console.log(slideCount2)//3

let carouselWidth = $(".m-wrapper").width()

$('.m-innerwrapper').css('left',0)
$(".subtitles").css("left",(0-126)*0)

//輪播按鈕會變粉紅色
slideBtn.removeClass("active").eq(0).addClass("active")
slideBtn.eq(3).addClass("active")
slideBtn.eq(6).addClass("active")


slideBtn.click(function(){

    nowIndex = $(this).index()
    console.log(nowIndex)
    $('.m-innerwrapper').css('left',0-carouselWidth*nowIndex)
    $(".subtitles").css("left",(0-126)*nowIndex)
    $(this).addClass("active").siblings().removeClass("active")

    slideBtn.eq(nowIndex).addClass("active").siblings().removeClass("active")
    slideBtn.eq(nowIndex+3).addClass("active").siblings().removeClass("active")
    slideBtn.eq(nowIndex+6).addClass("active").siblings().removeClass("active")
})


$(window).resize(function(){
    $('.m-innerwrapper').css('left',0)
    $(".subtitles").css("left",(0-126)*0)
    slideBtn.removeClass("active").eq(0).addClass("active")
    slideBtn.eq(3).addClass("active")
    slideBtn.eq(6).addClass("active")


    carouselWidth = $(".m-wrapper").width()
    // console.log(carouselWidth)
    slideBtn.click(function(){
        nowIndex = 0;
        $(this).addClass("active").siblings().removeClass("active")
        nowIndex = $(this).index()
        console.log(nowIndex)
        $('.m-innerwrapper').css('left',0-carouselWidth*nowIndex)
        $(".subtitles").css("left",(0-126)*nowIndex)
        $(this).addClass("active").siblings().removeClass("active")
    })
})

    

