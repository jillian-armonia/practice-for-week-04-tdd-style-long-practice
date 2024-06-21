// Your code here
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

const Person = require('../problems/person');

describe('class Person', function(){
    let laura;
    let danny;
    let carmilla;

    beforeEach(function(){
        laura = new Person('Laura', 19);
        danny = new Person('Danny', 23);
        carmilla = {name: 'Carmilla', age: 326}
    });

    describe('constructor', function(){
        it('should have a name property and have a set name', function(){
            expect(laura).to.have.property('name', laura.name);
        });

        it('should have an age property and a set age', function(){
            expect(laura).to.have.property('age', laura.age);
        })
    });

    describe('sayHello', function(){
        it("should return a string of the person's name and a greeting message", function(){
            expect(laura.sayHello()).to.eql(`Hello. I'm ${laura.name}.`)
        })
    });

    describe('visit(otherPerson)', function(){
        it("should return a string that this person visited the other person", function(){
            expect(laura.visit(danny)).to.eql(`${laura.name} visited ${danny.name}.`);
        })
    });

    describe('switchVisit(otherPerson)', function(){
        it('should the visit() function on the parameter otherPerson, passing in the argument as the current person', function(){
            expect(laura.switchVisit(danny)).to.eql(`${danny.name} visited ${laura.name}.`);
        })
    });

    describe('update(obj)', function(){
        it('should throw a TypeError with a clear message if the passed-in argument is not an object', function(){
            expect(() => laura.update(17)).to.throw(TypeError, 'object');
        });

        it('should update the properties of the person with the passed-in values if the argument is an object', function(){
            laura.update(carmilla);
            expect(laura.name).to.eql("Carmilla");
            expect(laura.age).to.eql(326);
        });

        it('should throw a TypeError with a clear message if the passed-in argument does not have a name and age property', function(){
            expect(() => laura.update({vampire: 1})).to.throw(TypeError, 'properties');
        })
    });

    describe('tryUpdate(obj)', function(){
        it('should return true if the function update(obj) is invoked successfully', function(){
            expect(laura.tryUpdate(carmilla)).to.be.true;
        })

        it('should return false if the function update(obj) is not invoked successfully', function(){
            expect(laura.tryUpdate(17)).to.be.false;

        })
    });

    describe('static greetAll(obj)', function(){
        it('should call the sayHello() method on each Person instance and return an array of stored strings', function(){
            expect(Person.greetAll(laura, danny)).to.be.eql([laura.sayHello(), danny.sayHello()]);
            console.log(Person.greetAll(laura, danny))
        })
    })

})
