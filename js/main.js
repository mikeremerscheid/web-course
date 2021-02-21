const btn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button clicked.");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "Don't do it!";
}


var hobbies = ["pizza", "gaming", "reading", "programming", "music"];

console.log("I no longer enjoy", hobbies.pop());

hobbies.push("archery");
console.log("I no longer like", hobbies.shift());
hobbies.unshift("blacksmithing");

hobbies.forEach(function(item, index){
    console.log("I like", item, index);
});

if (hobbies.indexOf("reading")>1){
    console.log("I like reading!");
}

if (hobbies.indexOf("sports") === -1){
    console.log("not in array.");
}

btn.addEventListener("click", buttonClicked);