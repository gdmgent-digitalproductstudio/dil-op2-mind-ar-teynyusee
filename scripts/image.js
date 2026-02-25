document.addEventListener("DOMContentLoaded", () => {

  const target = document.querySelector("#paulTarget");
  const paul = document.querySelector("#paulLayer");
  const mist = document.querySelector("#mist");
  const quote = document.querySelector("#prophecyQuote");

  let state = 0;
  let float = 0;

  /* TARGET FOUND */
  target.addEventListener("targetFound", () => {
    subtleFloat();
  });

  /* TARGET LOST */
  target.addEventListener("targetLost", () => {
    reset();
  });

  /* TAP INTERACTION */
  document.body.addEventListener("click", () => {
    state++;
    if (state > 2) state = 1;
    updateState();
  });

  /* FLOATING PARALLAX */
  function subtleFloat() {
    setInterval(() => {
      float += 0.02;
      const y = Math.sin(float) * 0.03;
      paul.setAttribute("position", `0 ${y} 0.15`);
    }, 30);
  }

  /* STATE SYSTEM */
  function updateState() {

    if (state === 1) {
      mist.setAttribute("material", "opacity", 0.12);
    }

    if (state === 2) {
      mist.setAttribute("material", "opacity", 0.22);
      quote.setAttribute("opacity", 1);
      paul.setAttribute("animation", {
        property: "scale",
        to: "1.05 1.05 1.05",
        dur: 800,
        dir: "alternate",
        loop: true
      });
    }
  }

  function reset() {
    state = 0;
    mist.setAttribute("material", "opacity", 0);
    quote.setAttribute("opacity", 0);
    paul.removeAttribute("animation");
    paul.setAttribute("scale", "1 1 1");
  }

});