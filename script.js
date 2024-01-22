function isNaturalNumber(n) {
    n = n.toString(); // force the value incase it is not
    var n1 = Math.abs(n),
        n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}
function check(){
    var a1  = document.getElementById("tes").value;
    if(isNaturalNumber(a1)){
       alert("stn");
    } else{
        alert("k phai");
    }
}