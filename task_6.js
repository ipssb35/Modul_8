//Задание 6.
//Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
//Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let list = [5, 5, 5, 5, 5];
let checkNumber = list[0];
let boolean = true;

for (let i=0; i < list.length; i++) {
  if (list[i] != checkNumber ) {
    boolean = false;
    break;
  } else if (list[i] == checkNumber){
    boolean = true;
  }
} 