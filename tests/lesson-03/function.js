// Khai bao function
function sayHelloWorld() {
    console.log("Demo Function");
}

//sayHelloWorld();

// Count 1->5 before sayHello
// Parameter
function countBeforeSayHello(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    sayHelloWorld();
}

//countBeforeSayHello(9);

// Ham sum(a, b)
function sum(a, b) {
    const sum = a + b;
    return sum;
}
const total = sum(5, 7);
// console.log(total);
// console.log(sum(2, 3));

// get max(c, d) => max
function max(c, d) {
    if (c > d) {
        return c;
    }
    return d;  
}

const getMax = max(-12, -2);
console.log(getMax);