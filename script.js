function selected() {
    if (document.getElementById("rock").checked) {
        return "Rock";
    }
    else if (document.getElementById("paper").checked) {
        return "Paper";
    }
    else return "scissors";
}
function random() {
    const val = ["Rock","Scissors","Paper"];
    const value = Math.floor((Math.random()*9)/3);
    return val[value];
}
function play() {
    const ch = random();
    const sel = selected();
    document.getElementById("msg").textContent = "Computer chose "+ch;
    if (sel == "Rock") {
        if (ch == "Paper") comp++;
        else if (ch == "Scissors") you++;
        document.getElementById("rock").checked = false;
    }
    else if (sel == "Paper") {
        if (ch == "Rock") you++;
        else if (ch=="Scissors") comp++;
        document.getElementById("paper").checked = false;
    }
    else if (sel == "Scissors") {
        if (ch=="Rock") comp++;
        else if (ch=="Paper") you++;
        document.getElementById("scissors").checked = false;
    }
    else {
        document.getElementById("msg").textContent = "Choose an option pls!";
    }
    document.getElementById("info1").textContent = you;
    document.getElementById("info2").textContent = comp;
}
var you = 0;
var comp = 0;
document.getElementById("confirm").onclick = play;