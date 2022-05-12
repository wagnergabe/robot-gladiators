
//---Player 1 stats---//
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 40;
var playerMoney = 10;

//---NPC STATS---///
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


//---This creates a function named "fight"---//

var fight = function(enemyName) {
    while(enemyHealth > 0) {
    //window.alert("Welcome to Robot Gladiators");

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose");
    if (promptFight === "fight" || promptFight === "fight") {

//--Player 1 attacks--//
    enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} has attacked ${enemyName}, ${enemyName} now has ${enemyHealth} health left!`);
        if (enemyHealth <= 0) {
        window.alert(`${enemyName} has been defeated!`);
        } else {
        window.alert(`${enemyName} has ${enemyHealth} health remaning`);
        }

//--NPC attacks--//
    playerHealth = playerHealth - enemyAttack;
    console.log(`${enemyName} has attacked ${playerName}, ${playerName} now has ${playerHealth} remaining!`);
    if (playerHealth <= 0) {
        window.alert(`${playerName} has vanquished`);
        } else {
        window.alert (`${playerName} has ${playerHealth} remaining`);
        }    

//--Player skips fight--//

    } else if (promptFight === "skip" || promptFight === "SKIP") {

        var confirmSkip = window.confirm("Are you sure you want to skip?");
            if (confirmSkip) {
                window.alert(`${playerName} has chosen to skip the fight`);
                    playerMoney = playerMoney - 2;
        } else {
            fight();
        } 
    } else {
        window.alert("Please type a valid option, fight or skip");
    } 
    } 
}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
};