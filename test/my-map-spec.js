const chai = require('chai');
const { expect } = require('chai');
const spies = require("chai-spies");
chai.use(spies);

const myMap  = require('../problems/my-map');

describe('myMap', function(){
    let array;
    let callback;

    beforeEach(function(){
        array = [1, 2, 3];
        callback = el => el * 2;
    });

    it('should not mutate the passed-in array argument', function(){
        myMap(array, callback);
        expect(array).to.eql([1, 2, 3]);
    });

    it('should not use the built-in method Array.map', function(){
        const spy = chai.spy.on(array, 'map');
        myMap(array, callback);
        expect(spy).to.not.have.been.called();
    });

    it('should invoke passed-in callback function on each element of the passed-in array', function(){
        const spy = chai.spy(callback);
        myMap(array, spy);
        expect(spy).to.have.been.called.exactly(array.length);
    })
})
