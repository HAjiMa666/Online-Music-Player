
function make(a) {
    a.foo = 2;
    a = { foo: 3 };
    console.log(a);
}
let a = { foo: 1 }


make(a);
console.log(a);