//hero object
let hero = {
    name: "Muci Baba",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "hands",
        damage: 2,
    },
};

//function that gives health to player(not that its needed in the game but still)
function rest(whathero) {
    if (whathero.health === 10) {
        alert('Health is already full!');
    }
    whathero.health= 10;
    return whathero;
}

//weapon object
const dagger = {
    type: "dagger",
    damage: 2,
}

//enemy object
const ghost = {
    type: "enemy",
    health: 10,
    weapon: {
        type: "scare",
        damage: 2,
    },
}

function pickUpItem(whathero, newWeapon) {
    //pushing weapon to the end of inventory array
    whathero.inventory.push(newWeapon);
    const thatweapon = document.getElementById("dagger");
    //hiding weapon after picking up to not confuse player
    thatweapon.classList.add("hide");
    //showing bag image
    const eBag = document.getElementById("bag");
    eBag.classList.remove('hide');

}
function equipWeapon(newEntry) {
    //if inventory is empty get out
    if (newEntry.inventory.length === 0) {
        return;
    }
    // reasigning weapon
    newEntry.weapon = newEntry.inventory[0];
    const eBag = document.getElementById("bag");
    const sGhost = document.getElementById("ghost");

    //hiding bag img to not confuse the player
    eBag.classList.add("hide");
    sGhost.classList.remove("hide")

}

//tried to make it a pop up box but didnt work i could just innerhtml it to main but then the whole game disappears
// function displayStats() {
//     //getting some basic locations here
//     const ds = document.getElementById("ds");
//     const displaySetting = document.getElementById("displaySetting");

//     //if class equals hide remove class and show info in the hidden div
//     if (ds.className === 'hide') {
//         displaySetting.classList.remove("hide");
//         displaySetting.innerText = `Name: ${hero.name} Health: ${hero.health} Weapon: ${hero.weapon.type} Damage${hero.weapon.damage}`;
//     } else {
//         //else hide it
//         displaySetting.classList.add("hide");
//     }
// }
//attack function
function attack() {
    //decreasing health when attacked
    ghost.health = ghost.health - hero.weapon.damage;
    hero.health = hero.health - ghost.weapon.damage;

    //tried to add function that flashes when hit
    // setTimeout(() => {
    //     document.getElementById("ghost").style.color = red;
    // }, 1000);

    //if ghost is dead disappear
    if (ghost.health === 0) {
        document.getElementById("ghost").classList.add("hide");
        alert("DAMN he dead")
        alert("Congratulations! you won(i guess)");
        return;
    }
    alert("Ouch")
}