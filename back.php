<?php
	require_once './config.php';
	$client_id = '100266584';
	$client_secret = '2e499a2c58e20f1adb74c31d497a96b4';
	$openId;
	// if (isset( $_GET['code']) && isset($_GET['state'])) {
	$remoteUrl = 'https://graph.qq.com/oauth2.0/token';		//远程请求地址 
	$params = array(	//构造请求参数
		'grant_type' => 'authorization_code',
		// 'client_id' => $client_id,
		'client_id' => APP_KEY,
		// 'client_secret' =>$client_secret,
		'client_secret' =>APP_ID,
		'code' => $_GET['code'],
		'state' => $_GET['state'],
		'redirect_uri' => REDIRECT_URL
	);
	$requestUrl = GET_TOKEN_URL.'?'.http_build_query($params);
	$result = file_get_contents($requestUrl);
	list($access_key,$expire_time) = explode('&',$result);
	$getOpenIDUrl = GET_OPENID_URL.'?'.$access_key;
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
		<link rel="stylesheet" href="../css/min.css" />
		<!-- <link rel="stylesheet" href="../css/style.css" /> -->
		<style type="text/css">
			#loading{
				display:absolute;
				left:100px;
				top:100px;
				width:54px;
				height:55px;
				background:url(../images/ajax-loader.gif) no-repeat;
			}
		</style>
		<title>我的听众</title>
	</head>
	<body>
	<?php
	// $getinfohost = GET_INFO_URL;
	$getinfohost = GET_INFO_URL.'?'.$access_key;
	$params = array(
		'oauth_consumer_key' => APP_KEY,
		'openid' 			 => APP_ID,
		'format' 	  		 => 'json'
	);
	$getinfoRequestURL = $getinfohost.'&'.http_build_query($params);
	// $myinfo = file_get_contents($getinfoRequestURL);
	// $myjsoninfo = json_encode($myinfo);
	// $host = 'https://graph.qq.com/relation/get_fanslist?';
	$host = GET_FANSLIST_URL.'?'.$access_key;
	$params = array(
		'oauth_consumer_key' => APP_KEY,
		'openid' 			 => APP_ID,
		'format' 	  		 => 'json',
		'reqnum'	  		 => '20',
		// 'startindex'  		 => '0',
		'mode' 		  		 => '0'
	);
	$requestURL = $host.'&'.http_build_query($params);
	// $info = file_get_contents($requestURL);
	// $jsoninfo = json_encode($info);
	?>
	<!-- <a href="#" id ='getmyinfo'>获取我的个人资料</a> -->
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
			// var page = 1;
			var userinfo;
			// var hasnext=1;
		//获取个人信息
			// $('#getmyinfo').click(function(){
				$.ajax({
					url:'<?php echo $getinfoRequestURL;?>',
					type:'GET',
					success:function(res){
							$('#loading').hide();
							data = (res.responseText);
							userinfo = JSON.parse($(data).text());
							$('<li>').html('姓名：'+userinfo.data.nick).appendTo('#myinfo');

						}
				});	
			//});
		//获取听众列表
			$('#getfans').click(function(){
				$('#loading').show();
				request = '<?php echo $requestURL;?>';
				var page=1;
				while(1){
				startindex=20*(page -1);
				url = request+'&startindex='+startindex;
				$.ajax({
					url:url,
					// data:{startindex:20*(page - 1)},
					type:'GET',
					success:function(res){
							data = (res.responseText);
							fans = JSON.parse($(data).text());
							<!-- fansinfo = []; -->
							$.each(fans.data.info,function(i,item){
								if(item.city_code == userinfo.data.city_code){
									$('<li>').html('姓名：'+item.nick).appendTo('#fanslist');
								}
							});
							if(fans.data.hasnext){
								window.flag = 1;	
							}
						}
				});	
				if(window.flag == 1){
					break;
				}else {
					page++;
				}
				}
				$('#loading').hide();
			});
	});
	</script>
	<div id="loading"></div>
	</body>
</html>
