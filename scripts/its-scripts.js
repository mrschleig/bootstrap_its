
$(document).ready(function() {

//	$('.breadcrumb li:first-child a').html('ITS');

	var images = [
		'UMAngellHall.jpg', 
		'UMAngellHallFront.jpg', 
		'UMCampusSidewalk.jpg', 
		'UMCube.jpg', 
	//	'UMHillAuditorium.jpg', 
		'UMIngallsMallFountain.jpg', 
		'UMMuseumofArt.jpg', 
		'UMRackham.jpg', 
		'UMstadium.jpg', 
		'UMStuCampus.jpg', 
		'UMtoDiag.jpg', 
		'UMComputerRepair.jpg', 
		'UMArborLakesWinter.jpg', 
		'UMAngellHallComputingCenter.jpg', 
	//	'NCampus.jpg',
		'NCampusBellTower.jpg', 
		'NCampusStairway.jpg', 
		'NCampusFountain.jpg'
	];
	$('.region-header').css({'background-image': 'url(/sites/all/themes/bootstrap_its/images/' + images[Math.floor(Math.random() * images.length)] + ')'});

	$(".mobilebutton").click(function(){
		$(".region-header .globalnav ul").slideToggle("");
	});
	$(window).resize(function(){
	//	$(".region-header .globalnav ul").removeAttr("style");
	});

	$("div.region.region-sidebar-first.well .block-title").click(function(){
		$("div.region.region-sidebar-first.well ul.menu.nav").slideToggle("");
		$("div.region.region-sidebar-first.well .block-title").toggleClass('open');
	});
	$(window).resize(function(){
		$("div.region.region-sidebar-first.well ul.menu.nav").removeAttr("style");
	});

	$('a.dropdown-toggle').removeAttr('data-toggle');
	$('a.dropdown-toggle').removeAttr('data-target');

	$(".region-header .globalnav").accessibleDropDown();

	$(".image-zoom").fancybox({
		'autoScale'	: false,
		'titleShow'     : true,
		'titlePosition'	: 'over',
		'onClosed'	: function() {
			$("#fancy-content").empty();
		}
	});

	$(".modal-info").fancybox({
		'type'		: 'iframe',
		'autoDimensions': false,
		'autoScale'	: false,
		'width'		: 840,
		'height'	: 640,
		'padding'	: 0,
		'scrolling'	: 'auto',
		'titleShow'     : false,
		'onClosed'	: function() {
			$("#fancy-content").empty();
		}
	});

	$(".service-center-browsers-requirements .browser-requirement-exception").hide();
	$(".service-center-browsers-requirements .browser-requirement-title").click(function() {
		$(this).next(".browser-requirement-exception").slideToggle();
		$(this).toggleClass("open");
		});

});

$.fn.accessibleDropDown = function ()
{
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
}
