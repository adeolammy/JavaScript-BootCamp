// how to remove the last number in an object javaScript ?
// how to add the the last number from an array in javaScript ?     
// how to create a toggle menu in javaScript ?  
// how to create a modal in javaScript ? 
// function toggleModal(e) {
//     e.stopPropagation()
//     backdrop.classList.toggle("active")
// }
// const backdrop = document.querySelector(".backdrop")
// backdrop.addEventListener("click", toggleModal)
// button.addEventListener("click", toggleModal)

// const backdrop = document.querySelector(".backdrop");
// const button = document.querySelector("button");

// button.addEventListener('click', ()=>{
//     backdrop.classList.toggle('actived');
// })
// backdrop.addEventListener('click', ()=>{
//     backdrop.classList.remove('actived');
// })
// how to create a flexible landing page ?  
// how to create a nav bar with javaScript ?
// how to create a popover in javaScript ?

// how to create a  Toasts in javaScript ? 


const  posts = [
    {title: 'Our lives',
    body: 'how time flies'},

    {title: 'Human Nature',
    body: 'The idealogy behind human existence'},

    {title: 'Can this be true',
    body: 'try and retry'},
]
const container = document.getElementById('container')
function createPost(newPost) {
    setTimeout(()=>{
        posts.push(newPost)
    }, 2000)
}

function showPost() {
    // const output = '';
    setTimeout(()=>{
        posts.map(post =>{
        const output = `<p>${post.title}</p>
                <p>${post.body}</p>
                `
    container.innerHTML = output;
        })
    },1000)
}

createPost({title: ' Nature',
    body: 'The idealogy behind human existence'});
showPost();




