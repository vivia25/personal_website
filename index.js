//parallax scrolling animation
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

// fade in animation on the about me section


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  trasitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTiming: 'ease',
}

let revealContainers = document.querySelectorAll('.reveal');

const revealItem = () => {
  for (let i = 0; i < revealContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let revealContainerTop = revealContainers[i].getBoundingClientRect().top;
    if (revealContainerTop < windowHeight - animation.revealDistance) {
  revealContainers[i].classList.add('active'); 
} else {
  revealContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealItem);
