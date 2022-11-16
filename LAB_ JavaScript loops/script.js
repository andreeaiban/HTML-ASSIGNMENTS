function drawTriangle(triangleSize) {

   // Your solution goes here
   let string = "";
   for (let i = 1; i <= triangleSize; i++) {
     for (let j = 0; j < i; j++) {
       string += "*";
     }
     if(i<triangleSize)
     string += "\n";
   }
   console.log(string);
}