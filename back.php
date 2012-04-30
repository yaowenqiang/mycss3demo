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
	$result = file_get_contents($requestUrl);
	list($access_key,$expire_time) = explode('&',$result);
	$getOpenIDUrl = 'https://graph.qq.com/oauth2.0/me'.'?'.$access_key;
	$getOpenIdResult = file_get_contents($getOpenIDUrl);
	var_dump($getOpenIdResult);
	// $callback = explode(':',$getOpenIdResult);
	$callback = $getOpenIdResult;
	$a = explode(':',strtr('"','',$callback));
	$b = explode(',',$a[2]);
	var_dump($a);
	var_dump($b);
	var_dump($callback);

}
?>
