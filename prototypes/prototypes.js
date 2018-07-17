function Animal (name) {
    this.name = name;
}

Animal.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

function Cat (name, breed = 'tabby') {
    Animal.call(this, name);
    this.breed = breed;
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.purr = function () {
    console.log('purr');
}


const freckles = new Cat('Freckles');
console.log(freckles);
freckles.greet();
freckles.purr();
