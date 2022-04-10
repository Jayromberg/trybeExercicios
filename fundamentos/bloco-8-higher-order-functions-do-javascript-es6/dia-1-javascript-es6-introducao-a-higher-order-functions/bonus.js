const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 25,
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

const dragonDamage = (objeto) => {
  let maxDmg = objeto.strength;
  let minDmg = 15; 
  let damage = Math.floor(Math.random() * (maxDmg - minDmg) ) + minDmg;
  return damage;
}

//Bonus 2

const warriorDamage = (objeto) => {
  let minDmg = objeto.strength;
  let maxDmg = minDmg * objeto.weaponDmg
  let damage = Math.floor(Math.random() * (maxDmg - minDmg) ) + minDmg;
  return damage;
}

//Bonus 3

const mageDamage = (objeto) => {
  let minDmg = objeto.intelligence;
  let maxDmg = minDmg * 2;
  let randomDamage = Math.floor(Math.random() * (maxDmg - minDmg) ) + minDmg;
  let SpentMana = 15;
  if(objeto.mana < 15){
    return  { damage: "Não possui mana suficiente", mana: objeto.mana }
  }
  let damage = {
    damage: randomDamage,
    mana: objeto.mana - SpentMana,
  }
  return damage;
}

//Bonus 4

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorAction: () => { 
    let dragonHealthPoints = battleMembers.dragon.healthPoints;
    let damage = warriorDamage(battleMembers.warrior);
    let turn = dragonHealthPoints - damage;
    let objectTurnDragon = {
      healthPoints: turn,
    }
    let objectTurnWarrior = {
      damage: damage,
    }
    Object.assign(dragon, objectTurnDragon);
    Object.assign(warrior, objectTurnWarrior);
  },
  mageAction: () => {
    let dragonHealthPoints = battleMembers.dragon.healthPoints;;
    let damage = mageDamage(battleMembers.mage);
    let turn = dragonHealthPoints - damage.damage;
    typeof damage.damage == 'string' ? turn = dragonHealthPoints : turn;
    let objectTurnMage = {
      mana: damage.mana,
      damage: damage.damage,
    }
    let objectTurnDragon = {
      healthPoints: turn,
    }
    Object.assign(dragon, objectTurnDragon);
    Object.assign(mage, objectTurnMage);
  },
  dragonAction: () => {
    let warriorHealthPoints = battleMembers.warrior.healthPoints;
    let mageHealthPoints = battleMembers.mage.healthPoints;
    let damage = dragonDamage(battleMembers.dragon);
    let turnWarrior = warriorHealthPoints - damage;
    let turnMage = mageHealthPoints - damage;
    let objectTurnWarrior = {
      healthPoints: turnWarrior,
    } 
    let objectTurnMage = {
      healthPoints: turnMage,
    }
    let objectTurnDragon = {
      damage: damage,
    }
    Object.assign(warrior, objectTurnWarrior);
    Object.assign(mage, objectTurnMage);
    Object.assign(dragon, objectTurnDragon);
  },
  return: () => battleMembers,
};

gameActions.warriorAction();
gameActions.mageAction();
gameActions.dragonAction();
console.log(gameActions.return());

gameActions.warriorAction();
gameActions.mageAction();
gameActions.dragonAction();
console.log(gameActions.return());

gameActions.warriorAction();
gameActions.mageAction();
gameActions.dragonAction();
console.log(gameActions.return());


