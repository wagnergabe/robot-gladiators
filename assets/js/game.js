


//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose");

if (promptFight === "" || promptFight === null) {
    window.alert("Your need to provide a valid answer! please try again.");
    return fightOrSkip();
}

promptFight = promptFight.toLowerCase();

    if (promptFight === 'skip') {
        var confirmSkip = window.confirm ("Are you sure you want to quit?");

        if(confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip the battle.");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    return false;
};


//---This creates a function named "fight"---//

var fight = function(enemy) {
    
    var isPlayerTurn = true;
        if(Math.random() > 0.5) {
            isPlayerTurn = false;
        }

    while (playerInfo.health > 0 && enemy.health > 0) {
        if(isPlayerTurn) {
            if(fightOrSkip()) {
                break;
            }
            
        //--Player 1 attacks--//
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(`${playerInfo.name} has attacked ${enemy.name}, ${enemy.name} now has ${enemy.health} health left!`);

        if (enemy.health <= 0) {
            window.alert(`${enemy.name} has been defeated!`);
            playerInfo.money = playerInfo.money + 20;
            break;

        } else {
            window.alert(`${enemy.name} has ${enemy.health} health remaning`);
        }

        }else {
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(`${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} remaning`);

        //--NPC attacks--//
        if (playerInfo.health <= 0) {
            window.alert(`${playerInfo.name} has died!`);
            break;
        } else {
            window.alert(`${playerInfo.name} still has ${playerInfo.health} health remaning`)
        } 
    }
    isPlayerTurn = !isPlayerTurn;
  }      
};

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
    window.alert("The game has now ended. Let's see how you did!");
  
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
      highScore = 0;
    }
    
    if (playerInfo.money > highScore) {
      localStorage.setItem("highscore", playerInfo.money);
      localStorage.setItem("name", playerInfo.name);
  
      alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
    } 
    else {
      alert(playerInfo.name + " did not beat the high score of " + highScore + ". Maybe next time!");
    }
 
    var playAgainConfirm = window.confirm("Would you like to play again?");
  
    if (playAgainConfirm) {
      startGame();
    } 
    else {
      window.alert("Thank you for playing Robot Gladiators! Come back soon!");
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



//Start Game//
startGame();