//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// input_sect.addEventListener('keydown', runEvent);

// function runEvent(e){

//     headingPart.innerHTML = e.target.value
//     // console.log(e.target.id);
//     // console.log(e.target.type);
//     // console.log(e.target.timeStamp);
//     // console.log(e.target.clientY);
//     // console.log(e.target.clientX);
//     // console.log(e.target.offsetY);
//     // console.log(e.target.offsetX);
// }


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const headingPart = document.querySelector('.headingPart');
const input_sect = document.querySelector('#inputed');
const btn_sect = document.querySelector('.btn_sect');

btn_sect.addEventListener('click', showEvent);

function showEvent(){
       let x = document.createTextNode(input_sect.value)
        headingPart.appendChild(x)
       input_sect.value = ''
}


//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


// let LIlist = document.querySelectorAll('li')
// LIlist[2].remove()
// // console.log(LIlist);

// let ULlisted = document.querySelectorAll('ul')
// listed[0].remove()
// ULlisted[1].removeChild(LIlist[2])
// console.log(ULlisted);

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// let x = document.body;

// x.append('let see if it will work')

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// const title = document.querySelector('.title')

// const changeColor = document.querySelector('.changeColor')


// changeColor.addEventListener('click', function(){
//     title.classList.add("change")
//     title.classList.toggle("change")
    
// });

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


// const Userlist = document.querySelector('.name_list')
// const listInput = document.querySelector('.list_input')
// const AddListBtn = document.querySelector('.addListBnt')

// AddListBtn.addEventListener('click', function(){
//     let newLi = document.createElement('li');
//     let listCont = document.createTextNode(listInput.value)
//     newLi.appendChild(listCont)
//     Userlist.appendChild(newLi)
//     // console.log(newLi);
// })


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// const btn = document.querySelector('.addListBnt')
// const list = document.querySelector('.name_list')
// const input = document.querySelector('.list_input')


// btn.addEventListener('click', function(){
//     let li = document.createElement('li');
//     let contentLi = document.createTextNode(input.value)
//     li.appendChild(contentLi);
//     list.appendChild(li)
//     list.classList.add(chang)
// })

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// const list = document.querySelector('.ul_list')
// const head = document.querySelector('.head')
// const input = document.querySelector('.input')
// const btn = document.querySelector('.btn')

// // btn.addEventListener('click', function(){
// //     let li = document.createElement('li');
// //     let contLI = document.createTextNode(input.value);
// //     li.appendChild(contLI);
// //     list.appendChild(li);
// //     // console.log(list);
// //     list.classList.add('change')


// // })

// // 1 create an li
// // 2 create textnode ()
// // 3 pass the textNode into the LI

// if (!input.value) {
//     cont = ''
// }

// btn.addEventListener('click', function(){
//     let cont = document.createTextNode(input.value)
//     head.appendChild(cont)

//         // console.log(head);
// })