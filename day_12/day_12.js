const getTextBtn = document.getElementById('btn1');
const getJsonBtn = document.getElementById('btn2');
const getApiBtn = document.getElementById('btn3');
const output = document.getElementById('output');

getTextBtn.addEventListener('click', ()=>{
  fetch('text.txt')
  .then((res)=>{ 
    return res.text();
  })
  .then( function(data) {
    output.innerHTML += data;
    // console.log(data);
  })
  .then( function(err) {
    // err = `<span style="background-color: yellow;">pass in the right data</span>`
    output.innerHTML += err;
  })
})


getJsonBtn.addEventListener('click', ()=>{
    fetch('datas.json')
    .then((res)=>{
      return  res.json();
    })

    .then((data)=>{
        data.map(result => {
            output.innerHTML += `<p>${result.id}</p>
                                <p>${result.names}</p>
                                <p>${result.Address}</p>
                                <p>${result.phone}</p>
                                <p>${result.Company}</p>
            `
        });
    })
    .catch((err)=>{
        // console.log(err);
        output.innerHTML += err;
    })
})