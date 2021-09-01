//Задание 7.
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let tall = [5, 0, 15, 0, 25, 30, 35, 40, 45, 0];
liste(tall);
function liste(arr) {
  let sumOdd = 0;
  let sumPar = 0;
  let sumNull = 0;
  let sumString = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] !== 0 ) {
      sumPar++;
    } else if (arr[i] % 2 === 1  && arr[i] !== 0) {
      sumOdd++;
    } else if (arr[i] === 0){
      sumNull++;
    }
      else if (arr[i] = 'string' && arr[i] !== Number) 
        sumString++;
      }
      console.log("Odd : " + sumOdd);
      console.log("Par : " + sumPar);
      console.log("Null : " + sumNull);
      console.log("string : " + sumString);
    }

  
  

