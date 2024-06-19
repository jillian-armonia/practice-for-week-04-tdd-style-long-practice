// Your code here
const { expect } = require('chai');

const reverseString = require('../problems/reverse-string')

describe('reverseString', function(){
    let string = "fun";

    it('should return a reversed string', function(){
        expect(reverseString(string)).to.be.equal("nuf");
    });

    it('should throw an error if the argument is not a string', function(){
        expect(reverseString).to.throw(TypeError);
    })
})
