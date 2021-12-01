function bmi() {

    let weight = parseFloat(document.getElementById("weight").value); // To get weight from the input with id as weight
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters
    let bmi = weight / (height * height); // According to the formula
    document.getElementById("answer").value =
      String(bmi.toPrecision(3)); // writing to the output
  
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
    let idealMale = 0.5*bmi**2+11.5 ;
    let Age = document.getElementById("Gender").value;
    let idealFemale=0.5*bmi**2+0.03*Age+11;
    if (document.getElementById("Gender").value = "Male"){
        document.getElementById("idealAnswer").value = idealMale; 
    }
    else if (document.getElementById("Gender").value = "Female"){
        document.getElementById("idealAnswer").value = idealFemale
}
}

  function clearSum(){
      document.getElementById("height").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("category").value = "";
      document.getElementById("answer").value = "";
      document.getElementById("idealAnswer").value = "";
      document.getElementById("Age").value = "";
      document.getElementById("Gender").value = "";
      if (document.getElementById("Gender").value = "...choose"){
          document.getElementById("Gender").value="";
      }
    }

    function disableAge(){
        if ( document.getElementById("Gender").value == "Male"){
 document.getElementById("Age").disabled = true;
    
      }  else if (document.getElementById("Gender").value == "Female"){
        document.getElementById("Age").disabled = false;

       }
    }