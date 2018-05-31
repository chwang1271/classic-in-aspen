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

        }
    }
}(jQuery));
