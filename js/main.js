const btn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button clicked.");
    let customText = document.getElementsByClassName("my-input");
    let textArea = document.getElementsByClassName("my-textarea");
    let results = document.getElementById("text");
    

    console.log(customText);
    results.innerHTML = "Hello, " + customText[0].value;
    results.innerHTML += "Message: " + textArea[0].text;
}




btn.addEventListener("click", buttonClicked);