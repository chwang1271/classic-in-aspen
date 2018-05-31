(function ($) {
    Drupal.behaviors.cdgi = {
        attach: function(context) {

         function initialise() {


		var myLatlng = new google.maps.LatLng(39.189333, -106.819720); // Add the coordinates
		var mapOptions = {
			zoom: 16, // The initial zoom level when your map loads (0-20)
			minZoom: 6, // Minimum zoom level allowed (0-20)
			maxZoom: 19, // Maximum soom level allowed (0-20)
			zoomControl:true, // Set to true if using zoomControlOptions below, or false to remove all zoom controls.
			zoomControlOptions: {
  				style:google.maps.ZoomControlStyle.DEFAULT // Change to SMALL to force just the + and - buttons.
			},
			center: myLatlng, // Centre the Map to our coordinates variable
			mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the type of Map
			scrollwheel: false, // Disable Mouse Scroll zooming (Essential for responsive sites!)
			// All of the below are set to true by default, so simply remove if set to true:
			panControl:false, // Set to false to disable
			mapTypeControl:false, // Disable Map/Satellite switch
			scaleControl:false, // Set to false to hide scale
			streetViewControl:false, // Set to disable to hide street view
			overviewMapControl:false, // Set to false to remove overview control
			rotateControl:false // Set to false to disable rotate control
	  	}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions); // Render our map within the empty div



		var locations = [
		  ['<h3>Aspen Brewing Company</h3>', 39.190334, -106.820307],
		  ['<h3>Belly Up Aspen</h3>', 39.1874621, -106.8188021],
		  ['<h3>Pitkin Country Dry Goods/h3>', 39.1881264, -106.8181104],
		  ['<h3>Kemo Sabe</h3>', 39.188339, -106.8190709],
		  ['<h3>Remede Spa</h3>', 39.1876555, -106.8211306],
		  ['<h3>Ajax Tavern</h3>', 	39.1867885, -106.8168188],
		  ['<h3>J Bar</h3>', 39.191279, -106.8194154],
		  ['<h3>Silver Queen Gondola to the Sundeck</h3>', 39.18705, -106.817899],
		  ['<h3>Main Street Bakery</h3>', 39.1908406, -106.8214788],
		  ['<h3>Ink! Coffee Company</h3>', 	39.1874574, -106.8184475],
		  ['<h3>Victoria\'s Espresso</h3>', 39.1873713, -106.8187446],
		  ['<h3>Chef\'s Club</h3>', 39.1867406, -106.8215018],
		  ['<h3>Maroon Bells</h3>', 39.118957, -107.022661]
    	];

		var iconURLPrefix = 'https://www.foodandwine.com/microsites/2016-aspen-classic/insiders-guide/map/';

		var icons = [
      iconURLPrefix + 'marker-1.png',
      iconURLPrefix + 'marker-2.png',
	  iconURLPrefix + 'marker-3.png',
	  iconURLPrefix + 'marker-4.png',
	  iconURLPrefix + 'marker-5.png',
	  iconURLPrefix + 'marker-6.png',
	  iconURLPrefix + 'marker-7.png',
	  iconURLPrefix + 'marker-8.png',
	  iconURLPrefix + 'marker-9.png',
	  iconURLPrefix + 'marker-10.png',
	  iconURLPrefix + 'marker-11.png',
	  iconURLPrefix + 'marker-12.png',
	  iconURLPrefix + 'marker-13.png',
	  iconURLPrefix + 'marker-14.png',
	  iconURLPrefix + 'marker-15.png',
	  iconURLPrefix + 'marker-16.png',
	  iconURLPrefix + 'marker-17.png',
	  iconURLPrefix + 'marker-18.png',
    	]
		var infowindow = new google.maps.InfoWindow();
		var markers = new Array();
		var iconCounter = 0;
		for (var i = 0; i < locations.length; i++) {
 		  var image = new google.maps.MarkerImage(icons[iconCounter], null, null, null, new google.maps.Size(40,52)); // Create a variable for our marker image.
		  var marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map,
			icon: image
		  });

		  markers.push(marker);

		  google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
			  infowindow.setContent(document.getElementById('marker-'+i).innerHTML);
			  infowindow.open(map, marker);
			}
		  })(marker, i));

		  iconCounter++;

		}

		google.maps.event.addDomListener(window, 'resize', function() { map.setCenter(myLatlng); }); // Keeps the Pin Central when resizing the browser on responsive sites
	}
	google.maps.event.addDomListener(window, 'load', initialise); // Execute our 'initialise' function once the page has loaded.

        }
    }
}(jQuery));
