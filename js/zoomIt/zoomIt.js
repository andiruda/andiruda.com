(function( $ ) {
	
	$.fn.spyGlass = function( options ) {
		//set the defaults
		var settings = {
			style	: 'normal',
			width		: 50,
			height		: 50,
			magnif		:  2
		};
		var options = $.extend(settings,options);			
		
		//decide which style to use
		if(options.style == 'normal'){
			//perform for each element in the page that calls this plugin
			return this.each(function(){
				//GET ORIGINAL IMAGE
					var origImage = $(this);

				//set width, height and style
					var h2 = (origImage.attr('height') > 0)?origImage.attr('height')/options.magnif:origImage.height()/options.magnif;
					var w2 = (origImage.attr('width') > 0)?origImage.attr('width')/options.magnif:origImage.width()/optons.magnif;
					

				//CREATE UNIQUE ID FOR THIS ZOOMER					
					var ID = origImage.attr('src').slice(origImage.attr('src').lastIndexOf('/')+1,origImage.attr('src').lastIndexOf('.'));
					ID = ID.replace('(','').replace(')','').replace('%20','').replace('-','');
					console.log(ID);

				//CREATE ZOOM RETICLE ~a.k.a "spyGlass"
					//set background reference for image
					var spyGlassSrc = origImage.attr('src');
					//set style for zoom reticle
					var retRad = ((((options.width+options.height)/options.magnif)*.009) < 50)?((options.width+options.height)/options.magnif)*.009:50;
					var spyGlassStyle = 'display:none;pointer-events:none;position:absolute;width:' + options.width + 'px;height:' + options.height + 'px;background:url(' + spyGlassSrc + ') top center no-repeat transparent;z-index:3;border-radius:'+retRad+'px;border:solid 2px #000;overflow:hidden;background-size:'+(w2*options.magnif)+'px '+(h2*options.magnif)+'px;';
					//create the spyGlass
					var spyGlass = '<div class="'+ID+'zoomIt" style="' +  spyGlassStyle + '"></div>\n';

				//CREATE SMALL IMAGE FROM ORIGINAL
					var smallImgStyle = 'cursor:none;position:relative;z-index:2;';

				//CREATE AND ADD OVERLAY FOR IE BUG
					var zoomOverlay = '<div class="'+ID+'zoomOverlay" style="position:absolute;cursor:none;position:absolute;z-index:4;width:' + w2 + 'px;height:' + h2 + 'px;background:url(js/zoomIt/images/zoom-it-overlay-bg.png) repeat transparent;"></div>';

					//create the small image
					var smallImage = '<img class="'+ID+'smallImage" style="' + smallImgStyle + '" src="' + origImage.attr('src') + '" height="' + h2 + '" width="' + w2 + '" /> \n';
		
				
				//CREATE A WRAPPER FOR OUR ELEMENTS
					$('<div class="'+ID+'zoomWrapper" style="position:relative;height:'+h2+'px;width:'+w2+'px;"></div>').replaceAll(origImage);

				//PLACE OUR OBJECTS INTO PAGE
					$('.'+ID+'zoomWrapper').append(zoomOverlay);
					$('.'+ID+'zoomWrapper').append(spyGlass);
					$('.'+ID+'zoomWrapper').append(smallImage);

				//SET VARIABLE TO BE USED IN BELOW EVENTS.  WE JUST CREATED THESE OBJECTS IN THE DOM
					var zoomIt = $('.'+ID+'zoomIt');

				//CREATE EVENTS
					$('.'+ID+'zoomOverlay').bind('mouseenter',function(){
						zoomIt.css('display','block');
					});
					$('.'+ID+'zoomOverlay').bind('mouseleave',function(){
						zoomIt.css('display','none');	
					});
					$('.'+ID+'zoomOverlay').bind('mousemove',function(e){
						var pos = findPos(this);
						var x = e.pageX - pos.x;
						var y = e.pageY - pos.y;
						zoomIt.css('background-position',((x*-options.magnif)+(options.width/2))+'px '+((y*-options.magnif)+(options.height/2))+'px');
						zoomIt.css('left',x-(options.width/2));
						zoomIt.css('top',y-(options.height/2));
				    });
				
				//FUNCTIONS
					function findPos(obj) {
						var curleft = 0, curtop = 0;
						if (obj.offsetParent) {
							do {
								curleft += obj.offsetLeft;
								curtop += obj.offsetTop;
							} while (obj = obj.offsetParent);
							return { x: curleft, y: curtop };
						}
						return undefined;
					}

			});	
		};
	
	
	};

})( jQuery );