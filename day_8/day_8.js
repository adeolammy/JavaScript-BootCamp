/////////////////////////////////////////////////
/////////////////////////////////////////////////

// FUNCTION    
// const getSum = new Function('a', 'b', 'return 3+ 4 ');
// console.log(getSum());

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ARRAY
// let x = new Array(3,4,5,6,7,)
// console.log(x);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// OBJECT
// let person = new Object({name: 'adewale'})
// console.log(person);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// REGULAR EXPRESSION
// let output = /\w+/
// let reg = new RegExp('\\w+')
// console.log(output,reg);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CONTRUCTOR
function person(firstName, lastName, DOB) {
    this.firstName = firstName;
    this.lastName = lastName
    this.birthday = new Date(DOB)
       
}

// PROTOTYPE

//  PROTOTYPE TO CALCULATE AGE
person.prototype.calAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

//  PROTOTYPE TO GET FULL DEATAILS
person.prototype.getFullDetials = function() {
    return `First Name:${this.firstName} Last Name:${this.lastName} Age:${this.calAge()}`
}

//  PROTOTYPE TO CHANGE LAST NAME(IF MARRIED)
person.prototype.changeLastName = function (chngeLastNameIfMarried) {
    this.lastName = chngeLastNameIfMarried
}

let Jude = new person('Jude', 'Adebola', '28-9-1993')
let Sola = new person('Sola', 'Mathew', '4-5-1973')
let Solomon = new person('Solomon', 'Ugboma','23-11-1991')
let Lekan = new person('Lekan', 'Samuel', '3-6-1966')

Sola.changeLastName('Ogunbanwo')

console.log(Sola.getFullDetials());


/////////////////////////////////////////////////
/////////////////////////////////////////////////

//  INHERITE A CONSTRUCTOR
const customer = function (firstName , lastName, DOB, Phone, Address, Memebership) {
    person.call(this, firstName, lastName, DOB);
    this.Address = Address;
    this.Phone = Phone;
    this.Memebership = Memebership
}


//  INHERITE A PROTOTYPE
customer.prototype = Object.create(person.prototype)
 const admin = new customer('Emaka', 'Makinwa', '12/3/2003','+2348354667','34 Palm Avenue VI','Silver') 

console.log(admin);
/////////////////////////////////////////////////
/////////////////////////////////////////////////


/////////////////////////////////////////////////
/////////////////////////////////////////////////
