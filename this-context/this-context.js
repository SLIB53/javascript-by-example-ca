function doTwice (func) {
    func();
    func();
}

const cat = {
    name: "Freckles",
    whoAmI: function() {
        console.log(this.name);
    }
}

cat.whoAmI();
doTwice(cat.whoAmI);  // this.name will be undefined
doTwice(cat.whoAmI.bind(cat));
