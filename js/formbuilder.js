/*
++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++FORM BUILDER PLUGIN++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++++

DESCRIPTION:
Make it easy to apply a plugin to any DOM Element that then gets transformed into a form, with the options set that are passed to it.

DEFAULT SETTINGS:

		formName:, 
		formId:, 
		formNameAtr:, 
		formAction:,
		fieldsContainer:, 
		fieldsContainerId:
		fields:{
			tag:,
			label:,
			attr:{
				** any valid html attribute in object literal sytax**			
			},
			functions:,
			required:,
		}

EXAMPLE:
$('<div />').formBuilder({
	formType:"custom",
	fields:{
		fname:{id:"fname",name:"fname",label:"First Name",placeholder:"First Name",size:30,tag:"textarea"}
	}
});


GOAL:
	Phase 1:
		Script is declared in a page load that calls the plugin on an element. Options can be declared at this point.
	Phase 2:
		Plugin builds an JSON packet request based on the options provided, if none are provided then defaults are set.
	Phase 3:
		Plugin then POSTS JSON to xxFormServer.asp. 
	Phase 4:
		Plugin receives a response from xxFormServer.asp in the form of a list of html form elements.
	Phase 5: 
		Plugin then uses any options set to determine layout of the html data sent from formServer and fills out the DOM element that the plugin was called on in Phase1

*/

(function ($) {
	$.fn.formBuilder = function(options) {
	//JQuery OBJ of this that the plugin is acting upon		
		var $this = this;
	//Declare Default values
		var settings = $.extend({			
			formStyle:'default',
			formName:'Custom Form', 
			formId:'customForm', 
			formNameAtr:'customForm', 
			formAction:'/--xxFormHandler',
			fieldsContainer:"div", 
			fieldsContainerId:"customFields"
		},options);
		
		var form = "";

	//Get the Form Type and Set the Fields Requested
		switch(settings.formType) {
			case 'custom':
				if(settings.fields==""||settings.fields===undefined){
					settings.fields = {				
						fname:{tag:"input",label:"First Name",attr:{id:"fname",length:"30"},required:true},
						lname:{tag:"input",label:"Last Name",attr:{id:"lname",length:"30"},required:true},
						telephone:{tag:"input",label:"Telephone",attr:{id:"telephone",length:"30"},required:true},
						comments:{tag:"textarea",label:"Comments",attr:{id:"comments"},required:true}
					};
				}
				GetForm(settings.formType);
				form = BuildForm.call(form);
				//console.log(form);
				$this.html(form);	
				break;
			case 'xgetquote':
				GetForm("xgetquote");
				form = BuildForm.call(form);
				$this.html(form);
				break;
			default:
				GetForm("xinquiry");
				form=BuildForm.call(form);				
				$this.html(form);
				break;
		}


/*************************************/
/************ Functions **************/
/*************************************/
		function GetForm(formtype){
			$.ajax({
				url: '/scripts/formserver.asp?formtype='+formtype,
				type:'POST',
				async:false,
				dataType:JSON,
				data:JSON.stringify(settings),		
				success:function(result){
					console.log(result)
					form = result;
					//console.log(form);					
					return form;
				},
				error:function(error){
					console.log(error);
				}
			});
		}	

		function BuildForm() {
			"use strict";
			var outputHTML = this;
			return outputHTML;
		};

/*

function Serialize(){
	var txt=[];
	for(var el in this){
		if(typeof(this[el]) == "function"){
			txt.push('"'+ el +'":"function_'+el+'"');
		}
		else if(typeof(this[el]) != "object"){
			txt.push('"'+ el +'":"'+this[el]+'"');
		}
		else{
			txt.push('"'+ el +'":'+Serialize.call(this[el]));
		}
	}
	if(typeof(this).length){
		return "["+txt.join(",")+"]";
		//return "{"+txt.join(",")+"}";
	}
	else{
		return "{"+txt.join(",")+"}";
	}
}

*/


	};
} (jQuery));


