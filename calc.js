const dis = document.getElementById("dis"); 
function method(input)
{
  dis.value += input; 
}
function clearD()
{
  dis.value = ""; 
}
function calculate()
{
  try
  {
    dis.value = eval(dis.value);
  } 
  catch(error)
   {
     dis.value = 'error';
   }
}
