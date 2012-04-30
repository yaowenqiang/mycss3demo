<?php
/*
if (isset( $_GET['code']) && isset($_GET['state'])) {
$remoteUrl = 'https://graph.qq.com/oauth2.0/token';		//远程请求地址 
$params = array(	//构造请求参数
	'grant_type' => 'code',
	'client_id' => '100266584',
	'client_secret' =>'2e499a2c58e20f1adb74c31d497a96b4',
	'code' => $_GET['code'],
	'state' => $_GET['state'],
	'redirect_uri' => 'http://mycss3demo.orchestra.io/back.php'
);
	$requestUrl = $remoteUrl.http_build_query($params);
	header('location:'.'?'.$requestUrl);
	// ($remoteUrl);
}else {
	var_dump($_GET);
}
*/
	var_dump($_GET);
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>认证通过，正在获取您的相关信息，请稍后 </title>
</head>
<body>
	处理中，请稍等.
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript">
	$(function() {
		console.log('authed.');			
	});
</script>
</body>
</html>
