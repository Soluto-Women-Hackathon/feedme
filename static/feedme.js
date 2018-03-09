$(document).ready(function(){

		function loadData(){
			$( "<div/>", {
    				"class": "row"
  				}).appendTo( ".container" );
			$.getJSON( "data.json", function( data ) {
  			$.each( data, function( key, val ) {
  				var line = val;
  				var name = line.name;
  				var product = line.product;
  				var contact = line.contact;
  				var img = line.img;
  				$( "<div/>", {
    					"class": "col-sm-4",
    					html: "<div class='oneData'>" + "<img class='productImg' src='" + line.img + "'/><br>" + "<span class='productData'>" + line.product + "</span><br>" + "<span class='commentData'>" + line.comments + "</span><br><br>" + "<span class='addressData'>" + line.address + "</span><br>" + "<span class='expiryData'>Expiration Date: " + line.expiry_date + "</span>" + "</div>"
  					}).appendTo( ".row" );
  			});
 
			});
		}

		loadData();
});