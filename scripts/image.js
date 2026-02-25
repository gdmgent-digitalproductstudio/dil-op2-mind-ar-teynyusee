document.addEventListener("DOMContentLoaded", () => {

  // PAUL
  const paulTarget = document.querySelector("#paulTarget");
  const leftGlow = document.querySelector("#leftGlow");
  const rightGlow = document.querySelector("#rightGlow");
  const leftLight = document.querySelector("#leftLight");
  const rightLight = document.querySelector("#rightLight");
  const mist = document.querySelector("#mist");

  // ENSEMBLE
  const ensembleTarget = document.querySelector("#ensembleTarget");
  const prophecyText = document.querySelector("#prophecyText");

  // LOGO
  const logoTarget = document.querySelector("#logoTarget");
  const fearText = document.querySelector("#fearText");

  // SANDWORM
  const wormTarget = document.querySelector("#wormTarget");
  const wormRing = document.querySelector("#wormRing");

  let powerMode = false;

  /* =============================
     PAUL TARGET
  ============================= */

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

  /* =============================
     ENSEMBLE TARGET
  ============================= */

  ensembleTarget.addEventListener("targetFound", () => {
    prophecyText.setAttribute("opacity", 1);
  });

  ensembleTarget.addEventListener("targetLost", () => {
    prophecyText.setAttribute("opacity", 0);
  });

  /* =============================
     LOGO TARGET
  ============================= */

  logoTarget.addEventListener("targetFound", () => {
    fearText.setAttribute("opacity", 1);
  });

  logoTarget.addEventListener("targetLost", () => {
    fearText.setAttribute("opacity", 0);
  });

  /* =============================
     SANDWORM TARGET
  ============================= */

  wormTarget.addEventListener("targetFound", () => {
    wormRing.setAttribute("opacity", 0.7);
    wormRing.setAttribute("animation", {
      property: "rotation",
      to: "90 360 0",
      loop: true,
      dur: 4000,
      easing: "linear"
    });
  });

  wormTarget.addEventListener("targetLost", () => {
    wormRing.setAttribute("opacity", 0);
  });

});