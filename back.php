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
	/*
	<form action="">
		<textarea id="t" name="t" rows="10" cols="30"></textarea>		
		<!-- <input type="submit" id="submtiBtn" value="发一条微博吧！" /> -->
		<a href="#" id="submtiBtn">发一条微博吧！</a>
	</form>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript">
		$(function(){
			$('#submtiBtn').click(function(){
				$.ajax({
					type:'POST',
					url:'fsock.php',
					data:{
						'access_token': '<?php echo $client_id; ?>',
						'oauth_consumer_key': '<?php echo $client_secret;?>',
						'openid':'<?php echo $openId;?>',
						'format':'json',
						'content':''+new Date()	
					},
					success:function(response){
								console.log(response);
					}
				});	
			return false;
			});			
		});	
	</script>
	*/
	?>
<?php
$host = 'https://graph.qq.com/relation/get_fanslist?';
$host = $host.$access_key;
$params = array(
// 'access_key' 		 => $client_id,
'oauth_consumer_key' => $client_id,
'openid' 			 => $openId,
'format' 	  		 => 'json',
'reqnum'	  		 => '2',
'startindex'  		 => '0',
'mode' 		  		 => '0'
);
$requestURL = $host.'&'.http_build_query($params);
?>
<a href="#" id ='getfans'>获取我的听众</a>
<br />
<br />
<ul id='fanslist'>
</ul>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript">
	$(function() {
			$('#getfans').click(function(){
				$.getJSON('<?php echo $requestURL;?>&jsoncallback=?',
					function(data){
					$.each(data.data.info,function(i,item) {
						$('<li>').html(item.tweet[0].text).appendTo('#fanslist');	
					});
					);	
				}
				});			
	});
</script>
</body>
</html>
