<!--#include virtual="/src/lib/parser/Json2Parser.asp" -->
<script language="jscript" runat="server">
Response.Cookies("HTTPErrorDisable")="True";

var Functions = {
	required:function(){
		/*
		alert("Validating :" + $(this).attr("name") + "["+ $(this).val()+"]" + "["+ $(this).attr("placeholder")+"]"); 
		*/
		if($(this).val()=="" ||($(this).attr("placeholder") && $(this).val()==$(this).attr("placeholder"))){
			$(this).addClass("invalid");
		}
		else{
			$(this).removeClass("invalid");
		}
		return $(this).val()!="";
	}
	,submit:function(){
		$(".required",this).trigger("required");
		if($(".invalid",this).length > 0){
			alert($(".invalid",this).length +" incomplete or invalid values");
		}
		return $(".invalid",this).length==0;
	}
	,draw:{
		Input:function($host){

			var type = (this.type || "text");
			var id=(this.id)?" id='"+this.id+"'":"";
			var name=this.name||this.id||type,label="";
			var value=(this.value)?" value='"+(this.value || "")+"'":"";
			var placeholder=(this.placeholder)?" placeholder='"+this.placeholder+"'":"";

			if(this.attr > ""){
					var attrStr = [];
					for(key in this.attr){
						attrStr.push(" "+key+"='"+ this.attr[key] + "'");
					}	
			}else{
					var attrStr = "";
			}			
			if(this.label){
				label="<label"+(name?" for='"+name+"'":"")+">"+this.label+"</label>";
			}
			return label
				+"<input" 
				+ id
				+" type='"+type+"'"
				+" name='"+(name||this)+"'"
				+ placeholder
				+ attrStr + " "							
				+ value
				+"/>";
		}
		,Label:function($host){
			return ""
			+"<label" 
			+(this.name?(" for='"+this.name+"'"):"")
			+">"+this.label
			+"</label>";
		}
		,Select:function($host){
			var aTxt=[];
			var name=this.name||this.id,type,label="";
			if(this.label){
				aTxt.push("<label"+(name?(" for='"+name+"'"):"")+">"+this.label+"</label>");
			}
			aTxt.push(""
				+"<select" 
				+" id='"+this.id+"'"
				+" name='"+name+"'"
				+" value='"+(this.value || "")+"'"
				+">");
			if(this.values){
				for(var v=0;v<this.values.length;v++){
					aTxt.push(""
						+"<option" 
						+" value='"+(this.values[v].value==null?this.values[v].text:this.values[v].value)+"'"
						+">"
						+(this.values[v].text==null?this.values[v].value:this.values[v].text)
						+"</option>");
				}
			}
			aTxt.push("</select>");
			return aTxt.join("\r\n");
		}
		,Textarea:function($host){
			var name=this.name||this.id,label="";
			if(this.label){
				label="<label"+(name?(" for='"+name+"'"):"")+">"+this.label+"</label>";
			}
			return label
				+"<textarea" 
				+" id='"+this.id+"'"
				+" name='"+name+"'"
				+(this.placeholder?(" placeholder='"+this.placeholder+"'"):"")
				+(this.rows?(" rows='"+this.rows+"'"):"")
				+(this.cols?(" cols='"+this.cols+"'"):"")
				+">"
				+(this.placeholder || this.value || "")
				+"</textarea>";
		}
		,Host:function($host){
			var name=this.name||this.id||this.tag;
			var id=this.id||this.name||this.tag;
			label="";
			var aTxt=[];
			aTxt.push(""
				+"<"+this.tag 
				+" id='"+this.id+"'"
				+" name='"+name+"'");
			if(this.attr > ""){
					var attrStr = [];
					for(key in this.attr){
						attrStr.push(" "+key+"='"+ this.attr[key] + "'");
					}	
			}			
			aTxt.push(attrStr);
			aTxt.push(">");
			if(this.content){
				aTxt.push(BuildForm.call(this.content));
			}
			aTxt.push("</"+this.tag+">");
			return aTxt.join("\r\n");
		}
		,Form:function($host){
			var name=this.name||this.id,label="";
			var aTxt=[];
			aTxt.push(""
				+"<"+this.tag 
				+" id='"+this.id+"'"
				+" name='"+name+"'"
				+(this.action?(" action='"+this.action+"'"):"")
				+(this.method?(" method='"+this.method+"'"):"")
				+" value='"+(this.value || "")+"'"
				+">");
			if(this.content){
				aTxt.push(BuildForm.call(this.content));
			}
			aTxt.push("</"+this.tag+">");
			return aTxt.join("\r\n");
			var $form=$(""
				+"<form" 
				+" id='"+this.id+"'"
				+" name='"+(this.name)+"'"
				+(this.action?(" action='"+this.action+"'"):"")
				+(this.method?(" method='"+this.method+"'"):"")
				+">"
				+"</form>"
			);
			$host.append($form);
			$host=$form;
		}
	}
}
var StandardForms={};
StandardForms.AnyForm={
		fname:{
			id:"fname",name:"fname",label:"First Name",placeholder:"First Name",size:30
			,bind:[
				{trigger:"required",className:"required",call:Functions.required}
			]
			,draw:Functions.draw.Input
		}
		,lname:{
			id:"lname",name:"lname",label:"Last Name",placeholder:"Last Name",size:30
			,bind:[
				{trigger:"required",className:"required",call:Functions.required}
			]
			,draw:Functions.draw.Input
		}
		,comments:{
			tag:"textarea",id:"comments",name:"comments",label:"Comments",value:"Comments",rows:5,cols:60
			,bind:[
				{
					trigger:"required",call:Functions.required
				}
				,{
					trigger:"load"
					,call:function(){}
				}
			]
			,draw:Functions.draw.Textarea
		}
		,submit:{id:"submit",type:"submit",name:"submit",value:"Submit",draw:Functions.draw.Input}
	};
StandardForms.xinquiry={
	xinquiry:{
		tag:"form",id:"xinquiry",name:"xinquiry",action:"xxformhandler.asp"
		,draw:Functions.draw.Form
		,bind:[
			{trigger:"load",call:function(){/*alert("FORM LOADED");*/}}
			,{trigger:"submit",className:"submit",call:Functions.submit}
		]
		,content:{
			div:{
				tag:"div",id:"div1",name:"div1"
				,content:{
					fname:StandardForms.AnyForm.fname
					,lname:StandardForms.AnyForm.lname
				}
				,draw:Functions.draw.Host
			}
			,comments:StandardForms.AnyForm.comments
			,select1:{
				tag:"select",id:"select1",name:"select1",label:"Select 1",value:""
				,values:[
					{text:"Option 1",value:1}
					,{text:"Option 2",value:2}
					,{text:"Option 3",value:3}
				]
				,bind:[
					{
						trigger:"change"
						,call:function(){alert("Changed");}
					}
				]
				,draw:Functions.draw.Select
			}
			,submit:StandardForms.AnyForm.submit
		}
	}
}
StandardForms.xgetquote={
	xgetquote:{
		tag:"form",id:"xgetquote",name:"xgetquote",action:"xxformhandler.asp"
		,draw:Functions.draw.Form
		,bind:[
			{trigger:"load",call:function(){/*alert("FORM LOADED");*/}}
			,{trigger:"submit",className:"submit",call:Functions.submit}
		]
		,content:{
			fieldContainer:{
				tag:"div",id:"div1",name:"div1"
				,content:{
					fname:StandardForms.AnyForm.fname
					,lname:StandardForms.AnyForm.lname
				}
				,draw:Functions.draw.Host
			}
			,submit:StandardForms.AnyForm.submit
		}
	}
}


var form={};
if(Request.Form > ""){
		var obj = JSON2.parseJs(String(Request.Form));
}

if(StandardForms[Request("formtype")] && Request("formtype")!="custom"){
	for(var field in StandardForms[Request("formtype")]){
		form[field]=StandardForms[Request("formtype")][field];
	}	
}
else if(Request("formtype")=="custom"){	
	if(obj != ""){	
		//Initiate custom form
		form = {custom:{}}
		//Build out Form Tag ----> formName, formId, formNameAtr, formAction
		form.custom = {
			tag:obj.formTag||"form",
			id:(obj.formId)?obj.formId:"custom",
			name:(obj.formNameAtr)?obj.formNameAtr:"custom",
			action:(obj.formAction)?obj.formAction:"xxFormHandler.asp",
			draw:Functions.draw.Form,
			bind:[
				{trigger:"submit",className:"submit",call:Functions.submit}
			],
			content:{}
		}

		//Build Out the Fields
		var contentFields = {}
		if(obj.fields > ""){
			for(var field in obj.fields){
				if(StandardForms.AnyForm[field]){
					contentFields[field]=StandardForms.AnyForm[field];
				}else{
					var fldType = (field.tag)?field.tag.charAt(0).toUpperCase() + field.tag.slice(1):"Input";
					contentFields[field]=obj.fields[field];
					contentFields[field].draw=Functions.draw[fldType];  
				}
			}
			//contentFields.lname=StandardForms.AnyForm.lname;
		}
		
		//Build out the Fields Container	 --> fieldsContainer, fieldsContainerId
			var fldCont = {fieldsContainer:{}}
			fldCont.fieldsContainer.tag=(obj.fieldsContainer > "")?obj.fieldsContainer:"div";
			fldCont.fieldsContainer.id=fldCont.name =(obj.fieldsContainerId > "")?obj.fieldsContainerId:"div1";
			fldCont.fieldsContainer.content = {};
			fldCont.fieldsContainer.draw = Functions.draw.Host;
			fldCont.fieldsContainer.content = contentFields;
			form.custom.content = fldCont;
			form.custom.content.submit = StandardForms.AnyForm.submit;
	}
}


function main() {
	try{
		//Response.Write(Serialize(form));
		Response.Write(BuildForm.call(form));	
		//Response.Write(form);
	}catch(e){
		Response.Write(e.description);
	}
}
		Response.Write(BuildForm.call(form));
//main();


function BuildForm($host){
	var aTxt=[];
	var tag,id,type;
	for(var o in this){
		if(o=="fields"){
				Response.Write("fired")
		}else{
			//Response.Write(o);
			tag = (this[o].tag || "input");
			id=(this[o].id || o);
			switch(tag){
				case "form":
					if(this[o].draw){
						aTxt.push(this[o].draw());
					}
				break;	
				case "input":
				case "textarea":
				case "select":
					if(this[o].draw){
						aTxt.push(this[o].draw());
					}
				break;
				case "div":
					if(this[o].draw){
						aTxt.push(this[o].draw());
					}
				break;
			}
		}
		if(this[o].bind){
			if(!BuildForm.prototype.jBinds){
				BuildForm.prototype.jBinds=[];
			}
			for(var b=0;b<this[o].bind.length;b++){
				BuildForm.prototype.jBinds.push({
					"id":"#"+id
					,className:this[o].bind[b].className
					,trigger:this[o].bind[b].trigger
					,call:this[o].bind[b].call
				});
			}
		}
		aTxt.push("<br />");
	}
	return(aTxt.join("\r\n"));
	$host.append(aTxt.join("\r\n"));
}



function Serialize(obj)
{
	var clientSide;
	try{
		Response.QueryString;
		clientSide=false;
	}catch(e){
		clientSide=true;
	}
 try{if(obj.getTime) return 'new Date("'+obj+'")';}catch(e){}
 if(typeof(obj) == "string")
  return '"'+(String(obj).replace(/(\'|\")/g,"\\$1"))+'"';
 if(typeof(obj) == "date")
  return '"'+obj+'"';
 if(typeof(obj) == "number")
  return obj;
 if(typeof(obj) == "undefined")
  return "null";
 if(typeof(obj) == "boolean")
  return obj;
 if(typeof(obj) == "function") {
	return clientSide?'"FUNCTION"':'"'+String(obj).replace(/"/g,'\\"')+'"';
 }
 var atxt=[];
 if(typeof(obj) == "object")
 {
  try
  {
   if(obj.fToString)
    return obj.fToString();
  }catch(SerializeE){}
  if(String(obj) == "null")
   return null;
  try
  {
   if(String(obj.valueOf()).charAt(0) == "/")
	   return "new RegExp('"+String(obj.valueOf()).replace(/\/(.*)\/(.*)/,"$1','$2'")+")";
   else if(obj.length != null)
   {
    var aobj = [];
    for(var o=0;o<obj.length;o++)
    {
     if(typeof(obj[o]) == "function" && clientSide)
	 {
		aobj.push('"FUNCTION"');
	  continue;
	 }
     aobj[aobj.length]=Serialize(obj[o]);
    }
    atxt[atxt.length]="["+aobj.join(",")+"]";
   }
   else
   {
    var aobj = [];
    for(var o in obj)
    {
		 if(o.charAt(0)=="_" || o.charAt(0)=="$")
		 {
		  continue;
		 }
		 if(typeof(obj[o]) == "function" && clientSide)
		 {
			aobj.push('"'+o+'":"FUNCTION"');
		  continue;
		 }
		 if(typeof(google)!=="undefined"){ 
			if(obj[o] instanceof google.maps.MVCObject){
				if(!Serialize.prototype.GOOGLE){
					continue;
				}
				if(obj[o] instanceof google.maps.Polygon){
					if(Serialize.prototype.POLYGON){
						aobj[aobj.length]='"'+o+'":"'+obj[o].pathToString()+'"';
					}
				}
				else if(obj[o] instanceof google.maps.Polyline){
					if(Serialize.prototype.POLYLINE){
						aobj[aobj.length]='"'+o+'":"'+obj[o].pathToString()+'"';
					}
				}
				else if(obj[o] instanceof google.maps.LatLng){
					if(Serialize.prototype.LATLNGBOUNDS){
						aobj[aobj.length]='"'+o+'":"'+String(obj[o])+'"';
					}
				}
				else if(obj[o] instanceof google.maps.LatLngBounds){
					if(Serialize.prototype.LATLNGBOUNDS){
						aobj[aobj.length]='"'+o+'":"'+String(obj[o])+'"';
					}
				}
				else if(obj[o] instanceof google.maps.Marker){
					if(Serialize.prototype.LATLNGBOUNDS){
						aobj[aobj.length]='"'+o+'":"'+String(obj[o])+'"';
					}
				}
				else{
					continue;
				}
			}
		}
     aobj[aobj.length]='"'+o+'":'+Serialize(obj[o]);
    }
    atxt[atxt.length]="{"+aobj.join(",")+"}";
   }
  }
  catch(e)
  {
   atxt[atxt.length]="Error:\""+String(e.description)+"\"";
  }
 }
 return(atxt.join(", "));
}

</script>


