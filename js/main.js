document.getElementById("bolded").onclick=function(){
    if(document.getElementById("changed").style.fontWeight == 'normal'){
    document.getElementById("changed").style.fontWeight = 'bold';
    } else {
        document.getElementById("changed").style.fontWeight = 'normal';
    }
}

document.getElementById("itaalic").onclick=function(){
    if(document.getElementById("changed").style.fontStyle == "normal"){
    document.getElementById("changed").style.fontStyle = "italic";
    } else {
        document.getElementById("changed").style.fontStyle = "normal";
    }
}
document.getElementById("underlinee").onclick=function(){
    if(document.getElementById("changed").style.textDecoration == "none"){
    document.getElementById("changed").style.textDecoration = "underline";
    } else {
        document.getElementById("changed").style.textDecoration = "none";
    }
}
document.getElementById("karl").onclick=function(){
    if(document.getElementById("changed").style.fontFamily=='normal'){
    document.getElementById("changed").style.fontFamily='Karla', sans-serif;
    } else {
        document.getElementById("changed").style.fontFamily='normal';
    }
}
document.getElementById("lobster").onclick=function(){
    if(document.getElementById("changed").style.fontFamily=='normal'){
    document.getElementById("changed").style.fontFamily='Lobster', cursive;
} else {
    document.getElementById("changed").style.fontFamily='normal';
    }
}
document.getElementById("pacifico").onclick=function(){
    if(document.getElementById("changed").style.fontFamily=='normal'){
    document.getElementById("changed").style.fontFamily='Pacifico', cursive;
    } else {
        document.getElementById("changed").style.fontFamily='normal';
    }
}
document.getElementById("sz1").onclick=function(){
    document.getElementById("changed").style.fontSize="10px";
}
document.getElementById("sz2").onclick=function(){
    document.getElementById("changed").style.fontSize="20px";
}
document.getElementById("sz3").onclick=function(){
    document.getElementById("changed").style.fontSize="30px";
}
