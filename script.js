let num1, num2, sum;
num1 = parseInt(document.getElementById("num1"));
num2 = parseInt(document.getElementById("num2"));
function myF1()
{
    let num1, num2, sum;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
   sum = num1 + num2;
document.getElementById("num3").value = sum;
}
function myF2()
{
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
   sum = num1 - num2;
document.getElementById("num3").value = sum;
}
function myF3()
{
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
   sum = num1 * num2;
document.getElementById("num3").value = sum;
}
function myF4()
{
    var num1, num2, sum;
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
   sum = num1 / num2;
document.getElementById("num3").value = sum;
}