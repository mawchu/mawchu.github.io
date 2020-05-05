//錨點捲動緩衝

$(".main-nav li a").click(function() {

  let href = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(href).offset().top + "px"
    }, {
        duration:  $(href).offset().top / 3,
        easing: "swing"
    });
    return false;
});

$(".drop-select li").click(function () {
  let hrefDrop = $(this).find("a").attr("href")
    $("html, body").animate({
        scrollTop: $(hrefDrop).offset().top + "px"
    }, {
        duration:  $(hrefDrop).offset().top / 3,
        easing: "swing"
    });
    return false;
});

$(".view-more-btn").click(function() {

  let href = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(href).offset().top + "px"
    }, {
        duration:  $(href).offset().top / 3,
        easing: "swing"
    });
    return false;
});

$(".contact-btn").click(function() {

  let href = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(href).offset().top + "px"
    }, {
        duration:  $(href).offset().top / 3,
        easing: "swing"
    });
    return false;
});


$(".scroll-btn").click(function() {

  let href = $(this).find("a").attr("href")
    $("html, body").animate({
        scrollTop: $(href).offset().top + "px"
    }, {
        duration:  $(href).offset().top / 3,
        easing: "swing"
    });
    return false;
});
