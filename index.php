<html>
<head>
	<title>Rotating cube</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body style="margin:0 0 0 0; padding: 0 0 0 0;">
	<div id="overlay" class="debug">
		Use mouse to look around. Arrows to move the cube.<br/>
		Camera:<br/>
		x: <span id="cam-x">0.0</span>
		y: <span id="cam-y">0.0</span>
		z: <span id="cam-z">0.0</span><br/>
		Cube:<br/>
		x: <span id="cube-x">0.0</span>
		y: <span id="cube-y">0.0</span>
		z: <span id="cube-z">0.0</span>
	</div>
	<script src="js/keyboard.js"></script> 
	<script src="js/three.js"></script> 
	<script src="js/OrbitControls.js"></script>
	<script src="js/functions/drawGrid.js"></script> 
	<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
	<script src="js/webgl.js"></script> 
</body>
</html>