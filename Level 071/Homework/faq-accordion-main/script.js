const images = ["./assets/images/icon-minus.svg", "./assets/images/icon-plus.svg"];

const btns = document.getElementsByClassName("btn-img");

const func = (target) => {
    const p = target.parentElement.nextElementSibling;
    if(p.style.display === "block") {
        p.style.display = "none";
        target.src = images[1];
    } else {
        p.style.display = "block";
        target.src = images[0];
    }
}


for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        func(e.target);
    })
}