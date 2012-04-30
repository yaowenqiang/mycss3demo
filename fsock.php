<?php
	// if ($_SERVER[ 'POST' == 'REQUEST_METHOD']) {
		// code...
		ini_set('display_errors','stderr');
		$remoteDir = 'https://graph.qq.com/t/add_t';
		$params=array(
			'access_token' => $_POST['access_token'],
			'oauth_consumer_key' => $_POST['oauth_consumer_key'],
			'openid' => $_POST['openid'],
			'format' => $_POST['format'],
			'content' => $_POST['content']
		);
		$fp = fsockopen($remoteDir,80);
		$content = http_build_query($params);
		fwrite($fp, "POST /reposter.php HTTP/1.1\r\n");
		fwrite($fp, "Host: example.com\r\n");
		fwrite($fp, "Content-Type: application/x-www-form-urlencoded\r\n");
		fwrite($fp, "Content-Length: ".strlen($content)."\r\n");
		fwrite($fp, "Connection: close\r\n");
		fwrite($fp, "\r\n");
		fwrite($fp, $content);
		header('Content-type: text/plain');
		while (!feof($fp)) {
    		$result.= fgets($fp, 1024);
		}
		fclose($fp);
		echo $result;
		return;
	//}
?>
