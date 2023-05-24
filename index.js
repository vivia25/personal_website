let airplane = document.getElementById("airplane");
let bird = document.getElementById("bird");
let helicopter = document.getElementById("helicopter");

let rates = {
  airplane: 0.7,
  bird: 0.7,
  helicopter: 0.7
};

const handleScroll = () => {
  let scrollDistance = window.scrollY;

  airplane.style.left = scrollDistance * rates.airplane + 'px';
  bird.style.left = scrollDistance * rates.bird + 'px';
  helicopter.style.left= -scrollDistance * rates.helicopter + 'px';

  
}

window.addEventListener('scroll', handleScroll);
