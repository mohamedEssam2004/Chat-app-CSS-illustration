const label_one = document.getElementById("label-1");
const label_two = document.getElementById("label-2");
const check_one = document.getElementById("check-1");
const check_two = document.getElementById("check-2");

label_one.addEventListener("click", () => {
    check_one.classList.toggle("do");
});

label_two.addEventListener("click", () => {
    check_two.classList.toggle("do");
});


const msg = document.getElementById("msg");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {

    const txt = document.getElementById("txt");
    const txtArea = document.getElementById("txtArea").value;

        msg.style.display = "flex";
        txt.innerHTML = txtArea;
});