// JavaScript Document
$(document).ready(function(){
	/////////////////////////////////////////////////////
	// aktuellen Link automatisch .akt zuweisen /////////
	/////////////////////////////////////////////////////
	// alle id in Reihenfolge in das Array! -----------//
	var navlink = new Array(                           //
		'#damas_lounge',                               //
		'#menu',                                       //
		'#gallerie',                                     //
		'#reserv',
		'#kontakt'                                       //
	);                                                 //
	//Höhe der fixierten Navi eintragen (nicht fix = 0)// 
	var navHeigth = 70;                                //
	var ersterLinkBeiNull = false; //true,false;/////////
	//gib dem footer die id="ende" !!!!!!!!!!!!!!!!!!!!//
	/////////////////////////////////////////////////////

	//ab hier nix mehr ändern
	if(ersterLinkBeiNull == true)$('a[href="'+navlink[0]+'"]').addClass('akt');
	//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
if($(window).width() < 1000){
				$("#topnav > p:nth-child(1)").prependTo('#topheader');
			}
			else{
				$("#topheader > p:nth-child(1)").prependTo('#topnav');}
		//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
	
	//Wenn gescrollt wird ...     
	$(window).scroll(function(){

		//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
			/*if($(window).width() > 1000){*/
				if($(window).scrollTop() > 50) {

					$('#topnav ul').addClass("new_style_ul");
					$('#topnav ul a').addClass("whitecolor");
					/*$('p#burgerbutt').css({"transform":"translateX(-20px) translateY(calc(35px - 50%))"});*/

	//				$('p#burgerbutt').css("background-color","yellow");
				}
				else {
					$('#topnav ul').removeClass("new_style_ul");
					$('#topnav ul a').removeClass("whitecolor");
					/*$('p#burgerbutt').css({"transform":"translateX(-20px) translateY(calc(30px - 50%))"});*/
				}
				if($(window).scrollTop() > 50) {
					$('img[src*="kunafa"]').css("-webkit-filter","grayscale(1)");
					$('img[src*="kunafa"]').css("filter","grayscale(1)");
				}
				else{
					$('img[src*="kunafa"]').css("-webkit-filter","none");
					$('img[src*="kunafa"]').css("filter","none");
				}
			/*}else
			{
				if($(window).width() <= 1000)
				   {
					   if($(window).scrollTop() > 50) {
						  /* $('#topnav ul').addClass("ul_m");
						   $('#topnav ul a').addClass("ul_a_m");
					   }
				   }
		   }*/
			if($(window).width() < 1000){
				$("#topnav > p:nth-child(1)").prependTo('#topheader');
			}
			else{
				$("#topheader > p:nth-child(1)").prependTo('#topnav');}
		//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
		
		
		//aktuelle y-Position ////////////////////////////////
		var topnow = $(window).scrollTop();

		//function für die einzelnen Article starten ///////
		var x;
		for(x = 0 ; x < navlink.length ; x++){	//durchläuft alle article-id
			if( x < (navlink.length-1)){		//alle article, aber nicht der letzte
				var anf = $(navlink[x]).offset().top - navHeigth -1;
				var end = $(navlink[(x+1)]).offset().top - navHeigth -1;
				AktLink(navlink[x],anf,end,topnow);
			}
			else { 								//letzter article
				var anf = $(navlink[x]).offset().top - navHeigth -1;
				var end = $('#ende').offset().top;
				AktLink(navlink[x],anf,end,topnow);
			}
		}
		
		
	});  
	//Klasse akt zuweisen (function) -> per css .akt formatieren ///
	function AktLink(link,idStart,idEnd,pos){
		if(pos >= idStart && pos < idEnd){
			$('nav a[href="'+link+'"]').addClass('akt');
		}
		else {
			$('nav a[href="'+link+'"]').removeClass('akt');
		}
	}  

	/////////////////////////////////////////////////////
	// Zum aktuellen Link sliden  ///////////////////////
	/////////////////////////////////////////////////////
	$('nav a').click(function(){
		var link = $(this).attr('href'); 
		$('html,body').animate({scrollTop:($(link).offset().top - navHeigth)},1000);
	});

	
	$('.mail').html('<a href="mailto:info@damaskus_l.com">info@damaskus_l.com</a>');
	
	
	/*if($(window).width() < 1000){
				if($('#navchecker').is(':checked')){
					alert('ddddddddd');
					$('img[src*="kunafa"]').css("-webkit-filter","grayscale(1)");
					$('img[src*="kunafa"]').css("filter","grayscale(1)");
				}
			}*/
});  