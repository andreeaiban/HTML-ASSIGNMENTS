window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   
   let Button = document.getElementById("convertButton");
   let cInput = document.getElementById("cInput");
   let fInput = document.getElementById("fInput"); 
   let image = document.getElementById("weatherImage");
   let errorMessage = document.getElementById("errorMessage");

   Button.addEventListener("click", buttonClick);
   cInput.addEventListener("input", clearInputC);
   fInput.addEventListener("input", clearInputF);

  function buttonClick() {

      cValue = parseFloat(cInput.value);
      fValue = parseFloat(fInput.value);

      if(fInput.value != ""){
         if(isNaN(fInput.value)){
            errorMessage.innerHTML = fInput.value + " is not a number";
            return;
         } else {
            errorMessage.innerHTML = "";
            cInput.value = convertFtoC(fValue);
            if(fInput.value<32){
               image.src="cold.png";
            }else if(fInput.value>=32 && fInput.value<=50){
               image.src="cool.png";
            } else {
               image.src="warm.png";
            }
         }
      }else if(cInput.value != ""){
         if(isNaN(cInput.value)){
            errorMessage.innerHTML = cInput.value + " is not a number";
            return;
         } else{
            errorMessage.innerHTML = "";
            fInput.value = convertCtoF(cValue);
            if(fInput.value<32){
               image.src="cold.png";
            }else if(fInput.value>=32 && fInput.value<=50){
               image.src="cool.png";
            } else {
               image.src="warm.png";
            }
         }
      
      }
   }  

   function clearInputC(){
      fInput.value = "";
   }

   function clearInputF(){
      cInput.value = "";
   }


}

function convertCtoF(degreesCelsius) {
   let degreesFahrenheit = (degreesCelsius * 9/5) + 32;
   return degreesFahrenheit;
}

function convertFtoC(degreesFahrenheit) {
   let degreesCelsius = (degreesFahrenheit - 32) * 5/9;
   return degreesCelsius;
}