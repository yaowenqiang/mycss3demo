<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <title>css3 selector demo</title>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script src="js/selectivizr.js"></script>
    <style type="text/css">
    div.wrapper{width:400px;height:400px;margin:0 auto;}
   div.wrapper div{height:100px;} 
   div.wrapper div:nth-child(2){color:red;} 
   div.wrapper div:nth-child(2+1){color:orange;} 
   div[id]{color:yellow;} 
    </style>
</head>
<body>
<div class="wrapper">
    <div>div1</div>
    <div>div 2</div>
    <div>div 3</div>
    <div id="demo">div 3</div>
</div>
</body>
</html>
