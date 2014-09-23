	// revolutions per second
	var angularSpeed = 0.2; 
	var lastTime = 0;

	var camera, cube, controls, wallLeft, wallRight, wallUp, wallDown;

	var move_fwd = false;
	var move_bck = false;
	var move_lft = false;
	var move_rht = false;
	var collission_x = false;
	var collission_z = false;
	var speed = 0.2;

	//Debug
	var cam_x_html = document.getElementById('cam-x');
	var cam_y_html = document.getElementById('cam-y');
	var cam_z_html = document.getElementById('cam-z');
	var cube_x_html = document.getElementById('cube-x');
	var cube_y_html = document.getElementById('cube-y');
	var cube_z_html = document.getElementById('cube-z');

	$( "body" ).keydown(function(event) {
  		switch(event.keyCode){
  			//right
  			case 39:
  				move_rht = true;
  				break;
  			case 37:
  				move_lft = true;
  				break;
			case 38:
				move_fwd = true;
				break;
			case 40:
				move_bck = true;
				break;
  		} 
	}).keyup(function(event){
		switch(event.keyCode){
			//right
  			case 39:
  				move_rht = false;
  				break;
  			case 37:
  				move_lft = false;
  				break;
			case 38:
				move_fwd = false;
				break;
			case 40:
				move_bck = false;
				break;
  		} 
	});

	// this function is executed on each animation frame
	function animate(){

		// update	
		var time = (new Date()).getTime();
		var timeDiff = time - lastTime;
		var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
		// cube.rotation.y += angleChange;
		// cube.rotation.x += angleChange;
		lastTime = time;
		// camera.lookAt(new THREE.Vector3(0, 0, 0));

		// render
		renderer.render(scene, camera);

		if(cube.position.x <= (wallLeft.position.x+10)){
			collission_x = true
		}else{
			collission_x = false;
		}

		if(cube.position.x <= (wallRight.position.x-10)){
			collission_x = true
		}else{
			collission_x = false;
		}



		//debug
		cam_x_html.innerHTML = Math.round(camera.position.x * 100) / 100;
		cam_y_html.innerHTML = Math.round(camera.position.y * 100) / 100;
		cam_z_html.innerHTML = Math.round(camera.position.z * 100) / 100;

		cube_x_html.innerHTML = Math.round(cube.position.x * 100) / 100;
		cube_y_html.innerHTML = Math.round(cube.position.y * 100) / 100;
		cube_z_html.innerHTML = Math.round(cube.position.z * 100) / 100;

		
		//movement
		if(move_rht)
			cube.translateX(10* speed);

		if(move_lft)
			cube.translateX(10* (-speed));

		if(move_bck)
			cube.translateZ(10* speed);

		if(move_fwd)
			cube.translateZ(10* (-speed));


		controls.target = cube.position;



    	controls.update();

		// request new frame
		requestAnimationFrame(function(){
		    animate();		    
		});
	}


	// renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// camera
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 55.09;
	camera.position.x = -0.65;
	camera.position.y = 32.59;


	// scene
	var scene = new THREE.Scene();
	        
	// cube
	cube = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshNormalMaterial());
	cube.overdraw = true;
	scene.add(cube);

	//walls

	wallLeft = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 250), new THREE.MeshNormalMaterial());
	wallLeft.position.x = -120;
	wallRight = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 250), new THREE.MeshNormalMaterial());
	wallRight.position.x = 120;
	wallUp = new THREE.Mesh(new THREE.BoxGeometry(250, 10, 10), new THREE.MeshNormalMaterial());
	wallUp.position.z = 120;
	wallDown = new THREE.Mesh(new THREE.BoxGeometry(250, 10, 10), new THREE.MeshNormalMaterial());
	wallDown.position.z = -120;

	scene.add(wallLeft);
	scene.add(wallRight);
	scene.add(wallUp);
	scene.add(wallDown);

	// Grid
	var lineMaterial = new THREE.LineBasicMaterial({
		color: 0xffffff
	});

	drawGridFloor(scene,300);


	
	//Control

    controls = new THREE.OrbitControls(camera, renderer.domElement);

	// start animation
	animate();

	

	