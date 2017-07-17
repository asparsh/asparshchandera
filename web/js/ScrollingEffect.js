
var senseSpeed = 5;
var previousScroll = 0;
$(window).scroll(function(event){
   var scroller = $(this).scrollTop();
   if (scroller-senseSpeed > previousScroll){
      $("div.header").filter(':not(:animated)').slideUp();
   } else if (scroller+senseSpeed < previousScroll) {
      $("div.header").filter(':not(:animated)').slideDown();
   }
   previousScroll = scroller;
});

/*
$(document).ready(function() {
	
	$(window).scroll(function() { 
	console.log($(window).scrollTop() +"Entered" + $('.about').offset().top);
		if($(window).scrollTop() > $('.about').offset().top ) {
					$(".navbar ").hide();
		}else{
			$(".navbar ").show();
		}
		
	});
}); */