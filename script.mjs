// Part1: Fizz Buzz

// for(let i = 1 ; i <=100; i++){
//     if(i%3 == 0 && i%5 == 0){
//         console.log("Fizz Buzz");
//     }else if(i%3 ==0){
//         console.log("Fizz");
//     }else if (i%5 ==0){
//         console.log("Buzz");
//     } else 
//          console.log(i);
// }

//Part 2 : Prime Time:

let prime = 0;
let num = 0;

while (num < 100){
    let j = num++;
    if(num % j ==0){
        prime++;
        break;
    }

    if(prime === 0){
        console.log(num);
    }
    num++;
}