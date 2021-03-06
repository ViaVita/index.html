// get rid of the browser chrome for mobile Safari on page load
// first check to see if it's an iPhone or iPod - as this is useless for other browsers
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
	// if going to a comments section, don't apply the mobile Safari position fix	
	if (document.URL.indexOf('#') == -1) {
		window.addEventListener("load",function() {
			setTimeout(function(){
				// and just to make sure they haven't scrolled down yet
				// don't want to piss the user off by jumping around	
				// 20 is if they had only scrolled down a little bit, 
				// but not fully out of view of the browser chrome
				if (window.pageYOffset < 20) {
					window.scrollTo(0, 1);
				}				
			}, 0);
		});
	}
}

// PLACEHOLDERS
(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));

// OPEN .PDF'S AND EXTERNAL LINKS IN A NEW WINDOW
function buildExternal() {
	$('a[href^="http:"], a[href^="https:"]').not('[href*="'+document.domain+'"]').attr('target','_blank').attr('rel', 'noopener noreferrer');
	$('a[href$=".pdf"]').attr('target', '_blank').attr('rel', 'noopener noreferrer');
}

// CHROME AUTO-COMPLETE RESET
if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
	$(window).load(function(){
		$('input:-webkit-autofill').each(function(){
			var text = $(this).val();
			var name = $(this).attr('name');
			$(this).after(this.outerHTML).remove();
			$('input[name=' + name + ']').val(text);
		});
	});
}

$(function(){

	if(typeof console === "undefined") {
		console = { log: function() { } };
	}
	
	var $ = jQuery;
	
	var SCRIPTS = {

		ui: function(){

			// OPEN .PDF'S AND EXTERNAL LINKS IN A NEW WINDOW
			buildExternal();

			// PLACEHOLDERS
			if($('form').length > 0) {
				$('input, textarea').placeholder();
			}

		},

		init: function(){
			SCRIPTS.ui();
		}
			
	};
	
	SCRIPTS.init();

});