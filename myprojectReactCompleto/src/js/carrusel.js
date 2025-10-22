const track = document.getElementById('track');
const velocidad = 1; 
track.innerHTML += track.innerHTML;

let desplazamiento = 0;

function mover() {
  desplazamiento -= velocidad;

  const primeraImg = track.children[0];
  if (Math.abs(desplazamiento) >= primeraImg.offsetWidth) {
    track.appendChild(primeraImg);
    desplazamiento += primeraImg.offsetWidth;
  }

  track.style.transform = `translateX(${desplazamiento}px)`;
  requestAnimationFrame(mover);
}

mover();
