// FUNCTION FUNCTION FUNCTION
// FUNCTION FUNCTION FUNCTION
// FUNCTION FUNCTION FUNCTION

// there are 3 types of function 

// (1) Declearation of function (e.g) 

// function sum(x, y, z) {
//     x = prompt('your date in here')
//     y = prompt('your date in here')
//     if(x !== y){
//         z = 'try again'
   
//     }else{

//             z = x * y
//     }
//     return z
// } 

//  CREATE AN APP THAT REQUEST FOR A USER-NAME IF INPUT
//  THE RIGHT USER-NAME IT LL TAKE YOU TO THE 
// NEXT LEVEL WHERE YOU WILL BE ASKED TO ADD YOUR P/W. IF THE P/W IS IN ANYWAY
//  WRONG YOU WILL BE BAN FROM THE ENTRY

let  peopleUserName = prompt('your user Name')
let peopleUserPassWord = prompt('your user pass-Word')
const names = function(userName){
    userName = 'adewale'
  
}
let infoNames = names()



const pass = function( passWord){
    passWord = 54321

}

let infoPass = pass()


const input = function(display){
    if (infoNames === peopleUserName && infoPass === peopleUserPassWord) {
        display = 'Access granted' 

    }else{
        display = 'Access denied'
    }
    return display
}
console.log(input());





// let dats = ['adeola', 'solede','kolade','alimate','bisola']; 
// let compare;
//         let machine = (userName, datas)=>{
//                 datas = 'solade';
//                 userName = prompt('your users name in here')
//             if (datas == userName) {
//                 compare = 'PassWord23454'
//             } else {
//                 compare = 'keep trying'
//             }
//             return compare
//         }
//             //    console.log(machine());

// let entry;

// const nextLevel = function finalOutPut(passWord,solution) {
      
//     passWord = prompt('your password in here pls!!!')
//     if (passWord == machine(solution )) {
//         entry = 'Access granted'
//     } else {
//         entry = 'Access Denied Ban for 4 weeks'
//     }
//     return entry
// }
// console.log(nextLevel()); 
// console.log(machine());


// function usersInfo() {
//     let userName = 'adewale';
//     let passWord = 123456789;
//     console.log(userName, passWord)
// }
//     usersInfo()

// function display() {
    
// }



// (2) function Expression (e.g) 

////////////////////////////////////////////////////////





// ///////////////////////////////////////////

// let info = function( factors,angle){
//         angle = Number(prompt('angle'))
//         factors = (angle/2)*3
//         return factors       
// }

// let results = info()


// const recycle = function(area,input){
//     input = Number(prompt('figures'))
//     area = (input /5) * results
//  if (results > area) {
//     return 'needs modify'
//  } else {
//     return `great!!! here is the output == ${Math.floor(area)}`
//  }
// }
// console.log(recycle());

///////////////////////////////////////////////////////////



// const calc =  function(raduis){
//     return 3 + raduis
    
// }

//   let areaOutput = calc()
//     areaOutput = prompt('your numbers')
//     console.log(areaOutput);
    

//   const volume = function(){
//         return areaOutput * 2
//   }
//     console.log(volume());


////////////////////////////////////////////////////////

// const arithmetic = function(passed, outputs) {
//     passed = 16
//         if (sum() == passed) {
//             outputs ='congratulations'
//         }else{
//             outputs ='oh no you failed'

//         }
        
//      return outputs
// } 

//    console.log(arithmetic());
   
////////////////////////////////////////////////////////

//    (3)  Arrow function 


// let maker = () =>{
//     return 33 - 9
// }

// let answer = combinations =>{
//  return   maker()/combinations
// }
// console.log(answer(2));

////////////////////////////////////////////////////////



// function to calculate Age, century,
// use the age func inside century


//  ATTEMPT ONE 


// function age(birthYear) {
//     let currentYear = 2022 - birthYear
//         return currentYear
// }

// function century() {  
//     let output = prompt('input your birth year')
    
//     if (output >= 1900 && output <= 1999) {
//       console.log( `19th century`)
//     }else if (output >= 2000 && output <= 2022){
//         console.log( `21st centuries`);
//     }else{
//         console.log(`other centuries`);
//     }
  
//     return  age(output)
// }
// console.log(century() + ' years old');



// ATTEMPT 2

// let showYear = prompt('input year here');
// function ages(birthyears) {
//     birthyears = showYear;
//     presentYear = 2022 - birthyears
//     return presentYear
// }

// function cents(outputs) {
//     if (ages() <= 100 && ages() >=60) {
//         out = 19 + 'th  century'
//     } else if(ages() <= 59 && ages() >=30){
//         outputs = 21 + 'th century'
//     }else if (ages() < 1) {
//         outputs = 'no output to display'        
//     }else{

//         outputs = 22 + 'th century'
//     }
        
//     return outputs
// }
// console.log(cents());







// 3   ATTEMPT

// let birthYearInput = prompt('Please enter your year of birth');
// function age(birthYear) {
//      birthYear = birthYearInput;
     
//     let currentYear = 2022 - birthYear;

//         return currentYear;
      
// }


// let century;
// function centuryF(){
//     if(age() <= 100 && age() >= 80){
//       century = 19 + 'th'
//     }else if(age() <= 79 && age() >= 50){
//         century = 20 + 'st'
//     }else if(age() <= 49 && age() >= 29){
//         century = 21 + 'st'
//     }else{
//         century = 22 + 'nd'
//     }
   
  
//     return  century;

// }

// console.log(`${centuryF()}  century`);








///////////////////////////////////////////

  // if (output >= 1900 && output <= 1999) {
    // //   console.log( `19th century`)
    // cent = `19th century`
    // }else if (output >= 2000 && output <= 2010){
    //     // console.log( `21st centuries`);
    //     cent = `20th century`
    // }else{
    //     // console.log(`other centuries`);
    //     cent = `other century`
    // }

    // let cent;
    // let cent = output >= 1900 && output <= 1999 ? `19th century` : `other centuries`
    
///////////////////////////////////////////


// function persons(names) {
//     return names + ' your age is 34'
// }


// function address() {
//     return persons('dele') + ' stays in lagos'
// }
// console.log(address());


// /////////////////////////////////////////////

// function loan(amount) {
//     return amount * 4
// }
// // console.log(loan(200));

// function people(school, house) {
//     let schoolpiece  = loan(school)
//     let housepiece  = loan(house)
//     let payback = `school load ${schoolpiece} pieces of school and payment of house ${housepiece}`
//     return payback
// }

// console.log( people(5, 4));

//////////////////////////////////////////////////////////


// QUESTION 3

// A function that accept one fruit but lots of it, you ll have to share each
// fruits into 4 pieces...
// then another function that accept diff fruits n den call the 1st
// function to process it for everyone to eat 

// should be one fruit * 4




// function fruits(orange ) {   
//     return orange  * 4
// }


// function anotherFruits(carrot, banana) {

//     let processOne =  fruits(carrot,) 
//     let processTwo =  fruits(banana) 

//     let processResult = `each person will get proceed carrot ${processOne} also a 
//     mixture of banana fruit ${processTwo}`
//     return processResult
// }
//    let  numbOranges = Number(prompt('numbers of orange in here'))
//     let numbMango = Number(prompt('numbers of mango in here'))


// console.log(anotherFruits(numbOranges, numbMango));


