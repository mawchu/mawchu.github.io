//手勢滑動
let swipeIndex = 0;

$(".slider-wrap").swipe( {
  //Generic swipe handler for all directions
  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
    // $(this).text("You swiped " + direction );  
    
    if(direction=='left'){
      swipeIndex++;
      
      if(swipeIndex>2){
        swipeIndex=0;
        $(".slider-img").css('left',0-swipeIndex*mainSliderWidth)
        $('.slider-bar').removeClass('active').eq(swipeIndex).addClass('active')
      }else{
        $(".slider-img").css('left',0-swipeIndex*mainSliderWidth)
        $('.slider-bar').removeClass('active').eq(swipeIndex).addClass('active')
      }
    }else if(direction=="right"){
      swipeIndex--;
      
      if(swipeIndex<0){
        swipeIndex=2;
        $(".slider-img").css('left',0-swipeIndex*mainSliderWidth)
        $('.slider-bar').removeClass('active').eq(swipeIndex).addClass('active')
      }else{
        $(".slider-img").css('left',0-swipeIndex*mainSliderWidth)
        $('.slider-bar').removeClass('active').eq(swipeIndex).addClass('active')
      }
    }

    
  }
});