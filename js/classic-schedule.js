(function ($) {
    Drupal.behaviors.cdgi = {
        attach: function(context) {


				scheduleFilter = 'All';

				$( ".schedule-filter a" ).click(function() {
					if(!$(this).hasClass('selected')) {
					  $( ".schedule-filter a" ).removeClass("selected");
					  $(this).addClass('selected');
					}
					if($(this).attr('data-day')){
						scheduleFilter = $(this).attr('data-day');
					} else {
						scheduleFilter = $(this).attr('data-type');
					}


						$( ".schedule-item" ).css('display', '');

					if(scheduleFilter !== "All") {
						$( ".schedule-item" ).each(function( index ) {

						  if(scheduleFilter !== $(this).attr('data-day-filter') && scheduleFilter !== $(this).attr('data-type-filter')){
						  	$(this).css('display', 'none');
						  }

						});
					}




					return false;
				});



				checkFilters = function() {

				}

			//});

		 }
    }
}(jQuery));
