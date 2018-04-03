var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');
var assert = require('assert');

describe('Park', function () {

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

 beforeEach(function () {
    park = new Park();
    dinosaur1 = new Dinosaur({ type: 'Tyrannosaurus', offspring: 1 });
    dinosaur2 = new Dinosaur({ type: 'Velociraptor', offspring: 2 });
    dinosaur3 = new Dinosaur({ type: 'Triceratops', offspring: 4});
  });


  it('should start empty', function(){
      assert.strictEqual(park.enclosure.length, 0);

  });


  it('should be able to add a dinosaur', function(){
      park.addDinosaur(dinosaur1)
      assert.strictEqual(park.enclosure.length, 1 );

  });

  it('should be able to remove a type of dinosaur', function(){
      park.addDinosaur(dinosaur1)
      park.removeType('Tyrannosaurus')
      assert.strictEqual(park.enclosure.length, 0 );

  });


  // it('should be able to get all with offspring count more than 2', function(){
  //
  // });






});
