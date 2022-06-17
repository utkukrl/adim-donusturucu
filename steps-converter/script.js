



document.querySelector(".calculate").addEventListener("click", function () {
  
    
    document.getElementById("km").style.display = "none";
    document.getElementById("calories").style.display = "none";
  
    
    document.querySelector(".loader").style.display = "block";
    setTimeout(STEPS_CONV, 2000);
  });
  
  document.querySelector(".clear").addEventListener("click", Clear)
  
  
  
  
  
  function STEPS_CONV() {
    
    const steps = document.getElementById('steps').value;
  
    
    let index = (steps * 0.0008045).toFixed(2);
    
    let index1 = (index * 55).toFixed(2);
    
    if (steps  != 0) {
      const km = document.getElementById("km");
      const calories = document.getElementById("calories");
    
      
      km.innerHTML = "Yürünen Kilometre 🏃‍♀️ = " + index + " Km";
      calories.innerHTML = "Yakılan Kalori 🔥 = " + index1 + " Kalori";
    
      document.getElementById("km").style.display = "block";
      document.getElementById("calories").style.display = "block";
      document.querySelector(".loader").style.display = "none";
      
  
    } else {
      
      error()
      function error() {
      document.getElementById("km").style.display = "block";
      document.getElementById("calories").style.display = "block";
      document.querySelector(".loader").style.display = "none";
      document.getElementById("km").innerHTML = "<span style='color:black;background-color:pink; border-radius:10px; padding: 3px;';>⚠️ Error: Önce adım sayısını girmelisiniz ! "
      
        setTimeout(() => {
          document.getElementById("km").innerHTML = "";
          document.getElementById("calories").innerHTML = "";
        }, 5000);
      }
    }
  }
  
  
  function Clear() {
    document.getElementById('steps').value = "";
    document.getElementById('km').innerHTML = "";
    document.getElementById('calories').innerHTML = "";
  }