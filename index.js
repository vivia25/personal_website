var messageArray = ["\nHey! Welcome to my website.\nMy name is Vivian Yam."];
var textPosition = 0;
var speed = 100;

typeweriter = () => {
  document.querySelector ("#message").
  innterHTML=messageArray[0].substring(0,textPosition) + "<spam>\u25ae</span>";

  if (textPosition++ != messageArray[0].length) {
    setTimeout(typewriter, speed);
  }
  
  window.addEventListener("load", typewriter)
}