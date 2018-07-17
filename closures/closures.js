function foo() {
    const cat = {
        name: "Freckles",
        stars: 0
    };

    const parseName = () => cat.name.toLowerCase();
    const getStars = () => cat.stars;
    const addStar = () => { cat.stars++ };

    addStar();
    addStar();

    return {
        name: parseName(),
        stars: getStars()
    }
}

console.log(foo());
console.log(foo());


var dog = {
    name: "Bilbo",
    stars: 0
};

function boo() {

    const parseName = () => dog.name.toLowerCase();
    const getStars = () => dog.stars;
    const addStar = () => { dog.stars++ };

    addStar();
    addStar();

    return {
        name: parseName(),
        stars: getStars()
    }
}

console.log(boo());
console.log(boo());
