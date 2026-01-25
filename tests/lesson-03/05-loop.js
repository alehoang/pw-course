//1. tinh tong tu 1 den 100
console.log('Bai 1: Tinh tong tu 1 den 100');

let total = 0;
for (let i = 1; i <= 100; i++) {
    total = total + i;
}

console.log(total);

//2. In ra bang cuu chuong tu 2 den 9
console.log('Bai 2: In ra bang cuu chuong tu 2 den 9');

for (let i = 2; i < 10; i++) {
    console.log(`Bang cuu chuong ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(i, 'x', j, '=', i * j);
    }
}
//3. tao 1 mang chua cac so le tu 1 den 99
console.log('Bai 3: Tao 1 mang chua cac so le tu 1 den 99');

const arr = [];
// for (let i = 1; i < 100; i = i + 2) {
//     arr.push(i);
// }                          //hoac cach duoi
for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        arr.push(i);
    }
}
console.log(arr);

//4. In ra 10 email dua tren ten nguoi dung va so thu tu
console.log('Bai 4: In ra 10 email');

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

//5. Tinh tong doanh thu 12 thang trong nam
console.log('Bai 4: Tinh tong doanh thu 12 thang trong nam');

const revenue = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 100 },
    { "month": 3, "total": 150 },
    { "month": 4, "total": -200 },
    { "month": 5, "total": -150 },
    { "month": 6, "total": 40 },
    { "month": 7, "total": -10 },
    { "month": 8, "total": -10 },
    { "month": 9, "total": -130 },
    { "month": 10, "total": 90 },
    { "month": 11, "total": 50 },
    { "month": 12, "total": -10 }
]
let totalRevenue = 0;
for (let i = 0; i <= 11; i++) {
    totalRevenue = totalRevenue + revenue[i].total;
}
console.log(`Tong doanh thu 12 thang trong nam la ${totalRevenue}`);
