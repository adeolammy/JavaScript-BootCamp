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
//     return m
// }
//////////////////////////////////////////

// const  mainTips =  function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }
// //  console.log(mainTips());
//  let tipOutput = mainTips()
 





 // An invites 
// 1  create and array function that check for names 
// 2 each individual is to contribute x amnt according your ur lenght of names where 1 letter = 10
// 3 if amt generated < 500 ,add 3 new member hence remove d last 2 member with the lowest letters 


let members = ['solomom', 'david', 'john', 'steven'];

const checkName = function(names){
         
        for (let x = 0; x < members.length; x++) {
              names = members[x];
              let result = prompt('Enter Name');
              if(names.includes(result)){
                console.log('you are welcome')
                break;
              }else{
                console.log('try again');
              }
            //  if (names.indexOf()) {
            //     return 'One of our member'

            // } else if(!names.indexOf()) {
            //     return 'Not one of us'
            // }
        }

   
}

console.log(checkName());