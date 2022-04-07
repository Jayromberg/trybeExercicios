const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Bonus 1

const dragonDamage = () => {
  let dragonStrength = dragon.strength;
  let damage = Math.floor((Math.random() * dragonStrength) + 1);
  if(damage < 15){
    damage = 15;
  }
  return damage;
}

//Bonus 2

const warriorDamage = () => {
  let warriorStrength = warrior.strength;
  let weaponDamage = warrior.weaponDmg;
  let damage = Math.floor((Math.random() * (warriorStrength * weaponDamage)) + 1);
  if(damage < warriorStrength){
    damage = warriorStrength;
  }
  return damage;
}

