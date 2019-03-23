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


function rest(whathero) {
    if (whathero.health === 10) {
        alert('Health is already full!');
    }
    whathero.health= 10;
    return whathero;
}

const axe = {
    type: "axe",
    damage: 5,
}

const ghost = {
    type: "enemy",
    health: 10,
    weapon: {
        type: "scare",
        damage: 2,
    },
}

function pickUpItem(whathero, newWeapon) {
    whathero.inventory.push(newWeapon);
    const thatweapon = document.getElementById("axe");
    thatweapon.classList.add("hide");
    const eBag = document.getElementById("bag");
    eBag.classList.remove('hide');

}
function equipWeapon(newEntry) {
    if (newEntry.inventory.length === 0) {
        return;
    }
    newEntry.weapon = newEntry.inventory[0];
    const eBag = document.getElementById("bag");
    const sGhost = document.getElementById("ghost");

    eBag.classList.add("hide");
    sGhost.classList.remove("hide")

}

function displayStats() {
    const ds = document.getElementById("ds");
    const displaySetting = document.getElementById("displaySetting");
    if (ds.className === 'hide') {
        displaySetting.classList.remove("hide");
        displaySetting.innerText = `Name: ${hero.name} Health: ${hero.health} Weapon: ${hero.weapon.type} Damage${hero.weapon.damage}`;
    } else {
        displaySetting.classList.add("hide");
    }
}

function attack() {
    ghost.health = ghost.health - hero.weapon.damage;
    hero.health = hero.health - ghost.weapon.damage;
    
    setTimeout(() => {
        document.getElementById("ghost").style.color = red;
    }, 1000);

    if (ghost.health === 0) {
        document.getElementById("ghost").classList.add("hide");
        alert("Congratulations! you won(i guess)");
    }
}