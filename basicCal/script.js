let x,y
function extract()
{
   x = document.getElementById("num1").value;
   y = document.getElementById("num2").value;
}

function add()
{
    extract()
    document.getElementById("sum-el").innerHTML ="SUM : "+( parseInt(x)+parseInt(y));
}
function sub()
{
    extract()
    document.getElementById("sum-el").innerHTML = "SUB : "+( parseInt(x)-parseInt(y));
}
function mul()
{
    extract()
    document.getElementById("sum-el").innerHTML = "MUL : "+( parseInt(x)*parseInt(y));
}
function div()
{
    extract()
    document.getElementById("sum-el").innerHTML = "DIV : "+( parseInt(x)/parseInt(y));
}