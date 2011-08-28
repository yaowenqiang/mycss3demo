<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>css3 selector demo</title>
    <script src="js/selectivizr.js"></script>
    <style type="text/css">
    div.wrapper{width:400px;height:400px;margin:0 auto;}
   div.wrapper div{height:100px;} 
   div.wrapper div:even{color:red;} 
   div.wrapper div:odd{color:orange;} 
    </style>
</head>
<body>
<div class="wrapper">
    <div>div1</div>
    <div>div 2</div>
    <div>div 3</div>
</div>
	
</body>
</html>
