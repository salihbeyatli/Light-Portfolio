const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "imgabout":
      return "fa-solid fa-address-card fa-inverse";  //my photo
    case "headtrack":
      return "fa-solid fa-paragraph fa-inverse";  //headline
    case "forminput":
      return "fa-solid fa-pen fa-inverse"; //contact form
    case "contactbutton":
      return "fa-solid fa-paper-plane fa-inverse"; //
    default:
      return "fa-solid fa-plus fa-inverse"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".mouse_trailer"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}