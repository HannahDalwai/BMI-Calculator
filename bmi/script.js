// function bmi(){
//     let weight=document.getElementById("weight").value;
//     let height=document.getElementById("height").value;
//     let answer = weight/(height**2);
//     document.getElementById("ideal").value = answer;
// }



    
function bmi() {

    let weight = parseFloat(document.getElementById("weight").value); // To get weight from the input with id as weight
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    let bmi = weight / (height * height); // According to the formula
    document.getElementById("answer").value =
      String(bmi.toPrecision(3)) + "kg/m^2"; // writing to the output
  
    if (bmi < 18.5) {
      document.getElementById("category").value = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 25) {
      document.getElementById("category").value = "Healthy weight";
    } else if (bmi > 25 && bmi <= 30) {
      document.getElementById("category").value = "Overweight";
    } else if (bmi > 30 && bmi <= 35) {
      document.getElementById("category").value = "Obese Class 1";
    } else if (bmi > 35 && bmi <= 40) {
      document.getElementById("category").value = "Obese Class 2";
    } else if (bmi > 40) {
      document.getElementById("category").value = "Obese Class 3";
    }
    let idealMale = 0.5*bmi**2+  }

  function clearSum(){
      document.getElementById("height").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("category").value = "";
      document.getElementById("answer").value = "";
      document.getElementById("Age").value = "";
      document.getElementById("Gender").value = "";
      if (document.getElementById("Gender").value = "...choose"){
          document.getElementById("Gender").value="";
      }
    }


   