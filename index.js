$(document).ready(function () {
    
    // 下拉選單

    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find("ul").slideUp();
        $(this).parent().find("ul").slideToggle();
    });

    // 輪播banner

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // top
      $(".top a").click(function (e) { 
        e.preventDefault();
        $("html,body").animate(
          {scrollTop:0}, 700);
      });

});