<?php
	header("Content-type:text/html;charset=utf-8");
	//接数据
	$vipName=$_GET['username'];
	$vipPw=$_GET['userpass'];
	$conn=mysql_connect("localhost","root","root");
	if(!$conn){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("uuu",$conn);
		$sqlstr="select * from vip where vipName='$vipName' and vipPw='$vipPw'";
		$result=mysql_query($sqlstr,$conn);
		mysql_close($conn);
		if(mysql_num_rows($result)==0){
			echo "0";//登录失败
		}else{
			echo "1";//登录成功
		}
	}
?> 


