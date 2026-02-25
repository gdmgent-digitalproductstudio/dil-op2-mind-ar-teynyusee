document.addEventListener("DOMContentLoaded", () => {

  const paulTarget = document.querySelector("#paulTarget");

  const layer1 = document.querySelector("#layer1");
  const layer2 = document.querySelector("#layer2");
  const layer3 = document.querySelector("#layer3");

  const leftGlow = document.querySelector("#leftGlow");
  const rightGlow = document.querySelector("#rightGlow");

  const mist = document.querySelector("#mist");
  const quote = document.querySelector("#prophecyQuote");

  let state = 0;

  paulTarget.addEventListener("targetFound", () => {
    activateBase();
  });

  paulTarget.addEventListener("targetLost", () => {
    resetAll();
  });

  document.body.addEventListener("click", () => {
    state++;
    if (state > 3) state = 1;
    updateState();
  });

  function activateBase() {
    layer2.setAttribute("position", "0 0 0.12");
    layer3.setAttribute("position", "0 0 0.2");
  }

  function updateState() {

    if (state === 1) {
      leftGlow.setAttribute("material", "opacity", 0.4);
      rightGlow.setAttribute("material", "opacity", 0.4);
    }

    if (state === 2) {
      mist.setAttribute("material", "opacity", 0.15);
      leftGlow.setAttribute("material", "opacity", 0.6);
      rightGlow.setAttribute("material", "opacity", 0.6);
      quote.setAttribute("opacity", 1);
    }

    if (state === 3) {
      layer1.setAttribute("material", "color", "#c8a15a");
      mist.setAttribute("material", "opacity", 0.25);
      leftGlow.setAttribute("material", "opacity", 0.9);
      rightGlow.setAttribute("material", "opacity", 0.9);
    }

  }

  function resetAll() {
    state = 0;

    layer1.setAttribute("material", "color", "white");
    layer2.setAttribute("position", "0 0 0.1");
    layer3.setAttribute("position", "0 0 0.15");

    leftGlow.setAttribute("material", "opacity", 0);
    rightGlow.setAttribute("material", "opacity", 0);
    mist.setAttribute("material", "opacity", 0);
    quote.setAttribute("opacity", 0);
  }

});