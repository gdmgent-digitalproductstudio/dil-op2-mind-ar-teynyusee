document.addEventListener("DOMContentLoaded", () => {

  const ring = document.querySelector("#faceRing");
  let active = false;

  document.body.addEventListener("click", () => {

    active = !active;

    if (active) {
      ring.setAttribute("color", "#ffcc66");
    } else {
      ring.setAttribute("color", "#00ccff");
    }

  });

});