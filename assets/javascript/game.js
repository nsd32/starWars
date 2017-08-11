var count = 0;
var value;
var emptyImage = "http://www.meadowbrookbuilding7.com/wordpress/wp-content/uploads/2014/05/Blank-Thumbnail.png"
var defenderImage = false;
battleCount = 0;

function battleWon() {
  if (defenderCharacter.healthPoints < 1) {
  	$('#defender').attr("src", emptyImage);
  	defenderCharacter.healthPoints = 0;
  	$('#defHealth').html(defenderCharacter.healthPoints);
  	defenderCharacter.name = " "
  	$('#defName').html(defenderCharacter.name);
  	$('#fight-button').prop('disabled', true);
    $('.character').prop('disabled', false);
    battleCount++;
  }
}

function gameOver() {
  if (userCharacter.healthPoints < 1) {
    count = 0;
    value = "";
    defenderImage = false;
    battleCount = 0;
    $('#char-selected').attr("src", emptyImage);
    $('#defender').attr("src", emptyImage);
    $('#userName').html("");
    $('#health').html("0");

    $('.character').show();
    alert('You Lose!!');
    $('.character').prop('disabled', false);
    $('#fight-button').prop('disabled', true);
    changeCharHeading();
    
  } else if (battleCount >= 3) {
  	count = 0;
    value = "";
    defenderImage = false;
    battleCount = 0;
    $('#char-selected').attr("src", emptyImage);
    $('#defender').attr("src", emptyImage);
    $('#userName').html("");
    $('#health').html("0");

    $('.character').show();
    alert('You Win!');
    changeCharHeading();
  }
}

function changeCharHeading() {
  if (count > 0) {
    $('#charHeading').html('Choose Your Opponent');
  } else {
  	$('#charHeading').html('Choose Your Character');
  }
}

var userCharacter = {
  name: "",
  healthPoints: 0,
  attackPoints: 0,
  // counterPoints: 0,
  multiplier: 0,

  setUserProps: function(value) {
  	switch (value) {
  	  case "obi":
  	  	userCharacter.name = 'Obi-Wan Kenobi';	
  	  	userCharacter.healthPoints = 120;
  	  	userCharacter.attackPoints = 8;
  	  	// userCharacter.counterPoints = 10;
  	  	userCharacter.multiplier = 8;

  	  	$('#userName').html(userCharacter.name);
  	  	$('#health').html(userCharacter.healthPoints);
  	  	break;

  	  case "luke":
  	  	userCharacter.name = 'Luke Skywalker';
  	  	userCharacter.healthPoints = 100;
  	  	userCharacter.attackPoints = 14;
  	  	// userCharacter.counterPoints = 8;
  	  	userCharacter.multiplier = 14;

  	  	$('#userName').html(userCharacter.name);
  	  	$('#health').html(userCharacter.healthPoints);
  	  	break;

  	  case "sidious":
  	  	userCharacter.name = 'Darth-Sidious';
  	  	userCharacter.healthPoints = 150;
  	  	userCharacter.attackPoints = 5;
  	  	// userCharacter.counterPoints = 12;
  	  	userCharacter.multiplier = 5;

  	  	$('#userName').html(userCharacter.name);
  	  	$('#health').html(userCharacter.healthPoints);
  	  	break;

  	  case "maul":
  	  	userCharacter.name = 'Darth-Maul';
  	  	userCharacter.healthPoints = 180;
  	  	userCharacter.attackPoints = 3;
  	  	// userCharacter.counterPoints = 14;
  	  	userCharacter.multiplier = 3;

  	  	$('#userName').html(userCharacter.name);
  	  	$('#health').html(userCharacter.healthPoints);
  	  	break;
  	}
  },

  decreaseUserHealth: function() {
  	userCharacter.healthPoints -= defenderCharacter.counterPoints;
  	$('#health').html(userCharacter.healthPoints);
  }

}

var defenderCharacter = {
  name: "",
  healthPoints: 0,
  // attackPoints: 0,
  counterPoints: 0,
  // multiplier: 0,

  setDefenderProps: function(value) {
  	switch (value) {
  	  case "obi":
  	  	defenderCharacter.name = 'Obi-Wan Kenobi';
  	  	defenderCharacter.healthPoints = 120;
  	  	// defenderCharacter.attackPoints = 12;
  	  	defenderCharacter.counterPoints = 10;
  	  	// defenderCharacter.multiplier = 12;

  	  	$('#defName').html(defenderCharacter.name);
  	  	$('#defHealth').html(defenderCharacter.healthPoints);
  	  	break;

  	  case "luke":
  	  	defenderCharacter.name = 'Luke Skywalker';  	  	
  	  	defenderCharacter.healthPoints = 100;
  	  	// defenderCharacter.attackPoints = 10;
  	  	defenderCharacter.counterPoints = 8;
  	  	// defenderCharacter.multiplier = 10;

  	  	$('#defName').html(defenderCharacter.name);
  	  	$('#defHealth').html(defenderCharacter.healthPoints);
  	  	break;

  	  case "sidious":
  	  	defenderCharacter.name = 'Darth-Sidious';	  	
  	  	defenderCharacter.healthPoints = 150;
  	  	// defenderCharacter.attackPoints = 15;
  	  	defenderCharacter.counterPoints = 12;
  	  	// defenderCharacter.multiplier = 15;

  	  	$('#defName').html(defenderCharacter.name);
  	  	$('#defHealth').html(defenderCharacter.healthPoints);
  	  	break;

  	  case "maul":
  	  	defenderCharacter.name = 'Darth-Maul';
  	  	defenderCharacter.healthPoints = 180;
  	  	// defenderCharacter.attackPoints = 18;
  	  	defenderCharacter.counterPoints = 14;
  	  	// defenderCharacter.multiplier = 18;

  	  	$('#defName').html(defenderCharacter.name);
  	  	$('#defHealth').html(defenderCharacter.healthPoints);
  	  	break;
  	}
  },

  decreaseDefHealth: function() {
  	defenderCharacter.healthPoints -= userCharacter.attackPoints;
  	$('#defHealth').html(defenderCharacter.healthPoints);
  }
}

$('.character').click(function () {

  if(count === 0) {
    $(this).hide();
    var image1 = $(this).find("img").attr("src");
    $('#char-selected').attr("src", image1); 
    value = $(this).val();
    console.log(value);
    userCharacter.setUserProps(value);
  } else {
    $(this).hide();
    var image2 = $(this).find("img").attr("src");
    $('#defender').attr("src", image2);
    value = $(this).val();
    console.log(defenderCharacter.name);
    defenderCharacter.setDefenderProps(value);
    $('#fight-button').prop('disabled', false);
    $('.character').prop('disabled', true); 
  }
  count++
  changeCharHeading();
});

$('#attack-button').click(function () {
	defenderCharacter.decreaseDefHealth();
	userCharacter.decreaseUserHealth();
	userCharacter.attackPoints += userCharacter.multiplier
	battleWon();
	gameOver();
});






















