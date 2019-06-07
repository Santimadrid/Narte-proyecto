$(document).ready(function(){
	$('.carousel-indicators li').click(function(){
		$(".fecha").css("display","block");
	});

// pasar y devolber//


	var posicion = 0;
	$('.pasar').on('click', function(){

		 posicion += 1370
		 $("body, html").animate({
			scrollLeft: posicion+"px"
		},2000); 
		
	});

	var posicion2 = 0;
	$('.devolber').on('click', function(){
		posicion2 -= 1370
		$("body, html").animate({
		scrollLeft: posicion2 - "px"
		},2000);

		
	});
	
//ventana flotante realidad aumentada//
	
	$('.iconki').on('click', function(){
		$('.realidad').css('display', 'flex');
		$('.realidad').css('opacity', '1');

	$('.x').on('click', function(){
		$('.realidad').css('display', 'none');
		$('.realidad').css('opacity', '0');
	});
	});
// Fin ventana flotante realidad aumentada//

//seccion dos//

	$('.textoDos').on('click', function(){
		$('.dos .textDos').css('opacity', '1');
	});

	$('.x').on('click', function(){
		$('.dos .textDos').css('opacity', '0');
	});



	$('.textoTres').on('click', function(){
		$('.dos .textTres').css('opacity', '1');
	});

	$('.x').on('click', function(){
		$('.dos .textTres').css('opacity', '0');
	});


	$('.textoCuatro').on('click', function(){
		$('.dos .textCuatro').css('opacity', '1');
	});

	$('.x').on('click', function(){
		$('.dos .textCuatro').css('opacity', '0');
	});


	$('.textoCinco').on('click', function(){
		$('.dos .textCinco').css('opacity', '1');
	});

	$('.x').on('click', function(){
		$('.dos .textCinco').css('opacity', '0');
	});


	$('.textoSeis').on('click', function(){
		$('.dos .textSeis').css('opacity', '1');
	});

	$('.x').on('click', function(){
		$('.dos .textSeis').css('opacity', '0');
	});


	
});