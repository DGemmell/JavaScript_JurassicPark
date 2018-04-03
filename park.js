var Park = function () {
  this.enclosure = [];
}

Park.prototype.empty = function() {
  this.enclosure = [];
}
Park.prototype.addDinosaur = function(item) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeType = function(type) {
  for (var dinosaur of this.dinosaur) {
    if (dinosaur.type === type) {
      var index = this.dinosaur.indexOf(dinosaur);
      this.dinosaur.splice(index, 1);
    }
  }
}


module.exports = Park;
