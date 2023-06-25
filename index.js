const element = document.querySelector("body");
element.addEventListener("mousemove", (event) => {
  const posx = event.offsetX;
  const posy = event.offsetY;
  const el = document.createElement("span");
  element.appendChild(el);
  el.style.left = posx + "px";
  el.style.top = posy + "px";

  const rand = Math.random() * 100;

  el.style.width = rand + "px";
  el.style.height = rand + "px";
  setTimeout(() => {
    el.remove();
  }, 2000);
});
