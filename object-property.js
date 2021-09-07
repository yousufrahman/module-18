var computer = {
    price: 29000,
    storage: '156gb',
    color: 'silver',
    processor: 'intel i5',
    granty: '5year',
};
computer['color'] = 'red';
console.log(computer);
computer['color'] = 'yellow';
console.log(computer);
computer['storage'] = '159gb';
console.log(computer);
console.log(computer.storage);
console.log(computer.color);
var computerPrice = computer.price;
console.log(computer.price);
var computerStorage = computer.storage;
console.log(computerStorage);
var computerPrice = computer.price;
computer.price = 20000;
console.log(computer.price);
computerColor = computer.color;
computer.color = 'blue';
console.log(computer.color);
computer['color'] = 'green';
console.log(computer);
computer['processor'] = 'intel i8';
console.log(computer);
computer['color'] = 'black';
console.log(computer);
