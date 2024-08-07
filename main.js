let container = document.getElementById("container");
let b1 = document.getElementById("b1");
let b2 = document.getElementsByClassName("b2")[0];
b1.addEventListener('click', function () {
    if (b2.classList.toggle("active")) container.style.backgroundColor = "black";
    else container.style.backgroundColor = "white";
})