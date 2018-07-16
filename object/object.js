let cat = {
    name: "Freckles",
    color: "Orange",
    sound_made: "meow"
};

console.log(cat);


const speak = function () { console.log(this.sound_made); };
cat.speak = speak.bind(cat);

cat.speak();
