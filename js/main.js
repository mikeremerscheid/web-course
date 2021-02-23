var btn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button clicked.");
    btn.removeEventListener("click", buttonClicked);

    var customText = document.getElementsByClassName("my-input");
    var textArea = document.
    var results = document.getElementById("text");

    console.log(customText);
    results.innerHTML = "Hello, " + customText[0].value;
    
}


btn.addEventListener("click",buttonClicked);