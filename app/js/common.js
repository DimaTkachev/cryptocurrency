/* Crypro-course */
$(function() {
	
	$.get(
		'https://api.cryptonator.com/api/ticker/btc-usd',
		{},
		function(data ) {
			$('.btc-value').append(' '+(+data.ticker.price).toFixed(2));
			if(data.ticker.change < 0){
				$('.btc-value i').removeClass('fa-sort-up').addClass('fa-sort-down')
			}
			else{
				$('.btc-value i').removeClass('fa-sort-down').addClass('fa-sort-up')
			}
		}
	);

	$.get(
		'https://api.cryptonator.com/api/ticker/eth-usd',
		{},
		function(data ) {
			$('.eth-value').append(' '+(+data.ticker.price).toFixed(2));
			if(data.ticker.change < 0){
				$('.eth-value i').removeClass('fa-sort-up').addClass('fa-sort-down')
			}
			else{
				$('.eth-value i').removeClass('fa-sort-down').addClass('fa-sort-up')
			}
		}
	);

	$.get(
		'https://api.cryptonator.com/api/ticker/ltc-usd',
		{},
		function(data ) {
			$('.ltc-value').append(' '+(+data.ticker.price).toFixed(2));
			if(data.ticker.change < 0){
				$('.ltc-value i').removeClass('fa-sort-up').addClass('fa-sort-down')
			}
			else{
				$('.ltc-value i').removeClass('fa-sort-down').addClass('fa-sort-up')
			}
		}
	);
});
	
/* hide or show the sub-menu */	
$(function(){
	$('.m-menu-item').hover(
		function(){
			if($(this).hasClass('has-sub')){
				$(this).addClass('active');
				$(this).children('.sub-menu').slideDown();
			}
		},
		function(){
			$(this).children('.sub-menu').hide();
			$(this).removeClass('active');
	});
});	

/* changing a placeholder */	
$(function(){
	$('.header-search-input').hover(
		function(){
			$(this).attr('placeholder', '');
		},
		function(){
			$(this).attr('placeholder', 'Поиск по сайту');
		}
	);
});


/* showing a news-preview */
$(function(){
	$('.news-item').hover(function(){
		if($(this).is(':hover')){
			$(this).find('.news-preview')
			.css('display', 'block')
			.animate({
				'top' : '0'
			}, 100);
		};
	},
	function(){
		$(this).find('.news-preview')
		.animate({
			'top' : '-370'
		},
		100, function(){$(this).css('display', 'none')}
		);
	})
});





