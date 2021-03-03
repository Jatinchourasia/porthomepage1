document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".t").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

const logo = document.querySelectorAll("#logo path");

let i = 0;
logo.forEach(() => {
  console.log(logo[i].getTotalLength());
  i++;
});
