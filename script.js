function selected() {
    if (document.getElementById("rock").checked) {
        return "Rock";
    }
    else if (document.getElementById("paper").checked) {
        return "Paper";
    }
    else if (document.getElementById("scissors").checked) return "Scissors";
    else return "NULL";
}
function random() {
    const val = ["Rock","Scissors","Paper"];
    const value = Math.floor((Math.random()*9)/3);
    return val[value];
}
function play() {
    const ch = random();
    const sel = selected();
    var msg = "Computer chose "+ch+". ";
    document.getElementById("msg").textContent = "Computer chose "+ch;
    if (sel == "Rock") {
        if (ch == "Paper") {
            comp++;
            msg += "You lose!";
        }
        else if (ch == "Scissors") { 
            you++;
            msg += "You win!";
        }
        document.getElementById("rock").checked = false;
    }
    else if (sel == "Paper") {
        if (ch == "Rock") {
            you++;
            msg += "You win!";
        }
        else if (ch=="Scissors") {
            comp++;
            msg += "You lost!";
        }
        document.getElementById("paper").checked = false;
    }
    else if (sel == "Scissors") {
        if (ch=="Rock") {
            comp++;
            msg += "You lose!";
        }
        else if (ch=="Paper") {
            you++;
            msg += "You win!";
        }
        document.getElementById("scissors").checked = false;
    }
    else {
        msg = "Choose an option pls!";
    }
    document.getElementById("info1").textContent = you;
    document.getElementById("info2").textContent = comp;
    document.getElementById("msg").textContent = msg;
}
var you = 0;
var comp = 0;
document.getElementById("confirm").onclick = play;