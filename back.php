<?php
	require_once './config.php';
    if (!isset($_GET['code']) || !isset($_GET['state']) ) {
        die('invalid request');
    }

    //请求authorization code
	$params = array(	
		'grant_type'    => 'authorization_code',
		'client_id'     => APP_KEY,
		'client_secret' => APP_ID,
		'code'          => $_GET['code'],
		'state'         => $_GET['state'],
		'redirect_uri'  => REDIRECT_URL
	);
	$requestUrl = GET_TOKEN_URL.'?'.http_build_query($params);
	$result = file_get_contents($requestUrl);
	list($access_key,$expire_time) = explode('&',$result);
	list(,$access_token)= explode('=',$access_key);
    //求证open id

	$getOpenIDUrl = GET_OPENID_URL.'?'.$access_key;
	$getOpenIdResult = file_get_contents($getOpenIDUrl);
	$result = explode(')',strtr($getOpenIdResult,'(',')'));
	$resultObject = json_decode($result[1]);
	$openId = $resultObject->openid;
    
    //构造请求个人信息参数

	$getinfohost = GET_INFO_URL.'?'.$access_key;
	$params = array(
		'oauth_consumer_key' => APP_KEY,
		'openid' 			 => APP_ID,
		'format' 	  		 => 'json'
	);
	$getinfoRequestURL = $getinfohost.'&'.http_build_query($params);

    //构造求证听众列表参数

	$host = GET_FANSLIST_URL.'?'.$access_key;
	$params = array(
		'oauth_consumer_key' => APP_KEY,
		'openid' 			 => APP_ID,
		'format' 	  		 => 'json',
		'reqnum'	  		 => '20',
		'mode' 		  		 => '0'
	);
	$requestURL = $host.'&'.http_build_query($params);


    //构造发送微博参数
	
	// $sentTweetURL = SEND_T_URL.'?'.$access_key;
	// $setTweetParams = array(
	// 	'oauth_consumer_key' => APP_KEY,
	// 	'openid' 			 => APP_ID,
	// 	'format' 	  		 => 'json',
	// );
	// $requestURL = $host.'&'.http_build_query($params);
?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="../css/min.css" />
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
		<script type="text/javascript">
    function getfans()
    {
        startindex=20*(page -1); 
        url = request+'&startindex='+startindex; 
        $.ajax({
            url:url,
            type:'GET',
            success:function(res){
                    data = res.responseText;
                    fans = JSON.parse($(data).text());
                    $.each(fans.data.info,function(i,item){
                        //听众过滤条件，此处设定为与用户所在地相同
                        if(item.city_code == userinfo.data.city_code){
                            $('<li>').html('姓名：'+item.nick).appendTo('#fanslist');
                            findfans.push(item.nick);
                        }
                    });
                    //如果后面无记录停止向服务器发送请求
                    if (fans.data.hasnext) {
                        stop = 1;
                        $('#loading').hide();
                        clearTimeout(fanstimer);
                    }else {
                        page ++;
                    }
                }
            });	
            if (!stop) {
                fanstimer = setTimeout(getfans,100);
            }
        }

// This utility function creates the query string
// to be appended to the base URI of the YQL Web
// service.
function toQueryString(obj) {    
  var parts = [];    
  for(var each in obj) if (obj.hasOwnProperty(each)) {
    parts.push(encodeURIComponent(each) + '=' + encodeURIComponent(obj[each]));    
  }    
  return parts.join('&');  
}

// Store the anonymous function that wraps
// the OpenSocial function makeRequest
var runQuery = function(ws_base_uri,query, handler) {
  gadgets.io.makeRequest(ws_base_uri, handler, {
    METHOD: 'POST',
    POST_DATA: toQueryString({q: query, format: 'json'}),
    CONTENT_TYPE: 'JSON',
    AUTHORIZATION: 'OAuth'    
  });  
};

// Callback function for handling response data
function handler(rsp) {   
  if(rsp.data){           
    yql_results = rsp.data;
  }
}

		
		</script>
	</head>
	<body>
	<a href="#" id ='getfans'>获取我的同城听众</a>
	<a href="#" id ='send'>将结果发到我的微博</a>
	<br />
	<br />
	<ul id='myinfo'></ul>
	<ul id='fanslist'></ul>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src='jqueryajax.js'></script>
	<script type="text/javascript">
    var page = 1;//请求页面数
    var request = '<?php echo $requestURL;?>';//原始请求地址
	var findfans=[];//符合条件的听众
    var fans;//每次请求返回的 听众
    var fanstimer;//请求定时器
	var userinfo;//当前登陆用户的个人信息
    var stop=0;//请求是否停止
	$(function(){
		//获取个人信息
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
        $('#send').click(function(){
			var yql_base_uri = "http://query.yahooapis.com/v1/yql";  
			var requesturl = '<?php echo SEND_T_URL;?>';
        	var params={};
        	params.content = Date();
        	params.oauth_consumer_key = '<?php echo APP_KEY;?>';
        	params.access_token = '<?php echo $access_token;?>';
        	params.client_id = '<?php echo APP_KEY;?>';
			postdata = toQueryString(params);
			console.log(postdata);
			var sql = "select * from htmlpost where url='"+'<?php echo SEND_T_URL;?>'+"'and postdata='"+postdata+"' and xpath ='*'";
        	// var queryString = 
        	//querystrin = ToqueryStrin(params);
        	/*
       		$.ajax({
       			type:'POST',
       			url:'<?php echo SEND_T_URL;?>',
       			data:{
				// 'oauth_consumer_key':'<?php echo APP_KEY;?>',
				// 'access_token':'<?php echo $access_token;?>',
				// 'client_id':'<?php echo APP_KEY;?>'
       			},
       			success:function(response){console.log(response)}
       		}); 	
       		 */
			

        });
		//获取听众列表
			$('#getfans').click(function(){
                if (!userinfo) {
                    alert('正在加载您的个人信息，请稍后再试！');
                    return false;
                }
				$('#loading').show();
				getfans();
                return false;
			});
	});
	</script>
	<div id="loading"></div>
	</body>
</html>
