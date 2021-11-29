let sum = "";

function addToSum(operator){
    sum = sum ;
    console.log(sum);
    document.getElementById("output").innerText = sum;
}

function evaluateSum(){
    sum = eval(sum);
    document.getElementById("output").innerText = sum;
}

function clearSum(){
sum = "";
document.getElementById("output").innerText = sum;
}

function deleteChar(){
    sum = sum.slice(0, -1);
    document.getElementById("output").innerText = sum;
}
