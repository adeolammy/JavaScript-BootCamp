
// let boy = '12';

// console.log(boy);
// let ty = typeof (boy);

// const now = 2022;
// const ageJohn = now - 1996;
// const ageEsther = now - 1990;


// const average = (ageEsther + ageJohn) / 2;
// console.log(average);

// console.log(` Esther's age is :${ageEsther}, John's age is :${ageJohn}, And their average age is :${average}`)
// console.log(ageJohn, ageEsther);

// console.log(ageJohn * 2, ageEsther / 10, 2 ** 3);

// console.log(` This
// a string
// section
// hope you
// see it?`);
// console.log('String is \n\
// multi new \n\
// line');




// console.log(typeof Number('234'));

// // type coercion  type coercion type coercion  type coercion  type coercion  type coercion
// console.log('23' > '20');
// console.log('3' + '3');
// console.log(3 + 3);
// console.log('3' * '3');
// console.log('3' * 'friends');
// console.log(3 * 'friends');
// console.log(3 * 3);

// let increase = 4
// increase++
// console.log(increase++);

// console.log('3' / '3');
// console.log(3 / 3);
// console.log('3' - '3');
// console.log(3 - 3);
// console.log('</br>');
// console.log('</br>');
// console.log('</br>');


// let n = '1' + 1; //11
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));




// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jones'))
// console.log(Boolean(''))
// console.log(Boolean({}))
// console.log(Boolean([]))

// let AgeToDrive = 18;
// let yourAge = 18; 
// let feedBack = AgeToDrive - yourAge;

// if ( AgeToDrive < yourAge) {

//      console.log(`you should have gotten you license in the last ${feedBack} year`);
// } else if (AgeToDrive == yourAge) {
//     console.log('right time to get you license. enjoy your self');
// }else{
    
//     console.log(`you shall be issued your license in the next ${feedBack} years time`);
    
// }


// Assignment
// create an app that tells a century one falls into and their age.


// FIRST TRY 

// let age = 1995;  // INPUT YOUR AGE HERE
// let EighteenCentury = 1800;
// let NineteenCentury = 1900;
// let twentyFirstCentury = 2022;
// let output;
// let presentAge = age - output ; 

// if (age < EighteenCentury ) {
//     output +=  age - EighteenCentury
//     console.log(`born in the 18th Centuries and you are ${output} years of age`);
// }else if(age <= NineteenCentury){ 
//         output +=  age - NineteenCentury 
//         console.log(`born in the 19th Centuries and you are ${output} years of age`);   
// }else{
//     output +=  age - twentyFirstCentury
//         console.log(`born in the 20th Centuries and you are ${output} years of age`);

// }


// WORKING CENTURY AND AGE CALCULATOR APPLICATION
// WORKING CENTURY AND AGE CALCULATOR APPLICATION

// let birthYear = '' //input your birth year in here
// let century = 99
// let tenthCentury = 1000 + century
// let eleventhCentury = 1100 + century
// let twelvethCentury = 1200 + century
// let thirteenthCentury = 1300 + century
// let fourteenthCentury = 1400 + century
// let fivetenthCentury = 1500 + century
// let sixteenthCentury = 1600 + century
// let seventeenthCentury = 1700 + century
// let eighteenthCentury = 1800 + century
// let nineteenthCentury = 1900 + century
// let twentythCentury = 2000 + 10
// let twentyFirstCentury = 2010 + century
// let now = 2022
// let presentAge =  now -  birthYear 


// if (birthYear <= tenthCentury) {
//     console.log(`born in the 10th century your present age would be:= ${presentAge} years of age`);

// } else if (birthYear <= eleventhCentury) {
//     console.log(`born in the 11th century your present age would be:= ${presentAge} years of age`);

// } else if (birthYear <= twelvethCentury) {
//     console.log(`born in the 12th century your present age would be:= ${presentAge} years of age`);

// } else if (birthYear <= thirteenthCentury) {
//     console.log(`born in the 13th century your present age would be:= ${presentAge} years of age`);

// } else if (birthYear <= fourteenthCentury) {
//     console.log(`born in the 14th century your present age would be:= ${presentAge} years of age`);

// } else if (birthYear <= fivetenthCentury) {
//     console.log(`born in the 15th century your present age would be:= ${presentAge} years of age`);

// } else if (birthYear <= sixteenthCentury) {
//     console.log(`born in the 16th century your present age would be:= ${presentAge} years of age`);
    
// }else if (birthYear <= seventeenthCentury) {  
//    console.log(`born in the 17th century your present age would be:= ${presentAge} years of age`);
      
// }else if (birthYear <= eighteenthCentury) {
//     console.log(`born in the 18th century your present age would be:= ${presentAge} years of age`);
    
// }else if (birthYear <= nineteenthCentury) {  
//   console.log(`born in the 19th century your present age would be:= ${presentAge} years of age`);
    
// }else if (birthYear <= twentythCentury) {
//    console.log(`born in the 20th century your present age would be:= ${presentAge} years of age`);

// }else{
//     console.log(`born in the 21th century your present age would be:= ${presentAge} years of age`);

// }



// MORE PRACTICE AND NEW APPROACH TO IT


// let birthYear = prompt('input your birth year in here');
// let century;
// let presentYear = 2022

// if (birthYear >= 1900 && birthYear <= 1999 ) {
//      century = `you re born the 19th century, you are ${presentYear - birthYear} years old`

// } else if (birthYear >= 2000 && birthYear <= 2009 ) {
//      century = `you re born the 20th century, you are ${presentYear - birthYear} years old`
     
// }else if (birthYear >= 2010 && birthYear <= 2022) {
//     century = `you re born the 21th century, you are ${presentYear - birthYear} years old`
// }else{
//     if ( birthYear > presentYear ) {
        
//     century = `you ll be born the 21th century, but above the present age yet to be born your age would be:== ${presentYear - birthYear } `
//     }
// }

// console.log(century);



// ANOTHER APPROACH   ANOTHER APPROACH   ANOTHER APPROACH
// ANOTHER APPROACH   ANOTHER APPROACH   ANOTHER APPROACH

// let year = prompt('your birth year goes here');
// let century ;
// let currentYear = 2022;

// if (year >= 1900 && year <= 1999) {
//     century =`born in the 19th century you are ${currentYear - year} years old`
// } else if (year >= 2000 && year <= 2010) {
//         century =`born in the 20th century you are ${currentYear - year} years old`

// } else if(year >= 2011 && year <= currentYear){
//         century =`born in the 21th century you are ${currentYear - year} years old`

// }else{
//         century =`you ll be born in the next ${currentYear - year} years to come still in the 21th century `

// }
// console.log(century);


// discount 0n school fees and schoolarship
// == if your average grade in Math, Eng , Physics is above 90% ( full scholarship) 
// == if your average grade in Math, Eng , Physics is above 60% (half scholarship) 
// == if your average grade in Math, Eng , Physics is above 5% ( discount on fees) 
// == if your average grade in Math, Eng , Physics is above 5% ( discount on fees) 

// hint 
let maths = Number(prompt('Maths Score'));
let English = Number(prompt('English Score'));
let Physics = Number(prompt('Physics Score'));
 let average = (maths + English + Physics) / 3;
 let result;


if (average >= 80) {
    result = `full schoolarship.${Math.round(average)}`
    alert(`0 school fees to be paid this term`)

} else if (average <= 79 && average >= 60) {
    result = `half schoolarship. your percentage scores is ${Math.round(average)}%`

} else if (average >= 50 && average <= 59) {
    result = `5% discount on school fees. your percentage scores is ${Math.round(average)}%`
    let schoolFees = Number(prompt('Input your school fess'))
    let output =   schoolFees - (schoolFees * 0.05)
    alert(`your fees for the term is ${output}`)
    
}else{    
    result = `you are not entitle to any schoolarship. your percentage scores is ${Math.round(average)}%`   
    alert(`👀💔👀💔 Olodo, go pay your FULL school fees for the term.your percentage scores is ${Math.round(average)}`)
}

console.log(result);


















// let birthYear = Number(prompt('Enter your year of birth'));

// let century;
// let age;
// let currentYear = 2022;

// if (birthYear <= 2000 && birthYear >= 1990) {
//     century = 19;
//     age = currentYear - birthYear;
// } else if (birthYear <= 2010 && birthYear >= 2001) {
//     century = 20;
//     age = currentYear - birthYear;
// } else {
//     century = 21;
//     age = currentYear - birthYear;
//     if (age < 1) { 
//         age = '#######';
//     }
// }

// console.log(`your are ${age} years old, and you where born in the ${century}`);


// QUESTION  1   QUESTION  1   QUESTION  1  QUESTION  1  QUESTION  1  QUESTION  1 


// create a var for jude and james. Trying to compare their BMI using a formular 
// BMI = Mass / Height **2 or BMI = Mass / (Height * Height)
// Mass = kg and Height = mts


// let judeMass = 1.3;
// let judeHeight = 193;
// let judeBmi = judeMass / judeHeight **2
// console.log(judeBmi + 'kg');


// let jamesMass = 1.7;
// let jamesHeight = 93;
// let jamesBmi = jamesMass / jamesHeight **2
// console.log(jamesBmi + 'kg');
// const diffBmi = jamesBmi - judeBmi

// if (jamesBmi > judeBmi){ 
//     console.log(` james's BMI is greater by ${diffBmi}`);
// } else {
//     console.log(`James's BMI is lower by ${diffBmi}`);
    
// }





// let a, b, c, d = '';
// a = 'Mark', b = 'Frank', c = 'Steve', d = 'Leonald'


// let aMass = 12.93;
// let aHeight = 266;
// let aBmi = aMass / aHeight **2
// console.log(aBmi);

// let bMass = 2.3;
// let bHeight = 103;
// let bBmi = bMass / bHeight **2
// console.log(bBmi);

// let cMass = 2.91;
// let cHeight = 66;
// let cBmi =cMass / cHeight **2
// console.log(cBmi);


// let  dMass = 3.7;
// let  dHeight = 193;
// let  dBmi =  dMass /  dHeight **2
// console.log(dBmi);

// // if (aBmi > bBmi && cBmi && dBmi) {
// if (aBmi > bBmi || cBmi || dBmi) {
//     console.log('A has the highest BMI, with the total BMI of ' + aBmi);

// } else if (bBmi > aBmi || cBmi || dBmi) {
// // } else if (bBmi > aBmi && cBmi && dBmi) {
//     console.log('B has the highest BMI, with the total BMI of' + bBmi);

// } else if (cBmi > aBmi || bBmi || dBmi) {
// // } else if (cBmi > aBmi && bBmi && dBmi) {
//     console.log('C has the highest BMI, with the total BMI of' + cBmi); 
// }else{
//     console.log('D has the highest BMI, with the total BMI of' + dBmi);
// }





// let a, b, c, d = '';
// a = 'Mark', b = 'Frank', c = 'Steve', d = 'Leonald'


// let adeMass = 12.93;
// let adeHeight = 266;
// let adeBmi = adeMass / adeHeight **2
// // console.log(adeBmi);

// let bolaMass = 2.3;
// let bolaHeight = 103;
// let bolaBmi = bolaMass / bolaHeight **2
// // console.log(bolaBmi);

// let coleMass = 2.91;
// let coleHeight = 66;
// let coleBmi =coleMass / (coleHeight *  coleHeight)
// // console.log(coleBmi);


// let  dareMass = 3.7;
// let  dareHeight = 193;
// let  dareBmi =  dareMass /  dareHeight **2
// // console.log(dareBmi);

// // if (aBmi > bBmi  cBmi && dBmi) {
// if (adeBmi > bolaBmi , adeBmi > coleBmi && dareBmi) {
//     console.log('A has the highest BMI, with the total BMI of ' + adeBmi);

// } else if (bBmi > aBmi || cBmi || dBmi) {
// // } else if (bBmi > aBmi && cBmi && dBmi) {
//     console.log('B has the highest BMI, with the total BMI of' + bBmi);

// } else if (cBmi > aBmi || bBmi || dBmi) {
// // } else if (cBmi > aBmi && bBmi && dBmi) {
//     console.log('C has the highest BMI, with the total BMI of' + cBmi); 
// }else{
//     console.log('D has the highest BMI, with the total BMI of');
// }


