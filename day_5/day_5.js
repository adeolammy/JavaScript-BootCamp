// EXERCISE


// 1 create an array bills containing all 10 test bill value
// 2 create empty array for tips and totals
// 3 use the caltip function we wrote b4 to calculate tips n total value(bill + tip)
// for every bill value in the bills array. use a for loop for the 10 calculation
// test data == 22,295,176,440,37, 105, 10, 1100, 86, 52
// 4.

let bills = [22,295,176,440,37, 105, 10, 1100, 86, 52]
let tips = [];
let totals = [];


 const calTip = function(bill){
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2
}
// console.log(calTip());

        let x = 0;

    while (x < bills.length) {
        x++
        let tipOnBill = calTip(bills[x]);
        tips.push(tipOnBill)
        totals.push(tipOnBill + bills[x])
        // console.log(tips , totals);

    }
    // QUESTION 4.1 4.2 & 4.3    // 
        function calAverage(arr) {
            let sum = 0
            let average;
            for (let i = 0; i < bills.length; i++) {
               sum += bills[i];
              average = sum / bills.length;
              arr = average
            
            }
            return arr 
        }
        // console.log(calAverage(totals))


///////////////////////////////////////////////////
// OR this approach



  function calAver(arrg) {
    let sum = 0;
    // let average = arrg.length
    for (let i = 0; i < arrg.length; i++) {
        sum += arrg[i];
        // return sum / average
        return sum / arrg.length
    }
  }
//   console.log(calAver(totals));

//////////////////////////////////////////////////

const func = (input)=>{
    let x = typeof(input)
    return x
}
console.log(func(56.456));

let arrs = [1,2,3,4,5,5,6,3,4,7,6,8,9,0]
     let output = function(){
        return arrs.construtor === Array
     }
    //  console.log(output());
//      REMOVING DUPLICATES FROM AN ARRAY  REMOVING DUPLICATES FROM AN ARRAY
//      REMOVING DUPLICATES FROM AN ARRAY  REMOVING DUPLICATES FROM AN ARRAY

            // METHOD 1  / METHOD 1  / METHOD 1  / METHOD 1  / METHOD 1
            // METHOD 1  / METHOD 1  / METHOD 1  / METHOD 1  / METHOD 1
// let newarr = [];
// for (const indiv of arrs) {
//     if (!newarr.includes(indiv)) {
//         newarr.push(indiv)
        
//     }
//     console.log(newarr);
// }


        // METHOD 2  // METHOD 2  // METHOD 2 // METHOD 2 // METHOD 2
        // METHOD 2  // METHOD 2  // METHOD 2 // METHOD 2 // METHOD 2

    let anotherArray = [];

    arrs.forEach( val => {
        if (!anotherArray.includes(val)) {
            anotherArray.push(val)
        }
        // console.log(anotherArray);
    });    

    // METHOD 3   // METHOD 3 // METHOD 3 // METHOD 3
    // METHOD 3   // METHOD 3 // METHOD 3 // METHOD 3

    for (let i = 0; i < arrs.length; i++) {
        const element = arrs[i];
        if (!anotherArray.includes(element)) {
            anotherArray.push(element)
        }
        // console.log(anotherArray);
    }


// / METHOD 4   METHOD 4   METHOD 4   METHOD 4   METHOD 4   METHOD 4
// / METHOD 4   METHOD 4   METHOD 4   METHOD 4   METHOD 4   METHOD 4

let outPart = [... new Set(arrs) ]
// console.log(outPart);










 













//  const calTip = function(bill){
//    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2
// }
// console.log(calTip(100));

// let bills = [125, 555, 44];
// let tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]
// // console.log(tips);

// const total = [bills[0]+tips[0], bills[1]+tips[1],  bills[2] + tips[2]]
// console.log(total, tips, bills);
//  }



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
    // console.log( `price = ${x} + ${tax(x)} = ${x + tax(x) } `);
})










// const visaObj = {
//     firstName: 'adewale',
//     lastName: 'Omoefe',
//     birthYear: 1955,
//     career: ['Tailor','Solider','Developer','farmer'],
//     Worker: true,
//     calAge: function () {
//         this.age = 2022 - this.birthYear;
//         return  this.age;
//     },
//     getSummary: function () {
//         return `my name is ${visaObj.firstName} and i am 
//         ${this.calAge()} and i ${visaObj.Worker ? 'am':'not a'}  ${visaObj.career[1]}
//         `
//     }
// }
// console.log(visaObj.calAge());
//  console.log(visaObj.getSummary());

// let places = ['ojota','oshodi','ikeja','mushin','maroko','ajegunle']

// let longPlaces = [];

// for (let i = 0; i < places.length; i++) {
//     let ele = places[i];
   
//      if (ele.length >= 5) {
//         longPlaces.push(ele)
//      }
// }
// console.log(longPlaces);





// const personsInfo = {
//     name: 'adeolu',
//     Surname: 'Ogidi olu',
//     occupation: ['barber','singer','writer','entertainer'],
//     address: '233 palm Avenue new deira Abule Oke',
//     marital: 'single',
//     qualification: 'Mba',
//     year: prompt('input your year of birth'),
//     calcAge:  function () {
//         personsInfo.DOB = 2022 - personsInfo.year
//         return personsInfo.DOB
//     },
//     chckInfo: function () {
//         let passedpersonsInfo = prompt('your name in here')
//        return this.output = personsInfo.name == passedpersonsInfo && this.calcAge() >32
//        ? 'right info':this.occupation.push(this.output)
//     }

// }
// console.log(personsInfo.chckInfo());











// calculate how long it takes to obtain an certian degree
// 6hr is required to study in a day for a student to pass. how may hour 
// would be required to obtain a Bsc
// const education = {
//         phd: 3,
//         master: 2,
//         pgd: 1,
//         bsc: 4,
//         Olevel: 6,
//         Primary: 6,
//         Nursery: 2,
//         preSchool: 2

// }