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

// how to fetch api ?
// url (required)
// fetch('URL_OF_YOUR_API', {//options => (optional)
//     method: 'get' //Get / POST / ...
// }).then(function(response) {
//     //response
// }).catch(function(err) {
// // Called if the server returns any errors
//   console.log("Error:"+err);
// });


//  fetch('YOUR_URL')
//     .then(function(response){
//          // response is a json string
//         return response.json();// convert it to a pure JavaScript object
//     })
//     .then(function(data){
//          //Process Your data  
//       if (data.is_taken_email)   
//            alert(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//       });


// function successListener() {  
//   var data = JSON.parse(this.responseText);  
//   alert("Name is: "+data[0].name);  
// }

// function failureListener(err) {  
//   console.log('Request failed', err);  
// }

// var request = new XMLHttpRequest();  
// request.onload = successListener;  
// request.onerror = failureListener;  
// request.open('get', 'https://jsonplaceholder.typicode.com/users',true);  
// request.send();

 getApiBtn.addEventListener('click', ()=>{
    // var listen = setInterval(function() {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
    //   if (data[0].name)
    data.forEach(result =>{
      output.innerHTML +=  `
                        <p>${result.id}</p>                
                        <p>${result.name}</p>                
                        <p>${result.username}</p>                
                        <p>${result.email}</p>                
                        <p>${result.address.street}</p>                
                        <p>${result.phone}</p>                
                        <p>${result.company.name}</p>                
                        <p>${result.website}</p>                
                `

    })
        console.log(data);
    })
    .catch(function(err) {
      console.log(err);
    });

// }, 2000);//2 second
// listen
})













