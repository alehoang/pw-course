//1.Viet ham multiply nhan 2 tham so
console.log('Bai 1: Viet ham multiply')
function multiply(x, y) {
    const multiply = x * y;
    return multiply;
}

const product1 = multiply(4, 3);
const product2 = multiply(12, 15);
console.log(`Tich cua cap gia tri 1 la ${product1}`);
console.log(`Tich cua cap gia tri 2 la ${product2}`);

//2.Viet ham findMin nhan 3 tham so a, b,c tra ve gia tri nho nhat
console.log('Bai 2: Viet ham findMin')
function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    return c;
}

const getMin = findMin(1, -4, -3);
console.log(`So nho nhat la ${getMin}`);

//3. Viet ham getTopStudents
console.log('Bai 3: Viet ham getTopStudents')

function getTopStudents(student, threshold) {
    for (let i = 0; i < student.length; i++) {
        if (student[i].score >= threshold) {
            arrName.push(student[i].name);
        }
    }
    return arrName;
}

const student = [
    { "name": "Ben", "score": 10 },
    { "name": "Jack", "score": 5 },
    { "name": "Stuart", "score": 9 },
    { "name": "Amanda", "score": 9.5 },
    { "name": "Lee", "score": 8.5 },
    { "name": "Nick", "score": 8 }
]
const arrName = [];
const topList = getTopStudents(student, 8.5);
console.log(`Top sinh vien : ${topList}`);

//4. Viet ham calculateInterest
console.log('Bai 4: Viet ham calculateInterest')

function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
}

const getTotal = calculateInterest(5000000, 5.3, 2);
console.log(`Tong so tien la ${getTotal}`);