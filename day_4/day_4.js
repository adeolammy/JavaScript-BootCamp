// let years = [2012, 2003, 1994, 1983];

// const cal =function(birthyear){
//     return 2022 - birthyear
// }


// const ages = cal(years[0])
// const age1 = cal(years[1])
// const age2 = cal(years[years.length -1])
// console.log(ages, age1, age2);


// const agess = [cal(years[0]), cal(years[1]), cal(years[2])];
// console.log(agess);

// let years  = [1999, 2020, 3040]
// const cal = function(birthyear){
//     return 2022 - birthyear 
// }
// console.log(cal(years[2]), cal(years[1]), cal(years[0]));

// ////////////////////////////////////////////////////


// let years = [2012, 2003, 1994, 1983];

// const cal =function(birthyear){
//     return 2022 - birthyear
// }
//  cal(years)
//         console.log(years.includes(2003),years.indexOf(2003))


            // if (years.includes(2012)){
            //     console.log(` this is true ${years.indexOf(2012),years} `);
            // }else{
            //     console.log('not included');
            // }


////////////////////////////////////////////////////////
// An invites 
// 1  create and array function that check for names 
// 2 each individual is to contribute x amnt according your ur lenght of names where 1 letter = 10
// 3 if amt generated < 500 ,add 3 new member hence remove d last 2 member with the lowest letters 

// let members = ['kolade', 'sola', 'johnson', 'tolani', 'ademide', 'titilola','ife']
//  members.forEach(element => {
//      if (element.includes('') ) {
//         return  'our member'
//     } else {
//         return 'Not part of us'
//     }
//  });
//  console.log(element);


// console.log(members.includes('sola'));

// const checkName = function(){

//     for (let x = 0; x < members.length; x++) {
//     let y = members[x];
//     // return members[x].indexOf('') ? 'our member' : 'Not part of us'

//     if (y.includes('')) {
//         return  'our member'
//     } else {
//         return 'Not part of us'
    
//     }
//   }  
// }
// console.log(checkName('sola'));



// let nameLength = members

///////////////////////////////////////////////////


//if ===TIPS 15% of any bills 50 and 300 else == 20%
// (1)
// let tip = 15/100 * bill 
// let tip = 20/100 * bill 

// const calTip = function(bill, tip ){
    
//         if(bill >= 50 && bill <= 300){ 
//              tip =  bill * 0.15
//         }else  { 
//              tip = bill * 0.2
//         }
//         return tip
// }
// console.log(calTip(100));

// let bills = [125, 555, 44];
// let tip = [0.15, 0.2 ];

// let  tips = [bills[0] *tip[0], bills[1] *tip[1], bills[2] *tip[1]];

// let total = [bills[0]+ tips[0], bills[1]+ tips[1], bills[2]+ tips[2]]
// console.log(total);

//////////////////////////////////////////
// const calTip = function(bill){
//    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2
// }
// console.log(calTip(100));

// let bills = [125, 555, 44];
// let tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]
// // console.log(tips);

// const total = [bills[0]+tips[0], bills[1]+tips[1],  bills[2] + tips[2]]
// console.log(total, tips, bills);


// // how much do he give in a month if he goes to the 3 in month
// let monthlyTips = function(){
//     return 
// }
//////////////////////////////////////////

// const  mainTips =  function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// //  console.log(mainTips());
//  let tipOutput = mainTips()
 






 // An invites 
// 1  create and array function that check for names 
// 2 each individual is to contribute x amnt according the lenght of name. where 1 letter = 10
// 3 if amt generated < 500 ,add 3 new member otherwise remove d last 2 member with the lowest letters 


let members = ['solomon', 'david', 'Johnson', 'steven','Ololademi','joshua','Maria'];
let 
// Question 1  Question 1  Question 1  Question 1
const checkName = ()=>{
  let yourName = prompt('your name goes here');
  return members.includes(yourName) ? 'Our member' : 'Not a member'
}
// console.log(checkName());


// Question 2  Question 2  Question 2  Question 2

// TESTED PART

members.forEach( (x)=> {
  let nameResult = x.length * 10
  // let nameResult = x.length[0] + x.length[1] + x.length[2] + x.length[3] + x.length[4] 
  // let val =  Number(nameResult[0]) + Number(nameResult[1]) + Number(nameResult[2]) + Number(nameResult[3]) + Number(nameResult[4])
  console.log(`${x} contributes:- ${nameResult} `);
  // console.log(`${val}`);

})

// create 2 arrray 1 for name ,2 for contribution will be empty
// if name exist call 
// have another  func fr contribution it run name/member exits.


  // members.forEach((val)=>{
  //   val
  // let sum;
  // sum = val.length * 10
  //   if (sum <=  50) {
  //     members.push('Akopororo', 'olori Adekanbi', 'Ogunbamiwode')
  //   }else{
  //     // members.splice(-1, 2)
  //     members.filters((i)=>{
  //       return sum[i].length <= 5
  //     })
  //   }
  // console.log(`= ${members}`);

  // })


// const nameLengthPart = ()=>{
//   members.forEach( (x)=> {
//   let nameLength = x.length * 10 
//   return `${x} contributes:- ${nameLength + x}`;

// })
// }
// console.log(nameLengthPart());
// let result = nameLengthPart()
// nameLengthPart().forEach((val)=>{
//   let sum;
//   sum += val
//   console.log(`= ${sum}`);

//   })


// Question 3  // Question 3  // Question 3  // Question 3






















// const checkName = function(names){
         
//         for (let x = 0; x < members.length; x++) {
//               names = members[x];
//               let result = prompt('Enter Name');
//               if(names.includes(result)){
//                 console.log('you are welcome')
//                 break;
//               }else{
//                 console.log('try again');
//               }
            //  if (names.indexOf()) {
            //     return 'One of our member'

            // } else if(!names.indexOf()) {
            //     return 'Not one of us'
            // }
        // }

   
// }

// console.log(checkName());


// let products = [76, 62, 34, 97, 97, 75, 64, 93]
//   const inputs = function (tax){
//     let total = 0;
//     for (let x = 0; x < products.length; x++) {
//         total = products[x] + products[x]+  tax;
              
//     }
//     return total
//   }
//   console.log(inputs(0.2));

// create an app if buy an item btw 1 - 90, tax will ? 0.45:035




let prices = [76, 62, 134, 98, 97, 75, 64, 93]; 

const tax = function(amount){
   let taxResult, x,y;
   x = 0.10
   y = 0.08
     taxResult = amount >= 1 && amount <= 90 ? amount * x :amount * y
return taxResult
}


   prices.forEach((x)=>{
        tax(x)
    console.log( `price = ${x} + ${tax(x)} = ${x + tax(x) } `);
})



// TAX FUNCTION CALCULATION
// function taxCal() {
//  let result = prices >= 40 && prices <= 90 ? 0.45 : 0.35
//  console.log(result);
// }
// taxCal();
// let tax = taxCal()
// console.log(tax)
// CALCULATE DISCOUNT ON PRODUCTS > 400 ? 0.2 : 0.3

// PRODUCTS CALCULATION

// function myProducts() {
//   let result;
//    prices.forEach((x)=> {
//     result = x + tax
//     console.log(`${x} + ${tax} = ${result}`);
    
//   })
//     return result;
// }
// console.log(myProducts());




//  let result;
//    prices.forEach((x)=> {
//     result = x + tax
//     console.log(result);;
//   })
