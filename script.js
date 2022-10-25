let i=0, n=16;

const container = document.getElementById("container");

container.innerHTML = 
    `<div class="row">${'<div class="cell">X</div>'.repeat(n)}</div>`
    .repeat(n).replace(/X/g,_=> (i++).toString(n) )