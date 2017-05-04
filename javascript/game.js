
var char1 = {
		name: "Dodger",
		health: 100,
		attack: 30,
		counter: 50,
		image: "../assets/dog1.jpg"
	}

var char2 = {
		name: "Ivy",
		health: 120,
		attack: 60,
		counter: 20,
		image: "../assets/dog1.jpg"
	}

var char3 = {
		name: "Jake",
		health: 70,
		attack: 50,
		counter: 30,
		image: "../assets/dog1.jpg"
	}

var char4 = {
		name: "Molly",
		health: 150,
		attack: 20,
		counter: 40,
		image: "../assets/dog1.jpg"
	}

var characters = [char1, char2, char3, char4];


$(document).ready(function(){
	console.log('ready');
	var x;
	// $(characters[x]).each(function(){
	// 	$('#chars').append('<div>New div for each character</div>');
	// })
});


function createImages() {
	var i = $('<img></img>');
	$('#chars').append(i);
	i.attr("src","http://www.margaretchoi.com");
	console.log('works');
}

createImages();

function selectPlayer() {
	// $('img').click();
//On image click, remove image and create image in defender div
}

function createEnemies() {
//After player is selected, tag other players as enemies
//On image click, first enemy to fight is chosen and moved to 
}

function selectEnemy() {
// 	
}


