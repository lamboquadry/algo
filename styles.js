let a = 7;
let b = 12;

function bitwiseAND(a, b) {
    return a & b;
}

function bitwiseOR(a, b) {
    return a | b;
}

function bitwiseXOR(a, b) {
    return a ^ b;
}

console.log(bitwiseAND(a, b));
console.log(bitwiseOR(a, b));
console.log(bitwiseXOR(a, b));


// level 2

function redundant(str) {
    return function() {
        return str;
    };
}

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");

console.log(f1()); 
console.log(f2()); 
console.log(f3()); 