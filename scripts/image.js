document.addEventListener("DOMContentLoaded", () => {

  const paulTarget = document.querySelector("#paulTarget");

  const leftGlow = document.querySelector("#leftGlow");
  const rightGlow = document.querySelector("#rightGlow");
  const leftLight = document.querySelector("#leftLight");
  const rightLight = document.querySelector("#rightLight");
  const mist = document.querySelector("#mist");

  const prophecyText = document.querySelector("#prophecyText");
  const fearText = document.querySelector("#fearText");
  const wormRing = document.querySelector("#wormRing");

  let powerMode = false;

  // =============================
  // PAUL TARGET EVENTS
  // =============================

  paulTarget.addEventListener("targetFound", () => {
    activatePower();
  });

  paulTarget.addEventListener("targetLost", () => {
    deactivatePower();
  });

  document.body.addEventListener("click", () => {
    powerMode = !powerMode;
    powerMode ? activatePower() : deactivatePower();
  });

  function activatePower() {
    leftGlow.setAttribute("material", "opacity", 0.5);
    rightGlow.setAttribute("material", "opacity", 0.5);
    leftLight.setAttribute("intensity", 1);
    rightLight.setAttribute("intensity", 1);
    mist.setAttribute("material", "opacity", 0.15);
  }

  function deactivatePower() {
    leftGlow.setAttribute("material", "opacity", 0);
    rightGlow.setAttribute("material", "opacity", 0);
    leftLight.setAttribute("intensity", 0);
    rightLight.setAttribute("intensity", 0);
    mist.setAttribute("material", "opacity", 0);
  }

  // =============================
  // ENSEMBLE TARGET
  // =============================

  document.querySelectorAll('[mindar-image-target="targetIndex: 1"]')[0]
    .addEventListener("targetFound", () => {
      prophecyText.setAttribute("opacity", 1);
    });

  // =============================
  // LOGO TARGET
  // =============================

  document.querySelectorAll('[mindar-image-target="targetIndex: 2"]')[0]
    .addEventListener("targetFound", () => {
      fearText.setAttribute("opacity", 1);
    });

  // =============================
  // SANDWORM TARGET
  // =============================

  document.querySelectorAll('[mindar-image-target="targetIndex: 3"]')[0]
    .addEventListener("targetFound", () => {
      wormRing.setAttribute("opacity", 0.7);
      wormRing.setAttribute("animation", {
        property: "rotation",
        to: "90 360 0",
        loop: true,
        dur: 4000,
        easing: "linear"
      });
    });

});