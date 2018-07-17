let a = 0;

function f() {
    a = 1;
}

f();
console.log(a);

(() => { a = 111; })();
console.log(a);


function g() {

    {
        var x = 300;
        let y = 400;  // lexical block scope
        let z = 500;  // lexical block scope
    }

    console.log(x);
    // console.log(y);  // ReferenceError
    // console.log(z);  // ReferenceError
}

g();
// console.log(x);  // ReferenceError
