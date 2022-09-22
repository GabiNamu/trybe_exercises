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

  const dragonDamage = () => {
    battleMembers.dragon.damage = Math.floor(Math.random() * (50 - 15 + 1) + 15);
     return battleMembers.dragon.damage;
  }

  const warriorDamage = () => {
    battleMembers.warrior.damage = Math.floor(Math.random() * (60 - 30 + 1) + 30);
     return battleMembers.warrior.damage;
  }

  const mageTurn = () => {
    const magoObj = {danoGasto: Math.floor(Math.random() * (90 - 45 + 1) + 45),
                      manaGasta: 15}
    if(battleMembers.mage.mana < 15){
        magoObj.danoGasto = 'Não possui mana suficiente';
        manaGasta = 0;
    }
    battleMembers.mage.damage = magoObj.danoGasto;
    battleMembers.mage.mana =  battleMembers.mage.damage - magoObj.manaGasta;
    return magoObj;
  }

//   console.log(dragonDamage());
//   console.log(warriorDamage());

  const gameActions = {
    // Crie as HOFs neste objeto.
    warriorFunc: (callback) => {
       battleMembers.dragon.healthPoints = battleMembers.dragon.healthPoints - callback();
    },
    mageFunc: (callback) => {
        battleMembers.dragon.healthPoints = battleMembers.dragon.healthPoints - callback().danoGasto;
        // battleMembers.mage.damage = callback().danoGasto;
    },
    dragonFunc: (callback) => {
        battleMembers.warrior.healthPoints = battleMembers.warrior.healthPoints - callback();
        battleMembers.mage.healthPoints = battleMembers.mage.healthPoints - callback();
    },
    newbattleMembers: () => {
        console.log(battleMembers);
        return battleMembers;
    }
  };
  
  gameActions.dragonFunc(dragonDamage);
  gameActions.warriorFunc(warriorDamage);
  gameActions.mageFunc(mageTurn); 
  gameActions.newbattleMembers();
  console.log(battleMembers)