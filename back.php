<?php
	$client_id = '100266584';
	$client_secret = '2e499a2c58e20f1adb74c31d497a96b4';
	$openId;
// if (isset( $_GET['code']) && isset($_GET['state'])) {
$remoteUrl = 'https://graph.qq.com/oauth2.0/token';		//远程请求地址 
$params = array(	//构造请求参数
	'grant_type' => 'authorization_code',
	'client_id' => $client_id,
	'client_secret' =>$client_secret,
	'code' => $_GET['code'],
	'state' => $_GET['state'],
	'redirect_uri' => 'http://mycss3demo.orchestra.io/back.php'
);
	$requestUrl = $remoteUrl.'?'.http_build_query($params);
	$result = file_get_contents($requestUrl);
	list($access_key,$expire_time) = explode('&',$result);
	$getOpenIDUrl = 'https://graph.qq.com/oauth2.0/me'.'?'.$access_key;
	$getOpenIdResult = file_get_contents($getOpenIDUrl);
	$result = explode(')',strtr($getOpenIdResult,'(',')'));
	$resultObject = json_decode($result[1]);
	$openId = $resultObject->openid;
//}
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>我的听众</title>
</head>
<body>
<?php
$getinfohost = 'https://graph.qq.com/user/get_info';
$getinfohost = $getinfohost.'?'.$access_key;
$params = array(
'oauth_consumer_key' => $client_id,
'openid' 			 => $openId,
'format' 	  		 => 'json'
);
$getinfoRequestURL = $getinfohost.'&'.http_build_query($params);
$myinfo = file_get_contents($getinfoRequestURL);
$myjsoninfo = json_encode($myinfo);
$host = 'https://graph.qq.com/relation/get_fanslist?';
$host = $host.$access_key;
$params = array(
'oauth_consumer_key' => $client_id,
'openid' 			 => $openId,
'format' 	  		 => 'json',
'reqnum'	  		 => '20',
'startindex'  		 => '0',
'mode' 		  		 => '0'
);
$requestURL = $host.'&'.http_build_query($params);
$info = file_get_contents($requestURL);
$jsoninfo = json_encode($info);

?>
<a href="#" id ='getmyinfo'>获取我的个人资料</a>
<a href="#" id ='getfans'>获取我的听众</a>
<br />
<br />
<ul id='myinfo'></ul>
<ul id='fanslist'>
</ul>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src='jqueryajax.js'></script>
<script type="text/javascript">
$(function(){
$.ajax({
	url:'<?php echo $requestURL;?>',
	type:'GET',
	success:function(res){
			console.log(res.responseText)
		}
	});	

});
</script>
</body>
</html>
