// function like() {
//   this.timesLiked++;
// }
//
// function hate() {
//   this.timesLiked--;
// }
//
// var pic1 = {
//   url: 'lolcat.jpg',
//   timesLiked: 0,
// };
//
// var pic2 = {
//   url: 'chucknorris.jpg',
//   timesLiked: 0
// };
// like.apply(pic1);
// like.apply(pic2);
//
// console.log(pic1.timesLiked);
// console.log(pic2.timesLiked);
//
// hate.apply(pic1);
//
// console.log(pic1.timesLiked);

// var mom = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   eyeColor: 'brown',
//   hairColor: 'black',
//   showInfo: function () {
//     for (var prop in this) {
//       if (typeof this[prop] === "function") {}
//       else {console.log(prop + ': ' + this[prop]);}
//     }
//   }
// };
// var daughter = {
//   firstName: 'Ilene',
//   hairColor: 'brown'
// };
//
// daughter.__proto__ = mom;
// mom.showInfo();
// daughter.showInfo();

// Four
function Character (name, health, power) {

}

Character.prototype.attack = function(enemy) {
  enemy.health -= this.power;
};

function Hero() {
  this.name = 'Hero';
  this.health = 10;
  this.power = 5;
}
  Hero.prototype = Object.create(Character.prototype);

  Hero.prototype.attack = function(enemy) {
    randNum = Math.floor(Math.random() * 10) + 1;
    console.log(randNum);
    if (randNum > 2) {
      enemy.health -= this.power;
    }
    else if (randNum <= 2){
      power = this.power * 2;
      enemy.health -= power;
    }
  };

  function Enemy() {
    this.name = 'Enemy';
    this.health = 6;
    this.power = 2;
  }

  Enemy.prototype = Object.create(Character.prototype);

var hero = new Hero();
var enemy = new Enemy();
hero.attack(enemy);
console.log(enemy.health);
//
// // Six
// function Person(name) {
//   this.name = name;
//   greet = function(other) {
//     console.log('Hello ' + other.name + '! My name is ' + this.name + '.');
//   };
// }
//
// var pOne = new Person('Rob');
// var pTwo = new Person('Riss');
// greet.apply(pOne, [pTwo]);
