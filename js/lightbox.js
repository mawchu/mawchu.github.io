let photoIndex = 0;// 抓Total 24張的index
let groupIndex = 0;//抓區域

let photoNum = 1;
let groupNum =24;


//燈箱淡入淡出效果
function out() {
  $(".lightbox-wrap").fadeOut(800)
  setTimeout(function () {
    $(".lightbox-wrap").css("display", "none")
          $("body").css("overflow-y", "auto")

    // $("body").css("scroll", "visible")
  }, 700);
}
function show() {
    $("body").css("overflow-y", "hidden")
  setTimeout(function () {

    $(".lightbox-wrap").css("display", "block")
  }, 800);
  $(".lightbox-wrap").fadeIn(700)
}

// 將圖檔名稱跑迴圈
for(let photoNum=1; photoNum<25; photoNum++){



    //圖片路徑 大張的
    $(".works-img").eq(photoNum-1).find("img").attr("data-src",`4/1/lightbox${photoNum}.jpg`)
    $(".works-img").eq(photoNum+groupNum-1).find("img").attr("data-src",`4/2/lightbox${photoNum}.jpg`)
    $(".works-img").eq(photoNum+(groupNum*2)-1).find("img").attr("data-src",`4/3/lightbox${photoNum}.jpg`)

    //圖片路徑 小張的
    $(".works-img").eq(photoNum-1).find("img").attr("src",`1/works-clip-${photoNum}.jpg`)
    $(".works-img").eq(photoNum+groupNum-1).find("img").attr("src",`2/works-clip-${photoNum}.jpg`)
    $(".works-img").eq(photoNum+(groupNum*2)-1).find("img").attr("src",`3/works-clip-${photoNum}.jpg`)

    // console.log($(".works-img").eq(photoNum-1).find("img").attr("data-src"))
}

//燈箱每區限制8張
$(".works-img").on({
  click: function () {
    show();
    photoIndex = $(".works-img").toArray().indexOf(this)
    groupIndex = Math.floor(photoIndex / 8);//第幾區取商數
    // console.log(photoIndex)
    // console.log(groupIndex)

    $(".lightbox-wrap").css("top", "0")
    $(".lightbox-wrap").css("display", "block")
    $(".lightbox-wrap").css("overflow", "hidden")

    let imgSrc = $(this).find("img").attr("data-src")
    let imgCaption = $(this).find("img").attr("data-caption")

    let browserW = $(window).width()
    let figureImgW = $(".lightbox figure img").width()
    let figureImgH = $(".lightbox figure img").height()
    // console.log(imgCaption)
    $(".lightbox figure img").attr("src", imgSrc)
    $(".lightbox figure figcaption").text(imgCaption).width(figureImgW)
    // $("body").css("overflow", "hidden")

  }
})

//關閉視窗淡出
$(".close-btn").on({
  click: function () {
    out();
  }
})

function catchFile(){
  //讓圖片在八張中循環
  let photoSetIndex=photoIndex%8;//查找此區域中的第幾張
  let photoContentIndex=groupIndex*8+photoSetIndex;//查找他是第幾區的第幾張
  // console.log(photoSetIndex)
  console.log(photoContentIndex)

  let nextImg = $(".works-img img").eq(photoContentIndex).attr("data-src")
  let nextContent = $(".works-img img").eq(photoContentIndex).attr("data-caption")
  // console.log(nextImg)
  $(".lightbox figure img").attr("src", nextImg)
  $(".lightbox figure figcaption").text(nextContent)
}


$(".prev-btn").on({
  click: function () {
    photoIndex--;

    if (photoIndex<0){
      photoIndex=7
      catchFile();
    }else{
      catchFile();
    }

  }
})

$(".next-btn").on({
  click: function () {
    photoIndex++;
    // console.log(groupIndex)

    catchFile();

  }
})
