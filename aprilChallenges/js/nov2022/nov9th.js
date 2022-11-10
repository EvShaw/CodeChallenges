// given 3 arguments, determine who wins. 
// the first two arguments will represent fighters, with a name, their health and their attack. 
//the third argument will determin who goes first. 
// inside the function, create a binding for each fighter. Take their health and divide the damage per attack, round up with Math.ceil. 
//use a ternamry to find out who goes first, based off what interger from the two bindings from above are higher. nest a second ternary for the second fighter. 

function declareWinner(fighter1, fighter2, firstAttacker) {
    const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker


}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))