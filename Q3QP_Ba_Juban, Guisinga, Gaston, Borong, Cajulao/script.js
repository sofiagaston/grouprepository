document.getElementById("dropdown").style.display = "none";

function showDropdown() {
    document.getElementById("dropdown").style.display = "block"; 
}

function tossCoin() {
    var selectedOption = document.getElementById("coinSelection").value;
    var result = Math.floor(Math.random() * 2);
    var flip;
    
    if (result === 0) {
        flip = "heads";
    } else {
        flip = "tails";
    }

    if (selectedOption === flip) {
        document.getElementById("resultText").innerText = "Coin is " + flip + ". You chose " + flip + "! You can attack first.";
    } else {
        document.getElementById("resultText").innerText = "Coin is " + flip + ". You chose " + selectedOption + "! You must defend first.";
    }
    document.getElementById("dropdown").style.display = "none"; 
    document.getElementById("flipButton").style.display = "none"; 
}
