// Напишите цикл for, который выводить в консоль числа от 1 до 10

//for(let i=1; i <= 10; i ++) {
 //   console.log(i);
//}
//выражение 1 - начальное выражение счетчика;
// выражение 2 - условие повторение цикла; 
// выражение 3 - изменение счетчика

//for(let i = 65; i >= 15; i -= 5) {
  //  console.log(i);
//}

// В программе заданы две переменные n и m с числовым значением каждая. 
//Число n больше числа m. 
//Напишите цикл, который выводит в консоль все четные числа от m до n.

//function getNums(n,m) {
  //  for(let i = m; i <= n; i++) {
   //     if(i %2 ==0) {
   //         console.log(i);
   //     }
  //  }
//}
//const getNums_arrow = (n, m) => {
  //  for(let i = m; i <=n; i++) {
   //     if(i % 2 === 0) {
   //         console.log(i);
 //       }
 //   }
//}
//getNums(10, 4);

//В программе заданы две переменные n и m с числовым значением каждая. 
//Напишите цикл, который выводит в консоль числа от большего числа до меньшего.

const getNums_2 = (n, m) => {
    if
    (n>m) 
    {
        for(let i =n; i >= m; i--){
            console.log(i)
        }
    } else if (m > n) {
        for(let i =m; i >=n; i--){
            console.log(i)
        }
    } else {
        console.log('this nimber is equal')
    }

    }

    // Напишите программу,
   //  которая с помощью цикла считает сумму 
   //  чисел от 1 до 10 и выводит в консоль.

   const getMult = () => {
    let result = 1;
    for(let i = 1; i <= 10; i++) {
      sum += i;
    }
    return result;
   };
   //console.log(getSum());

   const getSumma = () => {
    let sum = 0;
    for(let i =1; i <= 10; i++) {
      sum += i;
    }
    return sum;
   };
   //console.log(getSumma());

   // Напишите программу, которая с помощью цикла считает 
   //сумму чисел от 1 до 10 и выводит в консоль.

   const getSumme 1- () => {
    let sum = 0;
    for(let i=1; )
    let result = 1;
    for(let i = 1; i <= 10; i++) {
      if(i % 2 === 0)
      sum *= i;
    }
    return result;
   };
   console.log(getSum());