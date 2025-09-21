function calculate() {
    const weight = document.getElementById('weight').value;
    console.log(weight);

    const age = document.getElementById('age').value
    console.log(age);

    const cmelmnt = document.getElementById('height').value;
    console.log(cmelmnt);

    const bmi = Math.floor(weight / ((cmelmnt / 100) ** 2));


    console.log(bmi);
if(cmelmnt=="" || age<2 || weight==""){
 alert("Please enter all details")
}
    else{
        if (bmi < 18.5) {
            
            result.innerHTML = `<h3 class=" text-primary text-center mt-3 fw-bold"> YOUR BMI</h3>
                             <p class="text-light mt-3 border border-2 rounded shadow fs-4  text-center  p-3 bg-primary " style="margin-left: 44%;width:10vh;" >${bmi}</p>
                         <p style="margin-left: 43%;font-size: 16px;font-weight: 600;" class="text-primary">Underweight</p>    
                        <h6 class="mt-2">💡 Your Health Tips:</h6>
      <ul>
    <li>🍎 Eat calorie-rich, healthy foods</li>
    <li>💪 Do strength training</li>
    <li>🥛 Have frequent meals</li>
    <li>👨‍⚕️ Consult a doctor if needed</li>
</ul>
                         `
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            
            result.innerHTML = `<h3 class=" text-primary text-center mt-3 fw-bold"> YOUR BMI</h3>
                             <p class="text-light mt-3 border border-2 rounded shadow fs-4  text-center  p-3" style="margin-left: 44%;width:10vh;background-color: rgb(80, 185, 80);" >${bmi}</p>
                         <p style="margin-left: 46%;font-size: 16px;font-weight: 600;color: rgb(80, 185, 80);">Normal</p>
                         
                           <h6 class="mt-2">💡 Your Health Tips:</h6>
 <ul>
    <li>🥗 Eat a balanced diet</li>
    <li>🏃‍♂️ Stay active regularly</li>
    <li>💧 Drink plenty of water</li>
    <li>🛌 Maintain good sleep habits</li>
</ul>    `
        }

        else if (bmi >= 25 && bmi <= 29.9) {
           
            result.innerHTML = `<h3 class=" text-primary text-center mt-3 fw-bold"> YOUR BMI</h3>
                             <p class="text-light mt-3 border border-2 rounded shadow fs-4  text-center  p-3 " style="margin-left: 44%;width:10vh;background-color:orange;" >${bmi}</p>
                         <p style="margin-left: 43%;font-size: 16px;font-weight: 600;color: orange;">Overweight</p>
                                                    <h6 class="mt-2">💡 Your Health Tips:</h6>
<ul>
    <li>🥗 Eat a balanced, portion-controlled diet</li>
    <li>🏃‍♂️ Exercise regularly</li>
    <li>💧 Drink plenty of water</li>
    <li>🛌 Maintain healthy sleep habits</li>
</ul>
   
                         `
        }
        else {
           
            result.innerHTML = `<h3 class=" text-primary text-center mt-3 fw-bold"> YOUR BMI</h3>
                             <p class="text-light mt-3 border border-2 rounded shadow fs-4  text-center  p-3 " style="margin-left: 44%;width:10vh;background-color:red;" >${bmi}</p>
                         <p style="margin-left: 46%;font-size: 16px;font-weight: 600;color: red;">Obese</p>
                            <h6 class="mt-2">💡 Your Health Tips:</h6>
<ul>
    <li>🥗 Eat a healthy, low-calorie diet</li>
    <li>🏃‍♂️ Exercise regularly</li>
    <li>💧 Stay hydrated</li>
    <li>👨‍⚕️ Consult a doctor or nutritionist</li>
</ul>

                         
                         `
        }
        moveNeedle(bmi);
    }



}



function moveNeedle(bmi) {
    const bar = document.getElementById("bmiBar");
    const needle = document.getElementById("needle");
    const barWidth = bar.offsetWidth;

    const min = 10;  
    const max = 35; 

    
    const clampedBMI = Math.max(min, Math.min(bmi, max));

    
    const percent = (clampedBMI - min) / (max - min);
    const pos = percent * barWidth;

    needle.style.left = pos + "px";
}


function reset(){
    weight.value="";
    age.value="";
    height.value="";
 result.innerHTML="";
 
}