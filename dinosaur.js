var Dinosaur = function () {
  this.type = options.type;
  this.offspring = options.offspring;
}

Dinosaur.prototype.type = function(){
  this.type = "Tyrannosaurus"
}

Dinosaur.prototype.offspring = function(){
  this.offspring = 1
}

module.exports = Dinosaur;
