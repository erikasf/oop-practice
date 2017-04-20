let hamster = {
  stomach: [],
  eat(food){
    this.stomach.push(food);
  }
};
let speedy = {
  __proto__:hamster,
  stomach: []
};
let lazy = {
  __proto__: hamster,
  stomach: []
};
speedy.eat('apple')
 console.log(speedy.stomach);

lazy.eat('banana');
console.log(lazy.stomach)
