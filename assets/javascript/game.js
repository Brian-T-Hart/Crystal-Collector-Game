var targetNumber = 0;
var blueGemNumber = 0;
var greenGemNumber = 0;
var pinkGemNumber = 0;
var purpleGemNumber = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;


function random(randomizer, adder) {
	return Math.floor((Math.random() * randomizer) + adder);
}

function showmessage(message) {
	$('#message').html(message);
}

function displayTotalScore() {
	$("#totalScore").html(totalScore);
}

function displayTargetNumber() {
	$('#targetNumber').html(targetNumber);
}

function addWin() {
	wins = wins + 1;
	$("#wins").html(wins);
}

function addLoss() {
	losses = losses + 1;
	$("#losses").html(losses);
}

function initGame() {
	targetNumber = random(50,40);
	blueGemNumber = random(20,5);
	greenGemNumber = random(15,3);
	pinkGemNumber = random(10,2);
	purpleGemNumber = random(5,1);
	totalScore = 0;
	displayTargetNumber();
	displayTotalScore();
	showmessage('Click on a gem to start.')
}

function main() {
$("#blueGem").click(function() {
	totalScore = totalScore + blueGemNumber;
	displayTotalScore();
	checkScore();
	});
$("#greenGem").click(function() {
	totalScore = totalScore + greenGemNumber;
	displayTotalScore();
	checkScore();
	});
$("#pinkGem").click(function() {
	totalScore = totalScore + pinkGemNumber;
	displayTotalScore();
	checkScore();
	});
$("#purpleGem").click(function() {
	totalScore = totalScore + purpleGemNumber;
	displayTotalScore();
	checkScore();
	});
}

function checkScore() {
	displayTotalScore();
	var x = totalScore;
	var y = targetNumber;

	if (x < y) {
		showmessage('Keep going!')
	}

	if (x === y) {
		showmessage('Great Job! You won.')
		addWin();
		setTimeout(initGame, 2000);
		// initGame();
	}
	
	if (totalScore > targetNumber) {
		showmessage('Bummer! You went over!')
		addLoss();
		setTimeout(initGame, 2000);
		// initGame();
	}
}			

$(document).ready(initGame());
main();