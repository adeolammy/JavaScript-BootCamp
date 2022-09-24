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




getJsonBtn.addEventListener('click', ()=>{
        fetch('data.json')
        .then(ee =>{
         return   ee.json()
        })

        .then((shows)=>{
                shows.forEach(element => {
                    output.innerHTML += `
                            <p>${element.id}</p>                
                            <p>${element.names}</p>                
                            <p>${element.Address}</p>                
                            <p>${element.phone}</p>                
                            <p>${element.Company}</p> 
                    `
                });
        })
        .catch(err =>{
            console.log(err);
        })
});


getTextBtn.addEventListener('click' ,()=>{
    fetch('text.txt')
    .then( (resp)=>{
        return resp.text()
    })
    .then((datas)=>{
        output.innerHTML += datas
    })

    .catch((errors)=>{
        console.log(errors);
    })
})














