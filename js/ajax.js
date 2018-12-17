
function ajax(obj){
	let defaultObj={
		url:"#",
		method:"get",
		param:"",
		isAsync:true,
		func:null
	};
	
	for(let key in defaultObj){
		if(obj[key]){
			defaultObj[key]=obj[key];
		}
	}
	
	let xhr= new XMLHttpRequest();
	let urlAndParam=defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get" && defaultObj.param!=""){
		urlAndParam+="?"+defaultObj.param;
	}
	
	xhr.open(defaultObj.method,urlAndParam,defaultObj.isAsync);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func && defaultObj.func(xhr.responseText);
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}else{
		xhr.send();
	}
}
