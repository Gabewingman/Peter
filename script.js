
function decide() {

    let name = prompt("What is your name?");

    if (agree() == true) {
        alert(`So you want to be a developer ${name}? Here are some advice for you:`);
        alert(`First, Determine your areas of interest.`);
        alert(`Second, Cultivate Curiosity and an Open Mind.`);
        alert(`Third, Don’t Just Write Code - Create Business Value.`)
    } else (disAgree() == true) {
        alert(`What areas of IT industry you want? ${name}`);
        alert(`Here are some advice for you:`)
        alert(`First, Determine your areas of interest.`);
        alert(`Second, Cultivate Curiosity and an Open Mind.`);
        alert(`Third, Don’t Just Write Code - Create Business Value.`)
    }
    
    const button1 = document.getElementById("button1").addEventListener(click, agree);
    const button2 = document.getElementById("button2").addEventListener(click, disAgree);
}

