const input = document.querySelector("input");
const submit = document.querySelector("button");
const error = document.querySelector(".error");

submit.addEventListener("click", ()=> {
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(input.value.toLowerCase())) {
        error.style.display = "block";
        input.style.borderColor = "red";
    } else {
        error.style.display = "none";
        input.style.borderColor = "blue";
    }
})
