// // CONSTRUTOR FOR A SCHOOL
// //  function shoool(name, classes, teachers, headteacher, student, stundenInClass) {
// //     this.name = name;
// //     this.classes = classes;
// //     this.teachers = teachers;
// //     this.headteacher = headteacher;
// //     this.student = student;
// //     // this.stundenInClass = stundenInClass
// //  }


// // // CLASS REF OR OBJ REF
// //  const  schl1 = new shoool( 'Vic school','34','12', '2','210')
// // //  console.log(schl1);

// // //  PROTOTYPE FOR NO STUDENT IN A CLASS
// // shoool.prototype.calClassPerStudent = function(){
// //     return this.stundenInClass = `number of class ${this.classes} number of student ${this.student} summation = ${Math.round(this.student / this.classes)}`
// // }
// // //  console.log(schl1.calClassPerStudent());

// // // INHERITED CONSTRUTOR

// // function schoolActivities(name, classes, teachers, headteacher, student, grade) {
// //     shoool.call(this, name, classes, teachers, headteacher, student,)
// //     this.grade = grade
// //     if (Math.round(this.student / this.classes) <= this.teachers) {
// //         this.grade = 'Great job'
// //     } else {
// //         this.grade = `POOR GRADE need ${Math.round(this.student / this.classes) - this.teachers} teachers.`
// //     }
// // }

// // const sch2 = new schoolActivities( 'Vic school','34','2', '2','210', '')
// // // console.log(sch2);


// // // CONSTRUCTOR
// // function person(head, hand, leg, eyes, nose) {
// //     this.head = head;
// //     this.hand = hand;
// //     this.leg = leg;
// //     this. eyes = eyes;
// //     this. nose = nose
// // }

// // // REF OBJECT
// // const personOutput = new person('1','2','2','2','2')
// // // console.log(personOutput);

// // // PROTOTYPE 

// // person.prototype.anotherPerson = function(shows){
// //     shows = prompt('your input goes here')  
// //     if (personOutput.hasOwnProperty(shows)) {
// //         return 'attributes of a person'
// //     }else{
// //         return 'Not an attribute'
// //     }
// // }
// // // console.log(personOutput.anotherPerson());


// // function OtherAttOFAPerson(head, hand, leg, eyes, nose, mouth, ear, neck,shoulder) {
// //     person.call(this, head, hand, leg, eyes, nose)
// //     this.mouth = mouth;
// //     this.ear = ear;
// //     this.neck = neck;
// //     this.shoulder = shoulder;
// // }


// //  OtherAttOFAPerson.prototype = Object.create(person.prototype)

// //  const otherPartsOfAPerson = new OtherAttOFAPerson('1', '2', '2','2','1','1','2','1','2');
// //  console.log(otherPartsOfAPerson);




// // function Person(name, age, status) {
// //     this.name = name;
// //     this.age = age;
// //     this.status = status
// // }


// // const personA = new Person('Ade', '34', 'married')
// // const personB = new Person('sola', '54', 'Widow')
// // const personC = new Person('Jannet', '64', 'Widow')
// // const personD = new Person('Mark', '29', 'Single')
// // const personE = new Person('Alade', '44', 'married')

// // // console.log(personA);


// // let arr = []

// // arr.push(personA, personB, personC, personD, personE)
// // // console.log(arr);


// // function checkList() {
// //     for (let i = 0; i < arr.length; i++) {
// //         const element = arr[i];
// //         //  console.log(arr[i]);
// //         //  console.log(element);
// //     }
// //     return element
// // }
// // console.log(checkList());


// class Person{
//     constructor(name, address,  gender, age) {
//         this.name = name
//         this.address = address
//         this.gender = gender
//         this.birthday = new Date(age)
//     }

//     getAge(){
//             const AgeDiff = Date.now() -this.birthday.getTime();
//             const ageDate = new Date(AgeDiff)
//             return Math.abs(ageDate.getUTCFullYear()- 1970)
//     }

//     married(changeLastName){
//         this.name = changeLastName
       
//     }
//     static chcklist(x,y){
//         return (x + y)**x
//     }
// }


// class family extends Person{
//     constructor(name, address, age, gender, ocupation,status){
//         super(name,address,gender,age)
//         this.ocupation = ocupation
//         this.status = status
//     }
// }

// // const village = new family('ojo','54 park View','24','female','teaching','single')
// // const david = new Person('david', '34 Palm Avenue', 'male', '6/8/87')

// // console.log(village);
// // david.married('Ademide')
// // console.log(david);
// // console.log(david.getAge());
// // console.log(Person.chcklist(4,5));

// class villages {
//     constructor(head, chief, people){
//         this.head = head;
//         this.chief = chief;
//         this.people = people
//     }
//     houses(){
//         let age = Number(prompt('your age'))
//         if (age > 18) {
//             return 'deserse an apartment'
//         } else {
//             return 'too young to have one'
//         }
//     }
//     static calHouse(x,y){
//         return x+y
//     }
// }

// class town extends villages{
//     constructor(head, chief, people, leader){
//         super(head,chief,people)
//         this.leader = leader
//     }
// }
// const villagePeople = new villages('king','Bales', 'citizens')
// console.log(villagePeople.houses());
// console.log(villages.calHouse(4,5));




class Person{
    constructor(name, address, gender, age){
        this.name = name;
        this.address = address;
        this.gender = gender;
        this.birthday = new Date(age)
    }
   calAge(){
        let ageDiff = Date.now() - this.birthday.getTime();
        let ageDate = new Date(ageDiff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    } 
    static calY(a, b){
        return a + b
    }
}


class Village extends Person{
    constructor(name, address,gender, age, occupation){
        super(name, address,gender,age)
        this.occupation = occupation
    }

}

const people = new Village('Odolowu','Ogun state', 'others','7/1960','Farmer')
console.log(people);








// const personA = new Person('steve','34 Palm Avenue','male','6/7/97')

// console.log(Person.calY(4,5));
// console.log(personA.calAge());