let hero = {
    name: "Muci Baba",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "hands",
        damage: 0,
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

function pickUpItem(whathero, newWeapon) {
    whathero.inventory.push(newWeapon);

}
function equipWeapon(newEntry) {
    if (newEntry.inventory.length === 0) {
        return;
    }
    newEntry.weapon = newEntry.inventory[0];

}

function displayStats() {
    const main = document.getElementById("main");
    main.innerText = `Name: ${hero.name} Health: ${hero.health} Weapon: ${hero.weapon.type} Damage${hero.weapon.damage}`;
}