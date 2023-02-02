
(function($){
	"use strict";
	$(window).stellar({
		responsive:true,parallaxBackgrounds:true,parallaxElements:true,horizontalScrolling:false,hideDistantElements:false,scrollProperty:'scroll'
	});

	var fullHeight= () =>{
		$('.js-fullheight').css('height',$(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height',$(window).height());
			});
	};
	
	fullHeight();

	var loader= () => {
		setTimeout(function(){
			if($('#ftco-loader').length>0){
				$('#ftco-loader').removeClass('show');
			}},2200);
		};
	loader();


	var burgerMenu= () => {
		$('body').on('click','.js-fh5co-nav-toggle',function(event){
			event.preventDefault();
			if($('#ftco-nav').is(':visible')){
				$(this).removeClass('active');
				$('.bars').removeClass('hide');
			}else{
				$(this).addClass('active');
				$('.bars').addClass('hide');
			}
		});
	};
	burgerMenu();

	var onePageClick= () => {
		$(document).on('click','#ftco-nav a[href^="#"],.ftco-footer-widget a[href^="#"],.ftco-hireme a[href="#Ask_question"],a[href="#social-links"],.gototop',function(event){
			event.preventDefault();
			var href=$.attr(this,'href');
			$('.bars').removeClass('hide');
			$('html, body').animate({
				scrollTop: $($.attr(this,'href')).offset().top},500,function(){});
			if($('#ftco-nav').hasClass('show')){
				$('#ftco-nav').removeClass('show');
			}
		});
	};
	onePageClick();

	var carousel= () =>{
		$('.home-slider').owlCarousel({
			loop:true,autoplay:true,margin:0,animateOut:'fadeOut',animateIn:'fadeIn',nav:false,autoplayHoverPause:false,items:1,
			navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
			responsive:{0:{items:1},600:{items:1},1000:{items:1}}});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this=$(this);
		console.log("clicked");
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded',true);
		$this.find('.dropdown-menu').addClass('show');
			},function(){
			var $this=$(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded',false);
			$this.find('.dropdown-menu').removeClass('show');
		});

	$('#dropdown04').on('show.bs.dropdown',function(){
		console.log('show');
	});

	var j=0,p = $('#demo');
	var map = "";
	function startTyping() {
	  var txt = 'I can develop, design, build projects using HTML, css, JS, Node JS, java, .net and last but not Least visual basic';
	  if (j < txt.length) {
	    map = map + txt.charAt(j);
	    p.text(`${map}`);
	    j++;
	    setTimeout(startTyping, 100);
	  }
	}

	var scrollWindow = () =>{
		var i = 0;
		$(window).scroll(function(){
			var st=$(this).scrollTop(),
			navbar=$('.ftco_navbar'),nav_brand=$('.navbar-brand span'),
			sd=$('.js-scroll-wrap');
			if(st>150){
				if(!navbar.hasClass('scrolled')){
					navbar.addClass('scrolled');
					nav_brand.toggleClass('text-shadow-orange');
					nav_brand.toggleClass('text-shadow-blue');
				}
			}
			if(st<150) {
				if(navbar.hasClass('scrolled')){
					navbar.removeClass('scrolled sleep');
					nav_brand.toggleClass('text-shadow-orange');
					nav_brand.toggleClass('text-shadow-blue');
				}
			}
			if(st > $('.ftco-about').offset().top - 100){
				$('.js-top').addClass('active');
				if(!navbar.hasClass('awake')){
					navbar.addClass('awake');
				}
				if(sd.length>0){
					sd.addClass('sleep');
				}
			}
			if(st < $('.ftco-about').offset().top - 100){
				if(navbar.hasClass('awake')){
					$('.js-top').removeClass('active');
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				} if(sd.length>0){
					sd.removeClass('sleep');
				}
			}
			if((st > $('.pages').offset().top - ($(window).height()/2)) && (st < $('.pages').offset().top + $('.pages').height() - ($(window).height()))) {
				$('.go-through').addClass('active');
				$('.gototop').addClass('cascade');
			} else {
				$('.go-through').removeClass('active');
				$('.gototop').removeClass('cascade');				
			}
			if(st >= $('.ftco-hireme').offset().top - $(window).height() && i==0 ) {
				i++;
				startTyping();
			}			
		});
	};

	scrollWindow();

	var counter= () => {
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function(direction){
			if(direction==='down'&& !$(this.element).hasClass('ftco-animated')){
				var comma_separator_number_step= $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this=$(this),num=$this.data('limit');
					// console.log(num);
					$this.animateNumber({
						number:num,numberStep:comma_separator_number_step},2000);
				});
			}
		},{offset:'95%'});
	}
	counter();

	var contentWayPoint= () => {
		var i=0;
		$('.ftco-animate').waypoint(function(direction){
			if(direction==='down'&&!$(this.element).hasClass('ftco-animated')){
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .ftco-animate.item-animate').each(function(k){
						var el=$(this);
						setTimeout(function(){
							var effect=el.data('animate-effect');
							if(effect==='fadeIn'){
								el.addClass('fadeIn ftco-animated');
							} else if(effect==='fadeInLeft'){
								el.addClass('fadeInLeft ftco-animated');
							} else if(effect==='fadeInRight'){
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},k*50,'easeInOutExpo');
					});
				},100);
			}
		},{offset:'95%'});
	};

	setTimeout(contentWayPoint,2290);

	var goHere=function(){
		$('.mouse-icon').on('click',function(event){
			console.log();
			event.preventDefault();
				$('html,body').animate({
					scrollTop:$('.goto-here').offset().top
				},400,'easeInOutBounce');
				return false;
		});
	};
	goHere();
	
	var TxtRotate=function(el,toRotate,period){
		this.toRotate=toRotate;
		this.el=el;
		this.loopNum=0;
		this.period=parseInt(period,10)||2000;
		this.txt='';
		this.tick();
		this.isDeleting=false;
	};

	TxtRotate.prototype.tick=function(){
		var i=this.loopNum%this.toRotate.length;
		var fullTxt=this.toRotate[i];

		if(this.isDeleting){
			this.txt=fullTxt.substring(0,this.txt.length-1);
		}else{
			this.txt=fullTxt.substring(0,this.txt.length+1);
		}

		this.el.innerHTML='<span class="wrap">'+this.txt+'</span>';
		var that=this;
		var delta=300-Math.random()*100;
		if(this.isDeleting){
			delta/=2;
		} if(!this.isDeleting && this.txt===fullTxt){
			delta=this.period;
			this.isDeleting=true;
		}else if(this.isDeleting&&this.txt===''){
			this.isDeleting=false;
			this.loopNum++;
			delta=500;
		}
		setTimeout(function(){
			that.tick();
		},delta);
	};


	window.onload=function(){
		var elements=document.getElementsByClassName('txt-rotate');
		for(var i=0;i<elements.length;i++){
			var toRotate=elements[i].getAttribute('data-rotate');
			var period=elements[i].getAttribute('data-period');
			if(toRotate){
				new TxtRotate(elements[i],JSON.parse(toRotate),period);
			}
		}
		var css=document.createElement("style");
		css.type="text/css";
		css.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
		document.body.appendChild(css);
	};
})(jQuery);

(function($){
	var sections=[];
	var id=false;
	var $navbara=$('#navigation a');
	$navbara.click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top-80},200);
		hash($(this).attr('href'));
	});

	$navbara.each(function(){
		sections.push($($(this).attr('href')));
	})
	$(window).scroll(function(e){
		var scrollTop=$(this).scrollTop()+($(window).height()/2);
		for(var i in sections){
			var section=sections[i];
			if(scrollTop>section.offset().top){
				var scrolled_id=section.attr('id');
			}
		}
		if(scrolled_id!==id){
			id=scrolled_id;
			$('#navigation ul li').removeClass('active');
			$('#navigation ul li a[href=\'#'+id+'\']').parent().addClass('active');
		}
	})
})(jQuery);



hash=function(h){
	if(history.pushState){
		history.pushState(null,null,h);
	}else{
		location.hash=h;
	}
}

$(function(){
	$(".progress").each(function(){
		var value=$(this).attr('data-value');
		var left=$(this).find('.progress-left .progress-bar');
		var right=$(this).find('.progress-right .progress-bar');
		if(value>0){
			if(value<=50){
				right.css('transform','rotate('+percentageToDegrees(value)+'deg)')
			}else{
				right.css('transform','rotate(180deg)')
				left.css('transform','rotate('+percentageToDegrees(value-50)+'deg)')
			}
		}
	})

	function percentageToDegrees(percentage){
		return percentage/100*360
	}
});
