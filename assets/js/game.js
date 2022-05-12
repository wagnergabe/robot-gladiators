
//---Player 1 stats---//
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//---NPC STATS---///
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 40;


//---This creates a function named "fight"---//

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose");

        if (promptFight === "skip" || promptFight === "SKIP") {

            var confirmSkip = window.confirm("Are you sure you want to skip?");
                if (confirmSkip) {
                    window.alert(`${playerName} has chosen to skip the fight`);
                        playerMoney = playerMoney - 10;
                            console.log("playerMoney", playerMoney);
                                break;
            }
        }
//--Player 1 attacks--//
    enemyHealth = enemyHealth - playerAttack;
    console.log(`${playerName} has attacked ${enemyName}, ${enemyName} now has ${enemyHealth} health left!`);
        
    if (enemyHealth <= 0) {
        window.alert(`${enemyName} has been defeated!`);
        playerMoney = playerMoney + 10;
        break;

        } else {
        window.alert(`${enemyName} has ${enemyHealth} health remaning`);
        }

//--NPC attacks--//
    playerHealth = playerHealth - enemyAttack;
    console.log(`${enemyName} has attacked ${playerName}, ${playerName} now has ${playerHealth} remaining!`);
    if (playerHealth <= 0) {
        window.alert(`${playerName} has vanquished`);
        break;
        } else {
        window.alert (`${playerName} has ${playerHealth} remaining`);
        }
      }
}      


//--Start Game Function--//
var startGame = function() {
 playerHealth = 100;
 playerAttack = 10;
 playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
  }
  else {
      window.alert("Your robot has been defeated :(");
      break;
    }
  }
  //play again
  endGame();
}

var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = window.confirm("Would You like to play again?");
        if (playAgainConfirm) {
            startGame();
        }
        else {
            window.alert("Thank you for playing! Come back again soon!");
        }
}

//Start Game//
startGame();