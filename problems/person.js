class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  sayHello(){
    return `Hello. I'm ${this.name}.`
  }

  visit(otherPerson){
    return `${this.name} visited ${otherPerson.name}.`
  }

  switchVisit(otherPerson){
    return otherPerson.visit(this);
  }

  update(obj){
    if (typeof obj !== 'object'){
      throw new TypeError('Not an object');
    } else if ('name' in obj === false || 'age' in obj === false){
      throw new TypeError('No name and age properties');
    } else {
      this.name = obj.name;
      this.age = obj.age;
    }

  }

  tryUpdate(obj){
    try{
      this.update(obj);
    } catch(error){
      return false;
    }

    return true;
  }

  static greetAll(...obj){
    return [...obj].map(person => person.sayHello());
  }
}

module.exports = Person;
