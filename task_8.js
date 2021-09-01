//Задание 8.
//Создайте произвольный массив Map. 
//Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let car = new Map([
    ["Mercedes", "Germany"],
    ["Toyota", "Japan"],
    ["Dodge", "USA"]
]);
car.forEach((value, key) => {
    console.log(`${key} - ${value}`);
});


//или

let car = new Map([
    ["Mercedes", "Germany"],
    ["Toyota", "Japan"],
    ["Dodge", "USA"]
]);

car.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});