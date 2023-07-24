function myF()
         {
           let num1, num2, sum,x;
           num1 = parseInt(document.getElementById("num1").value);
           num2 = parseInt(document.getElementById("num2").value);
             x = parseInt(document.getElementById("num2").value);
             if(x="+"){
           sum = num1 + num2;}
//                if(x==="-"){
//           sum = num1 - num2;} 
//             if(x="*"){
//           sum = num1 * num2;}
////                if(x="/"){
////           sum = num1/num2;}
           document.getElementById("num3").value = sum;
         }