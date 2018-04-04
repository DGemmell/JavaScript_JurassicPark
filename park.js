var Park = function () {
  this.enclosure = [];
}

Park.prototype.empty = function() {
  this.enclosure = [];
}
Park.prototype.addDinosaur = function(item) {
  this.enclosure.push(item);
}

Park.prototype.removeType = function(type) {
  for (var dinosaur of this.enclosure) {
    if (dinosaur.type === type) {
      var index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index, 1);
    }
  }
}


module.exports = Park;
