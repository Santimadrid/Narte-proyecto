$(document).ready(function(){
	$('.carousel-indicators li').click(function(){
		$(".fecha").css("display","block");
	});

/*$(window).scroll(function(){
	var position = $(window).scrollRigth();
	var pos2 = $('.fondo').offset().rigth;
	if(posicion == pos2){
			$('.fondo1').autoplay();
		}
})*/


// pasar y devolber//


	var posicion = 0;

	desaparecerflecha()
	$('.pasar').on('click', function(){

		 posicion += 1370
		 $("body, html").animate({
			scrollLeft: posicion+"px"
		},2000);

		 desaparecerflecha()
	});


	
	$('.devolber').on('click', function(){
		posicion -= 1370
		$("body, html").animate({
		scrollLeft: posicion - "px"
		},2000);

		desaparecerflecha()
	});

	function desaparecerflecha() {
		if (posicion == 0) {

			$('.devolber').css("display", "none");
		}else{
			$('.devolber').css("display", "block");
		}


		if (posicion == 1370) {

			$('.pasar').css("display", "none");
		}else{
			$('.pasar').css("display", "block");
		}
		
		console.log(posicion)
	}

	
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



//ventana fondo//

	
	/*var Myvideo = document.getElementByClass('fondo1')
		if(posicion == pos2){
			$('.fondo1').autoplay();
		}*/

	
// Fin ventana flotante realidad aumentada//

// ventana benjamin video//
	$('.viderr').hide();

	$('.video4').on('click', function(){
		$('.viderr').slideToggle(1000);
	});

	
// FIN ventana benjamin video//

// ventana Ether video//
	$('.videoSec5').hide();

	$('.video5').on('click', function(){
		$('.videoSec5').slideToggle(1000);
	});

	
// FIN ventana Enther video//

// ventana Katherine video//
	$('.vide').hide();

	$('.video1').on('click', function(){
		$('.vide').slideToggle(1000);
	});

	$('video1').on('click', function(){
		$('.vide');
	})
	
	
// FIN ventana  video//

// ventana Esther video//
	$('.vider').hide();

	$('.video2').on('click', function(){
		$('.vider').slideToggle(1000);
	});
	
	
// FIN ventana Esther video//


// ventana benoit video//
	$('.videro').hide();

	$('.video3').on('click', function(){
		$('.videro').slideToggle(1000);
	});
	
	
// FIN ventana benoit video//

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


	var Animacion1 = document.getElementById('video1');
	$('.btn-se1').click(function(){
		Animacion1.play();
		Animacion2.pause();
		Animacion3.pause();
		Animacion4.pause();
		Animacion5.pause();
		Animacion6.pause();
	});

	var Animacion2 = document.getElementById('video2');
	$('.btn-se2').click(function(){
		Animacion1.pause();
		Animacion2.play();
		Animacion3.pause();
		Animacion4.pause();
		Animacion5.pause();
		Animacion6.pause();
	});

	var Animacion3 = document.getElementById('video3');
	$('.btn-se3').click(function(){
		Animacion1.pause();
		Animacion2.pause();
		Animacion3.play();
		Animacion4.pause();
		Animacion5.pause();
		Animacion6.pause();
	});

	var Animacion4 = document.getElementById('video4');
	$('.btn-se4').click(function(){
		Animacion1.pause();
		Animacion2.pause();
		Animacion3.pause();
		Animacion4.play();
		Animacion5.pause();
		Animacion6.pause();
	});

	var Animacion5 = document.getElementById('video5');
	$('.btn-se5').click(function(){
		Animacion1.pause();
		Animacion2.pause();
		Animacion3.pause();
		Animacion4.pause();
		Animacion5.play();
		Animacion6.pause();
	});

	var Animacion6 = document.getElementById('video6');
	$('.btn-se6').click(function(){
		Animacion1.pause();
		Animacion2.pause();
		Animacion3.pause();
		Animacion4.pause();
		Animacion5.pause();
		Animacion6.play();
	});
	


	$('.btn-se1').on('click', function(){
		$('.sec2').hide();
		$('.sec3').hide();
		$('.sec4').hide();
		$('.sec5').hide();
		$('.sec6').hide();
		$('.sec1').fadeTo('fast', 1);

	});


	$('.sec2').hide();

	$('.btn-se2').on('click', function(){
		Animacion1.pause();
		$('.sec1').hide();
		$('.sec3').hide();
		$('.sec4').hide();
		$('.sec5').hide();
		$('.sec6').hide();
		$('.sec2').fadeTo('fast', 1);
	});

	$('.sec3').hide();

	$('.btn-se3').on('click', function(){
		$('.sec1').hide();
		$('.sec2').hide();
		$('.sec4').hide();
		$('.sec5').hide();
		$('.sec6').hide();
		$('.sec3').fadeTo('fast', 1);
	});

	$('.sec4').hide();

	$('.btn-se4').on('click', function(){
		$('.sec1').hide();
		$('.sec2').hide();
		$('.sec3').hide();
		$('.sec5').hide();
		$('.sec6').hide();
		$('.sec4').fadeTo('fast', 1);
	});

	$('.sec5').hide();

	$('.btn-se5').on('click', function(){
		$('.sec1').hide();
		$('.sec2').hide();
		$('.sec3').hide();
		$('.sec4').hide();
		$('.sec6').hide();
		$('.sec5').fadeTo('fast', 1);
	});

	$('.sec6').hide();

	$('.btn-se6').on('click', function(){
		$('.sec1').hide();
		$('.sec2').hide();
		$('.sec3').hide();
		$('.sec4').hide();
		$('.sec5').hide();
		$('.sec6').fadeTo('fast', 1);
	});


$('.menu-slider li').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
});


	




	
});