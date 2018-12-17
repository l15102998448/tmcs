function navFixed(scroll){
	
		if(scroll>200){
			$(".nav02")[0].style.position='fixed';
			$(".nav02")[0].style.left="0";
			$(".nav02")[0].style.top="0";
			$(".nav02")[0].style.zIndex="5";
		}else{
				$(".nav02")[0].style.position='relative';
				$(".nav02")[0].style.left="0";
				$(".nav02")[0].style.top="0";
				$(".nav02")[0].style.zIndex="0";
		}
}
	function siderLeftFixed(scroll){
		if(scroll>800){
			$(".sideLeft")[0].style.display="block";
		}else{
			$(".sideLeft")[0].style.display="none";
		}
	}

	
		
window.onscroll=function(){
	var scroll=document.documentElement.scrollTop || document.body.scrollTop;
	navFixed(scroll);
	siderLeftFixed(scroll);
	
}

	function play01(){
		let lis=$(".sideLeftandPlay")[0].children;
		for(let i=0;i<lis.length-1;i++){
			lis[i].setAttribute("index",i);
			lis[i].onmouseover=function(){
				let getIndex=this.getAttribute("index");
				if(getIndex>3){
					var aIndex=0;
					aIndex=getIndex-3;
					let top1=(-74*aIndex);
					$(".leftMenu")[getIndex].style.top=top1+"px";				
					$(".leftMenu")[getIndex].style.cssText="position:absolute;left:239px;";
				}
				$(".leftMenu")[getIndex].style.display="block";
				lis[i].style.backgroundColor="red";		
			}
		}
	}
	function stop01(){
		let lis=$(".sideLeftandPlay")[0].children;
		for(let i=0;i<lis.length-1;i++){
			lis[i].setAttribute("index",i);
			lis[i].onmouseout=function(){
				$(".leftMenu")[this.getAttribute("index")].style.display="none";
				lis[i].style.backgroundColor="white";
			}
		}
	}

	// 欢迎您初始化界面
	function initUI(username){
	if(username!=null){
		$("#usernameSpan").innerHTML = username;
		$("#welcomeBox").style.display = "block";
		$(".lobox")[0].style.display = "none";
	}else{
		$("#welcomeBox").style.display = "none";
		$(".lobox")[0].style.display = "block";
	}
}


	// cookie
	//1、读取用户名
	var username = getCookie("username1");
	//2、初始化界面
	initUI(username);
	
	//3、注销
	$("#btnOut").onclick= function(){
		removeCookie("username1");
		location.href="login.html";
	}
