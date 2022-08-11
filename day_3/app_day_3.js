// FUNCTION FUNCTION FUNCTION
// FUNCTION FUNCTION FUNCTION
// FUNCTION FUNCTION FUNCTION


// usual tip is 15% on 50 -- 300
// above 300 is 20%

// 1 calculate the value dep on bill value
// create var call tip
// test for 275, 40, 430

// hint== value X is between 50 and 300, if its 
// >= 50 && <= 300

// let bill = 275
// let tip = 15/100 * bill 
// let totalValue =  bill +  tip

// console.log(`the bill is ${bill} + the ${tip} tip which accruded to ${totalValue}`);




// let bill = Number(prompt('enter your bill here'));

// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip.toFixed()}, and the total value is ${bill + tip}`);










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
let birthYearInput = prompt('Please enter your year of birth');
function age(birthYear) {
     birthYear = birthYearInput;
     
    let currentYear = 2022 - birthYear;

        return currentYear;
      
}
// age()
let century;
function centuryF(){
    if(age() <= 100 && age() >= 80){
      century = 19 + 'th'
    }else if(age() <= 79 && age() >= 50){
        century = 20 + 'st'
    }else if(age() <= 49 && age() >= 29){
        century = 21 + 'st'
    }else{
        century = 22 + 'nd'
    }
   
  
    return  century;

}

console.log(`${centuryF()}  century`);








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