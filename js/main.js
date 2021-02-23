function saySomething(phrase){
    console.log("You said: " + phrase);
}

function getPhraseLength(phrase, another){
    var l = p1.length  + p2.length;
if (typeof another !== "undefined"){
    l += another.length;
}

    return l;
}


var p1 = "This is a slightly longer sentence.";
var p2 = "This is a shorter sentence.";

var thisLength = getPhraseLength(p1,p2);
console.log(thisLength);