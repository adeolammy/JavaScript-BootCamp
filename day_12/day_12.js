const btn1 = document.getElementById('btn1');
const output = document.getElementById('output');

btn1.addEventListener('click', ()=>{
  fetch('text.txt')
  .then((res)=>{ 
    return res.text();
  })
  .then( function(data) {
    output.innerHTML += data;
    // console.log(data);
  })
  .then( function(err) {
    err = `<span style="background-color: yellow;">pass in the right data</span>`
    output.innerHTML += err;
  })
})