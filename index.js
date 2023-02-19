var i = 0;
var txt = 'Hello, My name is Vivian Yam.';
var speed = 50;

function typeWriter() 
{
  if (i < txt.length) {
    document.getElementById("greeting").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}