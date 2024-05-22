function call() {
    console.log("What happen");
}
const button = document.getElementById("Nigga");
button.addEventListener("click", function call1() {
    console.log("Hi");
});
button.ondblclick = call;