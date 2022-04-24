
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var ball;
var quadrado;
var retangulo;
var mundo;
var engine;
var ground;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	engine = Engine.create();
	mundo = engine.world;

	Engine.run(engine);

	//Crie os Corpos Aqui.
	var plane_options = {
		isStatic: true
	}

	var ball_options = {
		restitution: 0.9,
		friction: 1,
		frictionAir: 0
	}

	var quadrado_options = {
		restitution: 0.7,
		friction: 0.07,
		frictionAir: 0.0
	}

	var retangulo_options = {
		restitution: 0.1,
		friction: 1,
		frictionAir: 0.3
	}

	var ground_options = {
		isStatic : true
	}

	ball = Bodies.circle(500, 10, 10, ball_options);
	World.add(mundo, ball);

	quadrado = Bodies.rectangle(600, 50, 10, 10, quadrado_options);
	World.add(mundo, quadrado);

	retangulo = Bodies.rectangle(700, 50, 50, 10, retangulo_options);
	World.add(mundo, retangulo);

	ground = Bodies.rectangle(400,700,600,20,ground_options);
    World.add(mundo,ground);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {

	background(39);

	Engine.update(engine);

	ellipse(ball.position.x, ball.position.y, 40);
	rect(quadrado.position.x, quadrado.position.y, 30, 30);
	rect(retangulo.position.x, retangulo.position.y, 60, 40);
	rect(ground.position.x,ground.position.y,800,10);

}



