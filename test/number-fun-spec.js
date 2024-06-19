const { expect } = require('chai');

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', function(){
    it('should return the number 3', function(){
        expect(returnsThree()).to.be.equal(3);
    })
})

describe('reciprocal', function(){

    context('when arguments are valid', function(){
        it('should return the reciprocal of an argument', function(){
            expect(reciprocal(10)).to.be.equal(1/10);
            expect(reciprocal(5)).to.be.equal(1/5);
        });
    })

    context('when arguments are invalid', function(){
        it('should throw an error if n is not a number', function(){
            expect(() => reciprocal('string')).to.throw(TypeError, 'number');
        })

        it('should throw an error if n < 1', function(){
            expect(() => reciprocal(0)).to.throw(Error, 'range');
        })

        it('should throw an error if n > 1000000', function(){
            expect(() => reciprocal(1000001)).to.throw(Error, 'range');
        })
    })
})
