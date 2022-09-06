// //  CONSTRUCTOR
//  function StudentInfo(firstName , lastName, DOB, Phone, Address, grade, result) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.DOB = DOB;
//     this.Phone = Phone
//     this.Address = Address
//     this.grade = grade;
//     this.result = result
// }

// //  PROTOTYPE FOR GRADE
// StudentInfo.prototype.subjectsAverage = function () {
//     this.grade = grade;
//     maths = Number(prompt('maths'))
//     english = Number(prompt('english'))
//     econs = Number(prompt('econs'))
//     this.grade = maths + english + econs
//    return this.grade = Math.round((maths + english + econs) / 3)

// } 


// //  PROTOTYPE FOR PROMOTION
// StudentInfo.prototype.promotion = function () {
//     this.result = result
//    return  this.grade <=59 ? this.result = 'failed' :this.result = 'Promoted'
// } 
    
    
// //  PROTOTYPE FOR RESULT AND GRADE
// StudentInfo.prototype.studentOutput = function () {
//     return ` ${this.result}  ${this.grade}`
// }


// //  OBJECT
// const steven = new StudentInfo('mike', 'steven','3/3/1993','234-432-765','323 mike avenue','' )

// console.log(steven.studentOutput());


// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////


// // constructor for grade

// // const subjects = function (grade,result) {
// //     this.grade = grade;
// //     maths = Number(prompt('maths'))
// //     english = Number(prompt('english'))
// //     econs = Number(prompt('econs'))
// //     this.grade = maths + english + econs
// //     this.grade = Math.round((maths + english + econs) / 3)
// //       this.result = result
// //     // if (this.grade <=59) {
// //     //     this.result = 'failed'
// //     // }else{
// //     //     this.result = 'Promoted'
// //     // }

// // }


// // const studentInfo = function (firstName , lastName, DOB, Phone, Address, grade, result) {
// //     subjects.call(this, grade, result)
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.DOB = DOB;
// //     this.Phone = Phone
// //     this.Address = Address
// // }

// // subjects.prototype.promotion = function () {
// //     // this.result = result
// //      this.grade <=59 ? this.result = 'failed' :this.result = 'Promoted'
    

// // } 
    

// // // const studentOutput = function () {
// // //     return ` ${studentInfo} ${promotion}`
// // // }

// // const steven = new subjects('mike', 'steven','3/3/1993','234-432-765','323 mike avenue','','' )

// // console.log(steven);


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // FUNCTION    
// // const getSum = new Function('a', 'b', 'return 3+ 4 ');
// // console.log(getSum());

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// // ARRAY
// // let x = new Array(3,4,5,6,7,)
// // console.log(x);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // OBJECT
// // let person = new Object({name: 'adewale'})
// // console.log(person);

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // REGULAR EXPRESSION
// // let output = /\w+/
// // let reg = new RegExp('\\w+')
// // console.log(output,reg);

// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // CONTRUCTOR
// // function person(firstName, lastName, DOB) {
// //     this.firstName = firstName;
// //     this.lastName = lastName
// //     this.birthday = new Date(DOB)
       
// // }

// // // PROTOTYPE
// // //  PROTOTYPE TO CALCULATE AGE
// // person.prototype.calAge = function(){
// //     const diff = Date.now() - this.birthday.getTime();
// //     const ageDate = new Date(diff);
// //     return Math.abs(ageDate.getUTCFullYear() - 1970)
// }
// //  PROTOTYPE TO GET FULL DEATAILS
// // person.prototype.getFullDetials = function() {
// //     return `First Name:${this.firstName} Last Name:${this.lastName} Age:${this.calAge()}`
// // }
// // //  PROTOTYPE TO CHANGE LAST NAME(IF MARRIED)
// // person.prototype.changeLastName = function (chngeLastNameIfMarried) {
// //     this.lastName = chngeLastNameIfMarried
// // }
// // let Jude = new person('Jude', 'Adebola', '8-29-1993')
// // let Sola = new person('Sola', 'Mathew', '4-5-1973')
// // let Solomon = new person('Solomon', 'Ugboma', '7-6-1991')
// // let Lekan = new person('Lekan', 'Samuel', '3-6-1966')

// // Sola.changeLastName('Ogunbanwo')

// // console.log(Lekan.getFullDetials());
// // console.log(Jude.calAge());


// /////////////////////////////////////////////////
// /////////////////////////////////////////////////

// //  INHERITE A CONSTRUCTOR
// // const customer = function (firstName , lastName, DOB, Phone, Address, Memebership) {
// //     person.call(this, firstName, lastName, DOB);
// //     this.Address = Address;
// //     this.Phone = Phone;
// //     this.Memebership = Memebership;
// // }


// // //  INHERITE A PROTOTYPE
// // customer.prototype = Object.create(person.prototype)
// //  const admin = new customer('Emaka', 'Makinwa', '12/3/2003','+2348354667','34 Palm Avenue VI','Silver') 

// // // console.log(admin);

// // // ///////////////////////////////////////////////////
// // // ///////////////////////////////////////////////////


// // // A CONSTRUCTION FOR A SCHOOL
// // // A CONSTRUCTION FOR A SCHOOL
// // function school(name, classes, teachers, headTeacher, students,studentInClass) {
// //     this.name = name;
// //     this.classes = classes;
// //     this.teachers = teachers;
// //     this.headTeacher = headTeacher;
// //     this.students  = students;
// //     this.studentInClass = studentInClass
// // }
// // // A PROTOTYPE FOR A SCHOOL THAT CAL CLASS WITH NUMBER OF STUDENTS
// // school.prototype.calClassPerStudent = function() {
// //       return this.studentInClass = `number of classes ${this.classes} number of student ${this.students} summation = ${Math.round(this.students /this.classes)})`
// // }
// //  const VicSch = new school('victoria School', '12', '16','3','210', '')
// //  const IjuGrammarSch = new school('Iju grammar School', '54', '33','7','1210', '')
// // console.log(VicSch.calClassPerStudent());

// // AN INHERIED CONTRUCTOR
// //  function schoolActivies(name, classes, teachers, headTeacher, students, grade) {
// //     school.call(this, name, classes, teachers, headTeacher, students,)
// //     this.grade = grade
// //     if (Math.round(this.students /this.classes) <= this.teachers ) {
// //         this.grade = 'Great job keep it up'
// //     } else {
// //         this.grade = `BAD GRADE need ${Math.round(this.students /this.classes)-this.teachers}  teachers is needed`
// //     }  
// // }
// //  const Sch1 = new schoolActivies('Mark School', '18', '36', '2', '880' )




// // console.log(Sch1);


// // ///////////////////////////////////////////////////
// // ///////////////////////////////////////////////////

// // let prices = [76, 62, 134, 98, 97, 75, 64, 93]; 

// // const tax = function(amount){
// //    let taxResult, x,y;
// //    x = 0.10
// //    y = 0.08
// //      taxResult = amount >= 1 && amount <= 90 ? amount * x :amount * y
// // return taxResult
// // }



// //    prices.forEach((x)=>{
// //         // tax(x)
// //          Tax(x)
// //     console.log( `price = ${x} + ${ Tax(x)} = ${x +  Tax(x) } `);
// // })

// // function discount( x ,y) {
// //     this.x = x;
// //     this.y = y;
// // }


// // discount.prototype.result1 = function (amount) {
// //     return  amount >= 1 && amount <= 90 ? amount * this.x :amount * this.y
// // }
// // const outPuts = new discount('0.8', '0.10')
// // console.log(outPuts.result1());
// ///////////////////////////////////////////////////
// ///////////////////////////////////////////////////




