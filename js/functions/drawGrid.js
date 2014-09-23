//line
	var material = new THREE.LineBasicMaterial({
		color: 0xFFFFFF
	});
	
function drawGridWall(scene,square){

	for (i = -square; i < square; i=i+(square/10)) { 
		var Ygeometry = new THREE.Geometry();
		Ygeometry.vertices.push(
			new THREE.Vector3( i, -square, 0 ),
			new THREE.Vector3( i, square, 0 )
		);

		var gridLineY = new THREE.Line( Ygeometry, material );
		scene.add( gridLineY );

		var Xgeometry = new THREE.Geometry();
		Xgeometry.vertices.push(
			new THREE.Vector3( -square, i, 0 ),
			new THREE.Vector3( square, i, 0 )
		);

		var gridLineX = new THREE.Line( Xgeometry, material );
		scene.add( gridLineX );
	}	

	var closeGrid = new THREE.Geometry();
		closeGrid.vertices.push(
			new THREE.Vector3( square, square, 0 ),
			new THREE.Vector3( -square, square, 0 ),
			new THREE.Vector3( square, square, 0 ),
			new THREE.Vector3( square, -square, 0 )
		);

		var closeLine = new THREE.Line( closeGrid, material );
		scene.add( closeLine );
}

function drawGridFloor(scene,square){

	for (i = -square; i < square; i=i+2) { 
		var Ygeometry = new THREE.Geometry();
		Ygeometry.vertices.push(
			new THREE.Vector3( i, 0, -square),
			new THREE.Vector3( i, 0, square )
		);

		var gridLineY = new THREE.Line( Ygeometry, material );
		scene.add( gridLineY );

		var Xgeometry = new THREE.Geometry();
		Xgeometry.vertices.push(
			new THREE.Vector3( -square, 0, i ),
			new THREE.Vector3( square, 0, i )
		);

		var gridLineX = new THREE.Line( Xgeometry, material );
		scene.add( gridLineX );
	}	

	var closeGrid = new THREE.Geometry();
		closeGrid.vertices.push(
			new THREE.Vector3( square, 0, square ),
			new THREE.Vector3( -square, 0, square ),
			new THREE.Vector3( square, 0, square ),
			new THREE.Vector3( square, 0, -square )
		);

		var closeLine = new THREE.Line( closeGrid, material );
		scene.add( closeLine );
}


