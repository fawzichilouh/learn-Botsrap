/* global $  */
$(function() { 
    $('.carousel').carousel({
        interval: 5000
      });

    //toggle option box 
    $('.gear-check').click(function(){
     $('.color-option').fadeToggle();
    });

    //Change Theme color
   var colLi=$('.option-box .color-option ul li');
     colLi
    .eq(0).css("backgroundColor","brown").end()    /*hadchi t9der diro b css whdha (ghir ka t affecti l li des color) */
    .eq(1).css("backgroundColor","#0eabe8").end()
    .eq(2).css("backgroundColor","#6b9835").end()
    .eq(3).css("backgroundColor","#f98408");

    colLi.click(function(){
      $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    //Loading 
    $(window).load(function()
    {
      $('body').css('overflow','auto');
      
     $(".loading-overflay .spinner").fadeOut(2000,function(){
       $(this).parent().fadeOut(1000);
     });
    });

    // scroll-top
    var scrltop=$('#scroll-top');
    $(window).scroll(function(){

      if($(this).scrollTop()>=600){
        scrltop.fadeIn(1000);    /*Ila kan scroll Top  (Distance 3la top) kbri 3la 600 , show me the button scroll top */
      }
      else {  //if($(this).scrollTop()<600)
        scrltop.fadeOut(1000);
      }
    }); //and scroll in window
   scrltop.click(function(){  //When you click in btn Scroll top It will animate ( scroll )body to top
    $('html,body').animate({ scrollTop: 0 },700 );
   });

});//End window.ready();