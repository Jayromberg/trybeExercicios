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
  let maxDmg = dragon.strength;
  let minDmg = 15; 
  let damage = Math.floor(Math.random() * (maxDmg - minDmg) ) + minDmg;
  return damage;
}

//Bonus 2

const warriorDamage = () => {
  let minDmg = warrior.strength;
  let maxDmg = minDmg * warrior.weaponDmg
  let damage = Math.floor(Math.random() * (maxDmg - minDmg) ) + minDmg;
  return damage;
}

//Bonus 3

const mageDamage = () => {
  let minDmg = mage.intelligence;
  let maxDmg = minDmg * 2;
  let randomDamage = Math.floor(Math.random() * (maxDmg - minDmg) ) + minDmg;
  let SpentMana = 15;
  if(mage.mana < 15){
    return { dano: "Não possui mana suficiente", mana: 0 }
  }
  const damage = {
    dano: randomDamage,
    mana: SpentMana,
  }
  return damage;
}

console.log(mageDamage());