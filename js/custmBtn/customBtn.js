(function( $ ) {
	
	$.fn.CustomButton = function( options ) {
		
		var settings = {
			style	: 'harley',
			colorA	: '#ffa876',
			colorB	: '#e55400',
			width	: '175px',
			padding	: '8px'
		};
		var options = $.extend(settings,options);			
		if(options.style == 'harley'){
			return this.each(function(){
					obj = $(this);	
					obj.css({
						//'font-weight'		:'16px',
						'fontSize'			:'14px',
						'textAlign'			:'center',
						'borderRadius'		:'4px',
						'border-style'		:'solid',
						'border-width'		:'2px',
						'border-color'		:'#C44000',
						'padding'			:options.padding,
						'display'			:'inline-block',
						'width'				:options.width,
						'margin'			:'3px',
						'backgroundColor'	:'#ff6000',	
						'backgroundImage'	:'url(/custom-btn/images/btn-bg.jpg)', 
						'text-decoration'	:'none',
						'background-repeat'	:'repeat-x'
					})
					obj.hover(function(){
						$(this).css({
							'color':'#fff',
							'text-shadow':'0 0 5px #fff'
						});
					});
					obj.mouseleave(function(){
						$(this).css({
							'color':'#fff',
							'text-shadow':'none'
						});
					});
			});	
		};
	
		if(options.style == 'green'){
			return this.each(function(){
					obj = $(this);	
					obj.css({
						//'font-weight'		:'16px',
						'color'				:'#fff',
						'text-decoration'	:'none',						
						'fontSize'			:'14px',
						'textAlign'			:'center',
						'borderRadius'		:'4px',
						'border-style'		:'solid',
						'border-width'		:'2px',
						'border-color'		:'#549253',
						'padding'			:options.padding,
						'display'			:'inline-block',
						'width'				:options.width,
						'margin'			:'3px',
						'backgroundColor'	:'#549253',	
						'backgroundImage'	:'url(/images/custom-btn/btn-bg2.jpg)', 
						'text-decoration'	:'none',						
						'background-repeat'	:'repeat-x' 
					})
					obj.hover(function(){
						$(this).css({
							'color':'#fff',
							'text-shadow':'0 0 5px #fff'
						});
					});
					obj.mouseleave(function(){
						$(this).css({
							'color':'#fff',
							'text-shadow':'none'
						});
					});
			});	
		};
	
	};

	if(options.style == 'harley2'){
			return this.each(function(){
					obj = $(this);	
					obj.css({
						//'font-weight'		:'16px',
						'color'				:'#fff',
						'text-decoration'	:'none',						
						'fontSize'			:'14px',
						'textAlign'			:'center',
						'borderRadius'		:'4px',
						'border-style'		:'solid',
						'border-width'		:'2px',
						'border-color'		:'#549253',
						'padding'			:options.padding,
						'display'			:'inline-block',
						'width'				:options.width,
						'margin'			:'3px',
						'backgroundColor'	:'#549253',	
						'backgroundImage'	:'url(/images/custom-btn/custom-btn-harley2.jpg)',
						'backgroundPosition':'center center',
						'text-decoration'	:'none',						
						'background-repeat'	:'repeat-x' 
					})
					obj.hover(function(){
						$(this).css({
							'color':'#fff',
							'text-shadow':'0 0 5px #fff'
						});
					});
					obj.mouseleave(function(){
						$(this).css({
							'color':'#fff',
							'text-shadow':'none'
						});
					});
			});	
		};
	
	};


})( jQuery );