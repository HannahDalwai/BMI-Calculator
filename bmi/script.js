function bmi(){
    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value;
    let answer = weight/(height**2);
    document.getElementById("ideal").value = answer;
}

function clearSum(){
    answer = "";
    document.getElementById("ideal").value = answer;
    }

    