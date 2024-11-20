 let display=document.getElementById("display");
 let Key=document.getElementById("Key");
 let container=document.getElementsByClassName("container");
 let opebtn=document.getElementsByClassName("open-btn");
 function appendToDisplay(input)
 {
    display.value+=input;

 }
 function Clear()
 {
    display.value="";
 }
 function calculate()
 {
    try{
        display.value=eval(display.value);
    }
    catch(error)
    {
        display.value="Error";
    }
   
 }