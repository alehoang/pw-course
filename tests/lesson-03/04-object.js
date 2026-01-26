// 1. Tao object car va in ra nam san xuat
console.log('Bai 1: Tao object car va in ra nam san xuat');

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(`Nam san xuat: ${car.year}`);

// 2. Tao object person va in ra ten duong
console.log('Bai 2: Tao obj person va in ra ten duong');

const person = {
    name: "Nguyen",
    address: {
        street: "Truong Chinh",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}

console.log(`Ten duong: ${person.address.street}`);

// 3. Tao object student va truy cap den diem mon toan su dung ngoac vuong
console.log('Bai 3: Tao object student va truy cap den diem mon toan');

const student = {
    name: "Lan",
    grades: {
        math: 8,
        english: 9
    }
}

console.log(`Diem mon toan: ${student["grades"]["math"]}`);

// 4. Tao object settings. Thay doi volume va in ra object moi
console.log('Bai 4: Tao object settings. Thay doi volume va in ra object moi');
const settings = {
    volume: "On",
    brightness: "Off"
}

settings.volume = "Off";
console.log(settings);

// 5. Tao object bike, them thuoc tinh color
console.log('Bai 5: Tao object bike, them thuoc tinh color');

const bike = {}
bike.color = "Red";
console.log(bike);

// 6. Tao object employee, xoa thuoc tinh age khoi object
console.log('Bai 6: Tao object employee, xoa thuoc tinh age khoi object');

const employee = {
    name: "Smith",
    age: 33
}

delete employee.age;
console.log(employee);

// 7. 
console.log('Bai 6: Khai bao bien school');

const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}

console.log(school);
console.log(school["classA"][0]);