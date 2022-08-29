// const cont = document.getElementById('ul_cont')
// cont.style.color = 'red'

// let list = document.querySelectorAll('#ul_cont')
// // let list_2 = document.querySelectorAll('li:nth-child(even)')
// list.style.color = 'blue'


// cont.forEach( newCont => {
//     newCont.textContent = 'hello'
// });

// document.getElementsByTagName('html').style.backgroundColor = 'black'

// body.style.margin = '0'
// body.style.backgroundColor = 'black'


const compos = document.getElementById('ul_cont')

compos.style.backgroundColor = 'grey'
compos.style.color = 'white'
compos.style.fontSize = '1.3rem'
compos.style.listStyle = 'none'
compos.style.textTransform = 'uppercase'
compos.style.display = 'flex'
compos.style.gap = '2rem'
compos.style.width = '97%'
compos.style.height = '10vh'
compos.style.margin = '0 '


let li_list = document.getElementsByTagName('li');
li_list[1].style.color = 'orange';
li_list[3].style.color = 'orange';
li_list[5].style.color = 'orange';

// li_list[1].style.color = 'darkRed';
// li_list[1].style.padding = '0 1rem';
// li_list[1].style.margin = '0 1rem';
// li_list[1].style.display = 'block';

// li_list.forEach(li => {
//     li.style.paddingLeft = '2rem'
// });
let child_2 = document.querySelector('.child-2');
child_2.style.width = '45%'
child_2.style.textAlign = 'justify'

let chnge = document.querySelector('h1')
chnge.style.color = 'rgb(11,44,61)'
// chnge.innerText = 'Change Everything'
// chnge.style.width = '97%'
// chnge.style.backgroundColor = 'black'
chnge.style.textTransform = 'uppercase'

let p = document.createElement('p');

p.appendChild(document.createTextNode('lorem is a text format used for dummy text sit amet consectetur adipisicing elit. fugit amet tempore.Vitae voluptate delectus saepe iure? Laborum! sit amet consectetur adipisicing elit. fugit amet tempore.Vitae voluptate delectus saepe iure? Laborum! sit amet consectetur adipisicing elit. fugit amet tempore.Vitae voluptate delectus saepe iure? Laborum!'))
document.querySelector('.child-2').appendChild(p)
// p.style.width = '100%'
// p.style.textAlign = 'justify'

let button = document.createElement('button')

button.appendChild(document.createTextNode('Click Here To Manipulation'));

document.querySelector('.wrap').appendChild(button)
button.className="btn"
button.style.borderRadius ='8px'
button.style.padding ='15px'
button.style.backgroundColor ='rgb(11,44,61)'
button.style.color ='white'
button.style.cursor ='pointer'
button.style.fontSize = '1.4rem'
button.style.width = '25%'
button.style.borderRadius = '5px'
// console.log(button);

function chg() {
    let child_2 = document.querySelector('.child-2')
    button.style.opacity = '0.5';
    button.style.backgroundColor = 'rgb(11, 85, 81)';
    li_list[1].style.color = 'darkBlue';
    li_list[3].style.color = 'darkBlue';
    li_list[5].style.color = 'darkBlue';
    chnge.style.color = 'darkOrange';
    compos.style.backgroundColor = 'rgb(9, 155, 181)'
    img.setAttribute('src','img/4.jpg');
    // child_2.innerHTML = child_2.innerText.split(' ').map( pd => 
    //     pd.length >= 8 ? `<span style="background-color: red">${pd}</span>`
    //     :pd).join(' ');
    
}

button.addEventListener("click", chg)





let ul = document.createElement('ul');
ul.className = 'ul_js'
document.querySelector('.wrap').appendChild(ul)



let rigthDiv = document.createElement('div');
rigthDiv.className ='rightDiv'
document.querySelector('section').appendChild(rigthDiv)


// IMAGE ON THE RIGHT SIDE
let img = document.createElement('img')
img.setAttribute('src','img/1.jpeg');
document.querySelector('section').appendChild(img)
img.style.position = 'absolute'
img.style.top = '4.4rem'
img.style.right = '0.49rem'
img.style.width = '53%'
img.style.height = '75vh'
console.log(img);



let rigth = document.createElement('h1');
rigth.appendChild(document.createTextNode('FILL THE FORM BELOW'));
document.querySelector('section').appendChild(rigth);
rigth.className = 'right-h1';
rigth.style.color = 'rgb(11, 85, 81)'

let form = document.createElement('form')
document.querySelector('section').appendChild(form)
form.className = 'formSec';
form.style.width = '35%'; 
form.style.height = '55vh';
form.style.backgroundColor = 'lightGrey'
form.style.display = 'flex'
form.style.flexDirection = 'column'

// YOUR FIRST NAME
let inputFName = document.createElement('input')
document.querySelector('form').appendChild(inputFName)
inputFName.setAttribute('type', 'text')
inputFName.setAttribute('placeHolder', 'First Name')
inputFName.style.padding = '10px 15px'
inputFName.style.borderRadius = '5px'
if (inputFName == '') {
    alert('enter your First Name pls!')
}

// YOUR LAST NAME
let inputLName = document.createElement('input')
document.querySelector('form').appendChild(inputLName)
inputLName.setAttribute('type', 'text')
inputLName.setAttribute('placeHolder', 'Last Name')
inputLName.style.padding = '10px 15px'
inputLName.style.marginTop = '10px'
inputLName.style.borderRadius = '5px'

// YOUR MIDDLE NAME
let inputMName = document.createElement('input')
document.querySelector('form').appendChild(inputMName)
inputLName.setAttribute('type', 'text')
inputMName.setAttribute('placeHolder', 'Middle Name')
inputMName.style.padding = '10px 15px'
inputMName.style.marginTop = '10px'
inputMName.style.borderRadius = '5px'

// YOUR DATE OF BIRTH
let dob = document.createElement('input');
document.querySelector('form').appendChild(dob);
dob.setAttribute('type', 'date');
// dob.setAttribute('placeHolder', 'Date of Birth');
dob.style.padding = '10px 15px'
dob.style.marginTop = '10px'
dob.style.borderRadius = '5px'

// GENDER  MALE
let span = document.createElement('span')
document.querySelector('form').appendChild(span)
span.appendChild(document.createTextNode('Male'))
span.style.marginTop = '9px';

let gender = document.createElement('input');
document.querySelector('form').appendChild(gender);
gender.setAttribute('type', 'checkbox')
gender.style.position = 'relative';
gender.style.left = '-14rem';


// GENDER  FEMALE

let spanF = document.createElement('span')
document.querySelector('form').appendChild(spanF)
spanF.appendChild(document.createTextNode('Female'))
spanF.style.marginTop = '9px';


let female = document.createElement('input');
document.querySelector('form').appendChild(female);
female.setAttribute('type', 'checkbox')
female.style.position = 'relative';
female.style.left = '-14rem';

let submitB = document.createElement('input');
document.querySelector("form").appendChild(submitB)
submitB.setAttribute('type', 'submit')
submitB.appendChild(document.createTextNode('Submit'))
submitB.style.padding = '10px 15px'
submitB.style.marginTop = '10px'
submitB.style.borderRadius = '5px'
