const getTextBtn = document.getElementById('btn1');
const getJsonBtn = document.getElementById('btn2');
const getApiBtn = document.getElementById('btn3');
const output = document.getElementById('output');

// getTextBtn.addEventListener('click', ()=>{
//   fetch('text.txt')
//   .then((res)=>{ 
//     return res.text();
//   })
//   .then( function(data) {
//     output.innerHTML += data;
//     // console.log(data);
//   })
//   .then( function(err) {
//     // err = `<span style="background-color: yellow;">pass in the right data</span>`
//     output.innerHTML += err;
//   })
// })


// getJsonBtn.addEventListener('click', ()=>{
//     fetch('data.json')
//     .then((res)=>{
//       return  res.json();
//     })

//     .then((data)=>{
//         data.map(result => {
//             output.innerHTML += `<p>${result.id}</p>
//                                 <p>${result.names}</p>
//                                 <p>${result.Address}</p>
//                                 <p>${result.phone}</p>
//                                 <p>${result.Company}</p>
//             `
//         });
//     })
//     .catch((err)=>{
//         // console.log(err);
//         output.innerHTML += err;
//     })
// })






// getJsonBtn.addEventListener('click', ()=>{
//         fetch('data.json')
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             data.forEach(result=>{
//                 output.innerHTML += `
//                         <p>${result.id}</p>                
//                         <p>${result.names}</p>                
//                         <p>${result.Address}</p>                
//                         <p>${result.phone}</p>                
//                         <p>${result.Company}</p>                
//                 `
//             })
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// });




// getJsonBtn.addEventListener('click', ()=>{
//         fetch('data.json')
//         .then(ee =>{
//          return   ee.json()
//         })

//         .then((shows)=>{
//                 shows.forEach(element => {
//                     output.innerHTML += `
//                             <p>${element.id}</p>                
//                             <p>${element.names}</p>                
//                             <p>${element.Address}</p>                
//                             <p>${element.phone}</p>                
//                             <p>${element.Company}</p> 
//                     `
//                 });
//         })
//         .catch(err =>{
//             console.log(err);
//         })
// });


// getTextBtn.addEventListener('click' ,()=>{
//     fetch('text.txt')
//     .then( (resp)=>{
//         return resp.text()
//     })
//  let datas='';   datas.innerText.split(' ').map(x => 
//             x.length > 8 ? `<span style="background-color: yellow;">${x}</span>`: x
//         ).join(' ')
    
//     .then((datas)=>{
//         output.innerHTML = datas
//     })

//     .catch((errors)=>{
//         console.log(errors);
//     })
// })

// const p = document.getElementById('p')
// p.innerHTML += p.innerText.split(' ').map(res=>
//     res.length >= 8 ? `<span style="background-color: yellow;">${res}</span>`: res
//         ).join(' ');

// p.innerHTML = p.innerText.split(' ').map( pd => 
//         pd.length >= 8 ? `<span style="background-color: yellow;">${pd}</span>`
//         :pd).join(' ');


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////



 getApiBtn.addEventListener('click', ()=>{
 const xhr = new XMLHttpRequest()

 xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
        xhr.onload = function () {
            if (this.status === 200) {
                const resp = JSON.parse(this.responseText)
                     resp.map(result =>{
                 result = Math.floor(Math.random(resp))* resp.length
               

                    output.innerHTML += 
                     `
                                <p>${result.id}</p>                
                                <p>${result.name}</p>                
                                <p>${result.username}</p>                
                                <p>${result.email}</p>                
                                <p>${result.address}</p>                
                                <p>${result.phone}</p>                
                                <p>${result.company}</p>                
                                <p>${result.website}</p>                
                        `
             })
            }
        }
        xhr.send();
        xhr.onerror = function (err) {
            console.log('reguest on found', err);
        }
 })


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////



//  getApiBtn.addEventListener('click', ()=>{

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {

//     data.forEach(result =>{
//      setTimeout(()=>{
//          output.innerHTML +=  `
//                         <p>${result.id}</p>                
//                         <p>${result.name}</p>                
//                         <p>${result.username}</p>                
//                         <p>${result.email}</p>                
//                         <p>${result.address.street}</p>                
//                         <p>${result.phone}</p>                
//                         <p>${result.company.name}</p>                
//                         <p>${result.website}</p>                
//                 `

//      },2000)
//     })
//         console.log(data);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });


// })













