var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  var dinosaur;

  beforeEach(function () {
		dinosaur = new Dinosaur('Tyrannosaurus', 1);
    // dinosaur2 = new Dinosaur({ type: 'Velociraptor', offspring: 2});
    // dinosaur3 = new Dinosaur({ type: 'Triceratops', offspring: 4});
	});

  it('should have a type', function(){
    assert.strictEqual(dinosaur.type, "Tyrannosaurus");
  });



  it('should have a number of offspring per year', function(){
    assert.strictEqual(dinosaur.offspring, 1);
  });

});
