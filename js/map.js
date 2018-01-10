function initMap() { 
		var nerdsLocation = {lat: 59.938845, lng: 30.32336}; 
		var centerMap = {lat: 59.93919973, lng: 30.32169852};
		var map = new google.maps.Map(document.getElementById('map'), 
			{ zoom: 17, 
			center: centerMap }); 
		
		var image = 'img/map-marker.png'; 
		var marker = new google.maps.Marker({ position: nerdsLocation, map: map, icon: image }); }