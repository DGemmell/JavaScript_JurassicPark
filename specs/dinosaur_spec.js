var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  it('should have a type', function(){
    var dinosaur = new Dinosaur();
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");

  });

  it('should have a number of offspring per year', function(){
    var dinosaur = new Dinosaur();
    assert.strictEqual(dinosaur.offspring, 1);
  });

});
