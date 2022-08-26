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
chnge.style.color = 'blue'
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

button.appendChild(document.createTextNode('Click Here'));

document.querySelector('.wrap').appendChild(button)
button.className="btn"
button.style.borderRadius ='8px'
button.style.padding ='15px'
button.style.backgroundColor ='darkBlue'
button.style.color ='white'
button.style.cursor ='pointer'
console.log(button);

function chg() {
    button.style.opacity = '0.5';
    button.style.backgroundColor = 'brown';
    li_list[1].style.color = 'darkBlue';
    li_list[3].style.color = 'darkBlue';
    li_list[5].style.color = 'darkBlue';
    chnge.style.color = 'darkOrange'
    compos.style.backgroundColor = 'rgb(9, 155, 181)'
    // p.innerText = innerText.split(' ').forEach( p => {
    //     p.length == 8 ? <span style="background-color = 'yellow' "></span> 
    //     : `${p}`
    // });
}

button.addEventListener("click", chg)





let ul = document.createElement('ul');
ul.className = 'ul_js'
document.querySelector('.wrap').appendChild(ul)

let newLi = document.createElement('li');
newLi.appendChild(document.createTextNode('other info'));
document.querySelector('.ul_js').appendChild(newLi)
console.log(newLi);
// document.body.style.backgroundColor = 'offwhite'


let rigthDiv = document.createElement('div');
rigthDiv.className ='rightDiv'
document.querySelector('section').appendChild(rigthDiv)

rigthDiv.style.position = 'relative'
rigthDiv.style.top = '0'
rigthDiv.style.right = '0'
rigthDiv.style.backgroundColor = 'black'
rigthDiv.style.width = '75%'


let rigth = document.createElement('h1');
rigth.appendChild(document.createTextNode('RIGHT SIDE CONTENT'));
document.querySelector('section .rigthDiv').appendChild(rigth)

console.log(rigth);