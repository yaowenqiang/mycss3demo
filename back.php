<?php
if (isset( $_GET['code']) && isset($_GET['state'])) {
$remoteUrl = 'https://graph.qq.com/oauth2.0/token';		//远程请求地址 
$params = array(	//构造请求参数
	'grant_type' => 'authorization_code',
	'client_id' => '100266584',
	'client_secret' =>'2e499a2c58e20f1adb74c31d497a96b4',
	'code' => $_GET['code'],
	'state' => $_GET['state'],
	'redirect_uri' => 'http://mycss3demo.orchestra.io/back.php'
);
	$requestUrl = $remoteUrl.'?'.http_build_query($params);
	var_dump($requestUrl);
	// $result = file($requestUrl);
	// var_dump($result);
	// header('location:'.'?'.$requestUrl);
	// ($remoteUrl);
}else {
	var_dump($_GET);
}

?>
