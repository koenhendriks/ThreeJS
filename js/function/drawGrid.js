function drawGrid(scene,min,max,size){
	var lineMaterial = new THREE.LineBasicMaterial({
		color: 0xffffff
	});
	var border = min-1;
	for (i = border; i < max; i=i+size) { 

		//drawing left to right
		var lineGeometry = new THREE.Geometry();
		lineGeometry.vertices.push(new THREE.Vector3(i, 0, min));
		lineGeometry.vertices.push(new THREE.Vector3(i, 0, max));
		lineGeometry.vertices.push(new THREE.Vector3(i, 0, max));			

		var line = new THREE.Line(lineGeometry, lineMaterial);
		scene.add(line);	

		//drawing right to left
		var lineGeometry = new THREE.Geometry();
		lineGeometry.vertices.push(new THREE.Vector3(min, 0, i));
		lineGeometry.vertices.push(new THREE.Vector3(max, 0, i));
		lineGeometry.vertices.push(new THREE.Vector3(max, 0, i));			

		var line = new THREE.Line(lineGeometry, lineMaterial);
		scene.add(line);			

		


		// //drawing in depth
		// var lineGeometry = new THREE.Geometry();
		// lineGeometry.vertices.push(new THREE.Vector3(0, -150, i));
		// lineGeometry.vertices.push(new THREE.Vector3(0, 150,  i));
		// lineGeometry.vertices.push(new THREE.Vector3(0, 150,  i));			

		// var line = new THREE.Line(lineGeometry, lineMaterial);
		// scene.add(line);	

		// var lineGeometry = new THREE.Geometry();
		// lineGeometry.vertices.push(new THREE.Vector3(0, i, -150));
		// lineGeometry.vertices.push(new THREE.Vector3(0, i,  150));
		// lineGeometry.vertices.push(new THREE.Vector3(0, i,  150));			

		// var line = new THREE.Line(lineGeometry, lineMaterial);
		// scene.add(line);	
	}
}