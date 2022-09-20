const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', ()=>{

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);

    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         output.innerHTML = this.responseText;
    //     }
    // }

    xhr.onreadystatechange = function () {
        if (this.status === 200 || this.onreadystatechange ===4) {
            output.innerHTML = `<p style="background-color: lightblue;">${this.responseText}</p>`
        }
    }
    xhr.send()
})