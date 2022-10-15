const createScene = function () {
    //CENA
    const scene = new BABYLON.Scene(engine);

    
    // CAMERA
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 1, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.panningSensibility = 0;
    camera.attachControl(canvas, true);


    //Luzes
    const luz1 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1,0,0), scene);
    const luz2 = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(-1,1,0), scene);
    luz1.intensity = 0.5;
    luz2.intensity = 0.5;

    //CHAO
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    var groundMaterial = new BABYLON.StandardMaterial("marbleMat", scene);
    var woodTexture = new BABYLON.Texture("https://media.istockphoto.com/photos/old-wall-texture-cement-dirty-gray-with-black-background-abstract-picture-id1197671817?b=1&k=20&m=1197671817&s=170667a&w=0&h=Xzuj91w6leAxHWyX1hJdSVdbzfc6adiOWQMciP6wmuM=", scene);
    groundMaterial.diffuseTexture = woodTexture;
    ground.material = groundMaterial;



    // Parede Direita
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", {height:3, width: 6});
    plane.position.z = 3;
    plane.position.y = 1.5;
    var planeMaterial = new BABYLON.StandardMaterial(scene);
    planeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    plane.material = planeMaterial;

    // Parede Fundo
    const plane2 = BABYLON.MeshBuilder.CreatePlane("plane", {height:3, width: 6});
    plane2.rotate(new BABYLON.Vector3(0, -90 ,0), BABYLON.Tools.ToRadians(90));
    plane2.position.x = -3;
    plane2.position.y = 1.5;
    var planeMaterial = new BABYLON.StandardMaterial(scene);
    planeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    plane2.material = planeMaterial;

    // Parede Frente
    const plane4 = BABYLON.MeshBuilder.CreatePlane("plane", {height:3, width: 6});
    plane4.rotate(new BABYLON.Vector3(0, 90 ,0), BABYLON.Tools.ToRadians(90));
    plane4.position.x = 3;
    plane4.position.y = 1.5;
    var planeMaterial = new BABYLON.StandardMaterial(scene);
    planeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    plane4.material = planeMaterial;

    // Parede Esquerda
    const plane3 = BABYLON.MeshBuilder.CreatePlane("plane", {height:3, width: 6});
    plane3.rotate(new BABYLON.Vector3(0, -180 ,0), BABYLON.Tools.ToRadians(180));
    plane3.position.z = -3;
    plane3.position.y = 1.5;
    var planeMaterial = new BABYLON.StandardMaterial(scene);
    planeMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    plane3.material = planeMaterial;

    //BANNER1
    const banner1 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.5, width: 2, depth: 0.05,wrap: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    banner1.rotate(new BABYLON.Vector3(0, 90 ,0), BABYLON.Tools.ToRadians(90));
    banner1.material = decalMaterial;
    banner1.position.x = -3;
    banner1.position.y = 1.5;
    banner1.position.z = -1.5;
    
    //IMGBANNER1
    var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
    decalMaterial.diffuseTexture = new BABYLON.Texture("https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8eW9kYXxlbnwwfHwwfHw%3D&w=1000&q=80", scene);
    decalMaterial.diffuseTexture.hasAlpha = true;
    decalMaterial.zOffset = -2;

    var decal = BABYLON.MeshBuilder.CreateDecal("decal", banner1, 
            { position: new BABYLON.Vector3(0, 0, 0), normal: new BABYLON.Vector3(0, 0, 1), size: new BABYLON.Vector3(2, 1.7, 2) });
        decal.material = decalMaterial;

    var decal2 = BABYLON.MeshBuilder.CreateDecal("decal", banner1, 
            { position: new BABYLON.Vector3(0, 0, 0), normal: new BABYLON.Vector3(0, 0, 1), size: new BABYLON.Vector3(2, 1.7, 2) });
    decal2.material = decalMaterial;

    decal.rotate(new BABYLON.Vector3(0, 90 ,0), BABYLON.Tools.ToRadians(90));
    decal.position.x = -3;
    decal.position.y = 1.9;
    decal.position.z = -1.5;

    
    
  

    //BANNER2
    const banner2 = BABYLON.MeshBuilder.CreateBox("box", {height: 2.5, width: 2, depth: 0.05});
    banner2.rotate(new BABYLON.Vector3(0, 90 ,0), BABYLON.Tools.ToRadians(90));
    var mat = new BABYLON.StandardMaterial("bricks");
	mat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/bricktile.jpg");
    banner2.material = mat;
    banner2.position.y = 1.5;
    banner2.position.x = -3;
    banner2.position.z = 1.5;

    
    return scene;
};