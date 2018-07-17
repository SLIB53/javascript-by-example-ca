class Animal {
    constructor (name) {
        this.name = name;
    }

    genGreeting () {
        return `Hello, my name is ${this.name}`;
    }
}

class Cat extends Animal {
    constructor (name, breed = 'tabby') {
        super(name);
        this.breed = breed;
    }

    get nameNormalized () {
        return this.name.toLowerCase();
    }

    static genPurr () {
        return 'purrrrrr';
    }
}


const freckles = new Cat('Freckles');

console.log(freckles);
console.log(freckles.nameNormalized);
console.log(freckles.genGreeting());
console.log(Cat.genPurr());

freckles.genGreeting = () => "GOODBYE";
console.log(freckles);
console.log(freckles.genGreeting());
