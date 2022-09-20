const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', ()=>{

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function () {
        if (this.status === 200) {
            output.innerHTML = this.responseText
            // console.log(this.responseText);
        }
    }
    xhr.send()
})

// 1 create xhr object
// 2 OPEN the xhr with 3 para (Get, d data, boolean)
// 3 xhr.onload = function{ if( this.status ===200) this.responseText}
// 4 xhr.send()