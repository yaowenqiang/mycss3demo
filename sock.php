<?php
	
$access_token = '100266584';
$oauth_consumer_key = '2e499a2c58e20f1adb74c31d497a96b4';
$openid = 'F76FAE0544CF6A04343C430F24375FE5';
$format = 'json';
$content = 'Mon Apr 30 2012 17:50:20 GMT 0800 (中国标准时间)';
$result;
$port = 80 | 443;
$host = 'graph.qq.com/t/add_t';
$method = 'POST';
// $contenttype = 'text/html' | 'text/plain' | 'text/xml';
$params=array(
	'access_token' => $access_token,
	'oauth_consumer_key' => $oauth_consumer_key,
	'openid' => $openid,
	'format' => $format,
	'content' => $content
);
if ($port == 443) {
	$sshhost = 'ssl://'.$host;
} else {
	$sshhost = $host;
}
$fp = fsockopen($sshhost,$port);
$content = http_build_query($params);
fwrite($fp, "POST /reposter.php HTTP/1.1\r\n");
fwrite($fp, "Host: $host\r\n");
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

?>
