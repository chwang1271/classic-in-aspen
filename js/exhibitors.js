var detect_device = 'desktop';
      isPhone = navigator.userAgent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|iPhone|android|iemobile|mobile)/i) != null;
      isTablet = navigator.userAgent.match(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i) != null;
      if (isTablet) isPhone = false;
      if (isPhone) detect_device = 'phone';
      if (isTablet) detect_device = 'tablet';
window.bcJumpstart = {players:new Array()};

           (function ($) {
   Drupal.behaviors.cdgi = {
       attach: function(context) {

        $( ".faq-question h3" ).click(function() {
     if($(this).hasClass('open')){
       $(this).removeClass('open');
       $(this).closest('.faq-question').find('.faq-response').slideUp( 250 );
     } else {
       $(this).addClass('open');
       $(this).closest('.faq-question').find('.faq-response').slideDown( 250 );
     }
   });

   jQuery.extend( jQuery.easing,
   {
     def: 'easeOutCustom',
     swing: function (x, t, b, c, d) {
       return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
     },
     easeOutCustom: function (x, t, b, c, d) {
       return -c *(t/=d)*(t-2) + b;
     }
   });



       $(".aspen-anchors a").click(function() {
     $($(this).attr('href')).find('h3').addClass('open');
           $($(this).attr('href')).find('.faq-response').slideDown( 0 );
     var navHeight = parseInt($(".classic_aspen_header").outerHeight());
     var targetOffset = parseInt($($(this).attr('href')).offset().top);
     var targetCurOffset = targetOffset-navHeight-55;
     $('html, body').animate({
              scrollTop: targetCurOffset
            }, 500, "easeOutCustom");

           return false;
       });


       }
   }
}(jQuery));
