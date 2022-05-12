


//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//---Player 1 stats---//
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
      if (this.money >= 7) {
          window.alert("refilling player's health by 20 for 7 coins");
        this.health += 20;
        this.money -= 7;
      }
      else {
          window.alert("You need more coins");
      }
    },
    upgradeAttack: function () {
      if (this.money >= 7) {
          window.alert("upgrading player's attack by 6 for 7 coins")
        this.attack += 6;
        this.money -= 7;
      }
      else {
          window.alert("Come back with more coins!");
      }
    }
  };
//---NPC STATS---///
var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
  ];

//---This creates a function named "fight"---//

var fight = function(enemy) {
    

    while (playerInfo.health > 0 && enemy.health > 0) {

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose");

        if (promptFight === "skip" || promptFight === "SKIP") {

            var confirmSkip = window.confirm("Are you sure you want to skip?");
            if (confirmSkip) {
                window.alert(`${playerInfo.name} has chosen to skip the fight`);
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        //--Player 1 attacks--//
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(`${playerInfo.name} has attacked ${enemy.name}, ${enemy.name} now has ${enemy.health} health left!`);

        if (enemy.health <= 0) {
            window.alert(`${enemy.name} has been defeated!`);
            playerInfo.money = playerInfo.money + 10;
            break;

        } else {
            window.alert(`${enemy.name} has ${enemy.health} health remaning`);
        }

        //--NPC attacks--//
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(`${enemy.name} has attacked ${playerInfo.name}, ${playerInfo.name} now has ${playerInfo.health} remaining!`);
        if (playerInfo.health <= 0) {
            window.alert(`${playerInfo.name} has vanquished`);
            break;
        } else {
            window.alert(`${playerInfo.name} has ${playerInfo.health} remaining`);
        }
    }
}      


//--Start Game Function--//

var startGame = function() {
 playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
    if(playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    fight(pickedEnemyObj);

    if(playerInfo.health > 0 && i < enemyInfo.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the shop before the next round?");
        if (storeConfirm) {
        shop();
        }
    }
  }
  else {
      window.alert("Your robot has been defeated :(");
      break;
    }
  }
  //play again
  endGame();
};

var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("Great job! You've survived the game! You now have a score of " + playerInfo.money + ".");
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
};
//--Shop--//

var shop = function () {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
        );

shopOptionPrompt = parseInt(shopOptionPrompt);

    switch (shopOptionPrompt) {
        case 1:
              playerInfo.refillHealth();
              break;
        case 2:
              playerInfo.upgradeAttack();
              break;
        case 3:
            window.alert("Leaving the shop");
            break;
        default:
            window.alert("You did not pick a valid option. Try again. *hint: input 1 ,2, or 3");
            shop();
            break;
    }
};



//Start Game//
startGame();