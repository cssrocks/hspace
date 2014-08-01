head.ready(function() {

	function tab() {
		$(".js-tab-nav").each(function(){
			var tab_link = $(this).children().find("a");
			var tab_cont = $(this).parents(".js-tabs").find(".js-tabs-pane");
			tab_link.bind("click", function() {
				var index = $(this).attr("href");
						tab_link.removeClass("is-active");
						tab_link.parent().removeClass("is-active");
				$(this).addClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.removeClass('is-active');
				$(index).addClass('is-active');
				return false;
			});
		});
		}
	tab();


	$('.js-slider').each(function(){
		var p = this.parentNode;
		$(this).cycle({
			fx: "carousel",
			// autoHeight: "container",
			timeout:  0,
			carouselVisible: 3,
			slideActiveClass: "is-active",
			pagerActiveClass: "is-active",
			disabledClass: "is-disabled",
			slideClass: "slider__slide",
			allowWrap: true,
			carouselFluid: "true",
			slides: $('.slider__slide', p),
			prev:   $('.slider__prev', p),
			next:   $('.slider__next', p),
		});
	});

	$(' .js-news ').children().hide();
	$(' .js-news ').children().first().show();

	$(' .js-news-more ').on('click', function() {
		if($(' .js-news ').hasClass('is-active')){
			$(' .js-news ').removeClass('is-active');
			$(' .js-news ').children().hide();
			$(' .js-news ').children().first().show();
		} else {
			$(' .js-news ').children().show();
			$(' .js-news ').addClass('is-active');
		}
		return false;
	});

	$(' .js-faq-more ').on('click', function() {
		$(' .js-faq ').children().removeClass('is-hidden');
		return false;
	});

	// Navigation
	$('.js-nav a').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 20
		}, 500, 'swing', function () {
				// window.location.hash = target;
		});
	});

	function navScroll(){
		$('.section').each(function(){
			var pos = $(this).offset().top;
			var id = $(this).attr('id');
			var top = ($('.page').offset().top - 80);
			if( $(window).scrollTop() >= (pos - 79)){
				$('.js-nav li').removeClass('is-active');
				$('[href = #'+id+']').parent().addClass('is-active');
			}
			if($(window).scrollTop() < top){
				$('.js-nav li').removeClass('is-active');
			}
		});
	}

	$(window).scroll(function() {
		navScroll();
	});


	// Navigation
	$('.js-place').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60
		}, 500, 'swing', function () {
				// window.location.hash = target;
		});
	});
	// Navigation
	$('.up').on('click',function (e) {
		e.preventDefault();

		var target = this.hash,
		$target = $(target);

		$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 60
		}, 500, 'swing', function () {
				// window.location.hash = target;
		});
	});

});