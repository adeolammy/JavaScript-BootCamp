// const btn = document.getElementById('btn');
// const output = document.getElementById('output');

// btn.addEventListener('click', ()=>{

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'data.txt', true);

//     // xhr.onload = function () {
//     //     if (this.status === 200) {
//     //         output.innerHTML = this.responseText;
//     //     }
//     // }

//     xhr.onreadystatechange = function () {
//         if (this.status === 200 || this.onreadystatechange ===4) {
//             output.innerHTML = `<p style="background-color: lightblue;">${this.responseText}</p>`
//         }
//     }
//     xhr.send()
// })






// const btn1 = document.getElementById('btn1');
// const output1 = document.getElementById('output1');
// const btnAll = document.getElementById('btn2');
// const outputAll = document.getElementById('output2');



// btnAll.addEventListener('click', ()=>{

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'data.json', true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             const sho = JSON.parse(this.responseText);
//             sho.forEach( result =>{
//                 outputAll.innerHTML += `<ul style="list-style: none;">
//                             <li>${result.id}</li>
//                             <li>${result.names}</li>
//                             <li>${result.Address}</li>
//                             <li>${result.phone}</li>
//                                 </ul>`
//             })

//         }
//     }
//     xhr.send()
// })








// btnAll.addEventListener('click', ()=>{

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data.json', true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             const ind = JSON.parse(this.responseText);
//             ind.forEach((result)=>{
//                outputAll.innerHTML += result `<ul style="list-style: none;">
//                <li>${result.id}</li>
//                <li>${result.names}</li>
//                <li>${result.Address}</li>
//                <li>${result.phone}</li>
//                <ul/>`
//             })
//         }
//     }
// xhr.send();
// })


        // if (this.status === 200) {
        //     const individual = JSON.parse(this.responseText);
        //     individual.forEach(result => {
                
            
        //     outputAll.innerHTML += `<ul style="background-color: lightblue";> 
        //                     <li>${result.id}<li/>
        //                     <li>${result.names}<li/>
        //                     <li>${result.Address}<li/>
        //                     <li>${result.Company}<li/>
        //                     <li>${result.phone}<li/>
        //                 <ul/>`;
        //                 outputAll.innerHTML

        //     });
        // }
//     }
//     xhr.send()
// })





// const btn = document.getElementById('btn2');
// const output = document.getElementById('output2');

// btn.addEventListener('click', ()=>{

//     const xhr  = new XMLHttpRequest();

//     xhr.open('GET', 'data.json', true);

//     xhr.onload = function () {
//         if (this.status === 200) {
//             const conv = JSON.parse(this.responseText)
//             conv.forEach(result => {
//                 output.innerHTML += `<ul style="list-style: none;">
//                                         <li>${result.id}<l/i>
//                                         <li>${result.names}<l/i>
//                                         <li>${result.Address}<l/i>
//                                         <li>${result.phone}<l/i>
//                                         </ul>`
//             });
//         }
//     }
//     xhr.send()
// })




const btn = document.getElementById('btn2');
const output = document.getElementById('output2');

btn.addEventListener('click', ()=>{

    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const out = JSON.parse(this.responseText);
            out.map(result =>{

            // })
            //  out.forEach(result => {
                output.innerHTML += `
                                       <p>${result.id}</p> 
                                       <p>${result.names}</p> 
                                       <p>${result.Address}</p> 
                                       <p>${result.phone}</p> 
                                       <p>${result.Company}</p> 
                                        `;
             });
        }; 
    };
    xhr.send();
});