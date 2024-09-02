var name1 = "John";
const power1 = 50; 
var name2 = "Wick";
var life2 = 100; 
const def = 20; 
var shield = "S"; 

let damage;
if (power1 > def) {
    if (shield === "N") {
        damage = power1 - def;
    } else {
        damage = (power1 - def) / 2;
    }
} else {
    damage = 0;
}

let currentLife = life2 - damage;

let message;
if (damage > 0) {
    if (shield === "N") {
        message = `${name1} atacou. ${name2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${currentLife}.`;
    } else {
        message = `${name1} atacou. ${name2} sofreu ${damage} de dano por possuir escudo. Sua vida agora é ${currentLife}.`;
    }
} else {
    message = `${name1} atacou, mas não afetou ${name2}. Nenhum dano causado!`;
}

console.log(message);
