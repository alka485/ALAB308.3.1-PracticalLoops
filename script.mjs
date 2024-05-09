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

// let prime = 0;
// let num = 0;

// while (num < 100){
//     let j = num++;
//     if(num % j ==0){
//         prime++;
//         break;
//     }

//     if(prime === 0){
//         console.log(num);
//     }
//     num++;
// }

//Part 3 : Feeling Loopy

let data = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
//console.log(data.length);

   let cell1 = " ";
   let cell2 = " ";
   let cell3 = " ";
   let cell4 = " ";

for(let i = 0 ; i < data.length ; i++) {
   const char = data[i];
   //console.log(char);
   //check for comma
   if(char === ','){
    //Move to next cell
    if(cell1 === " "){
        //cell1 is empty store data in cell1
        cell1 = cell2;
        cell2 = "";
    }else if (cell2 === " "){
        cell2 = cell3;
        cell3 = " ";
    }else if (cell3 === " "){
        cell3 = cell4;
        cell3 = " ";
    }

    }

    //check for new Line
    else if (char === "/n") {
        console.log(cell1,cell2,cell3,cell4);
        //Reset cell data 
        cell1 = " ";
        cell2 = " ";
        cell3 = " ";
        cell4 = " ";
    }

    // console.log(data);
   }

   console.log(data);

  
   
    

