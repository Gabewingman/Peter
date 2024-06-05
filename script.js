
function agree() {
    let name = prompt("What is your name?");
    alert(`I think you want to be a Web Developer too ${name}.`);
    const button1 = document.getElementById("button1").addEventListener(click, agree);
}

function disAgree() {
    let name = prompt("What is your name?");
    alert(`You have every opportunities in IT industry ${name}.`)
    const button2 = document.getElementById("button2").addEventListener(click, disAgree);
}

function notDecided() {
    let name = prompt("What is your name?");
    alert(`No worries. There is so many to learn in IT industry ${name}.`)
    const button3 = document.getElementById("button3").addEventListener(click, notDecided);
}


