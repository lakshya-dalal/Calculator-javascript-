console.log(a);
var a=document.getElementById("final");
var b=document.getElementById("out");
var button =document.getElementsByTagName("span");
var operand="";
var operand2="";
var operator="";

function last()
{
  var txt=this.innerText;
  if(txt=="+"){operator=txt;b.innerText="";}
  if(txt=="-"){operator=txt;b.innerText="";}
  if(txt=="*"){operator=txt;b.innerText="";}
  if(txt=="/"){operator=txt;b.innerText="";}

  if(txt=="+/-"){if(operator==""){operand=-operand;b.innerText=operand;}else{operand2=-operand2;b.innerText=operand2;}}
  if(txt=="%"){if(operator==""){operand=operand/100;b.innerText=operand;}else{operand2=operand2/100;b.innerText=operand2;}}

  if(txt>=0&&txt<=9){if(operator==""){b.innerText+=txt;operand=b.innerText;}
                      else{b.innerText+=txt;operand2=b.innerText;}
}
  if(txt=="AC"){operator="";b.innerText="";operand="";}
  if(txt=="="){b.innerText=eval(operand+" "+operator+" "+operand2);operator="";operand=b.innerText;operant2="";}

  b.style.width="182px";b.style.alignSelf="center";
  b.style.border="2px solid rgb(233, 235, 156)";
  b.style.borderRadius= "10%";
  b.style.height="40px";
  b.style.margin="auto";
  b.style.paddingTop="5px";
  b.style.display="inline-block";
  b.style.marginBottom="4px";
 
}

for(var i =0;i<button.length;i++)
{button[i].addEventListener('click',last)};