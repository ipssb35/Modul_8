//Задание 4.
//Записать в переменную случайное целое число в диапазоне [0; 100].
//Используйте объект Math.

function getRandomInt(x) {
    return Math.floor(Math.random(0, 100) * x);
    }
    console.log(Math.floor(Math.random() * 100));