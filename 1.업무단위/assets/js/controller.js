$(function(){
	
	/*
	 * no more scroll table 
	$('#data_table').each(function(){
		if (($('tbody > tr',this).length > 10 ) || ($('tbody',this).height() > 331 )) {
			$(this).tableScroll({height:331,width:"1216"}); 
		}
	});
	*/
	
	
	//$('.top-menu select.custom').wrap('<span class="select-span" />').selectbox();
	//$('.login-form select.custom').wrap('<span class="select-span" />').selectbox();
	
	$(':input.w_placeholder').each(function(){
		var value = this.value;
		$(this).focus(function(){
			var $this = $(this);
			if(this.value == value)
				setTimeout(function() {
					$this.caretToStart().addClass('focused');
				},100);
		}).blur(function(){
			if(this.value == ""){
				this.value = value;
				$(this).removeClass('focused').addClass('w_placeholder');
			} else if(this.value == value) {
				$(this).removeClass('focused');
			}				
		}).bind('keydown',function(){
			if(this.value == value){
				this.value = "";
				$(this).removeClass('focused w_placeholder');
			}
		});
		
	});
	/*
	$('.paging .page-number > a').click(function(e){
		e.preventDefault();
		$(this).closest('.page-number')
			.addClass('on')
			.siblings()
			.removeClass('on');
	});
	$('.paging .paging-btn > a').click(function(e){
		var btn = $(this).closest('.paging-btn');
		if (btn.is('.page-prev')) {
			//btn.siblings('.on').prev('.page-number').find('a').click();
			return false;
		}
		if (btn.is('.page-next')) {
			//btn.siblings('.on').next('.page-number').find('a').click();
			return false;
		}
	});*/
	$('.main-menu .menu > li > a').click(function(e){
		e.preventDefault();
		$(this).closest('li')
			.addClass('on')
			.siblings()
			.removeClass('on');
	});
	$('.tabs > a').click(function(e){
		e.preventDefault();
		$(this)
			.addClass('on')
			.siblings()
			.removeClass('on');
	});
	
	$('.apasses-popup .btn-close').click(function(e){
		e.preventDefault();
		$(this).closest('.apasses-popup').hide();
	});
	
	$('.btn-apasses').click(function(e){
		e.preventDefault();
		$(this).siblings('.apasses-popup').show();
	});
});

//Set caret position easily in jQuery
//Written by and Copyright of Luke Morton, 2011
//Licensed under MIT
(function ($) {
 // Behind the scenes method deals with browser
 // idiosyncrasies and such
 $.caretTo = function (el, index) {
     if (el.createTextRange) { 
         var range = el.createTextRange(); 
         range.move("character", index); 
         range.select(); 
     } else if (el.selectionStart != null) { 
         el.focus(); 
         el.setSelectionRange(index, index); 
     }
 };

 // The following methods are queued under fx for more
 // flexibility when combining with $.fn.delay() and
 // jQuery effects.

 // Set caret to a particular index
 $.fn.caretTo = function (index, offset) {
     return this.queue(function (next) {
         if (isNaN(index)) {
             var i = $(this).val().indexOf(index);
             
             if (offset === true) {
                 i += index.length;
             } else if (offset) {
                 i += offset;
             }
             
             $.caretTo(this, i);
         } else {
             $.caretTo(this, index);
         }
         
         next();
     });
 };

 // Set caret to beginning of an element
 $.fn.caretToStart = function () {
     return this.caretTo(0);
 };

 // Set caret to the end of an element
 $.fn.caretToEnd = function () {
     return this.queue(function (next) {
         $.caretTo(this, $(this).val().length);
         next();
     });
 };
}(jQuery));

/* 열고닫기 컨트롤*/

$(function(){
	$('.left-menu > li > a').click(function(e){
		if ($(this).closest('li').is('.on')) return;
		$(this).closest('li').addClass('on')
			.children('ul').hide()
			.slideDown()
			.end()
			.siblings('.on').removeClass('on')
			.children('ul').show()
			.slideUp();
	});
	
	$('.graph-switcher > a').click(function(e){
		e.preventDefault();
		var graph = $(this).closest('.graph-switcher').siblings('.graph-holder');
		if (graph.is(':hidden')){
			graph.slideDown();
			$(this).find('img').attr('src',function(i,src){
				return src.replace('-open.','-close.');
			});
		} else {
			graph.slideUp();
			$(this).find('img').attr('src',function(i,src){
				return src.replace('-close.','-open.');
			});
		}
	});
	
	/*
	$('.paging .page-number > a').click(function(e){
		e.preventDefault();
		$(this).closest('.page-number')
			.addClass('on')
			.siblings()
			.removeClass('on');
	});
	$('.paging .paging-btn > a').click(function(e){
		var btn = $(this).closest('.paging-btn');
		if (btn.is('.page-prev')) {
			btn.siblings('.on').prev('.page-number').find('a').click();
			return false;
		}
		if (btn.is('.page-next')) {
			btn.siblings('.on').next('.page-number').find('a').click();
			return false;
		}
	});*/
});