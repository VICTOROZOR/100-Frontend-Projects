const clock = document.querySelector(".clock");

clock.addEventListener("load", tick);

function tick(params) {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();

  const html = `
    <span>${hour} :</span>
    <span>${minute} :</span>
    <span>${seconds} </span>
    `;
  clock.innerHTML = html;
}
setInterval(tick, 1000);
