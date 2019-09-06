// JavaScript Document

function Test(){
	console.log('test');
};

function Side_Menu(obj){
	$(obj:children).css('display','none');
	$(obj).mouseenter(function() {
	$(obj).stop();
		$(this).stop().animate({width:"600px"},function(){
			$(obj:children).fadeIn();
			$(obj:children).css('display','inline');
			
		});	
	});
	$(obj).mouseleave(function() {
		$(obj).stop();
		$(obj:children).stop().fadeOut(function (){
			$(obj).animate({width:"35px"});	
			$(obj:children).css('display','none');
		});
	});
};
