function Animal(name){
  this.name = name;
}
Animal.prototype.walk = function(){
console.log(this.name + 'walks');

};
function Rabbit(name){
  this.name = name;
}
//because we are making this rabiit a prototype of rabbit which is a  prototype of animal
Rabbit.prototype.__proto__=Animal.prototype;
Rabbit.prototype.walk = function(){
  console.log(this.name + " bounces!")
};
let thing = new Animal('Thumper');
console.log(thing.walk());
