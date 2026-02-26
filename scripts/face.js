document.addEventListener("DOMContentLoaded", () => {

  const masks = ["#mask1", "#mask3"];
  let currentMask = 0;

  const faceMask = document.querySelector("#faceMask");

  if (!faceMask) return;

  // Wissel masker bij klik / tap
  document.body.addEventListener("click", () => {
    currentMask = (currentMask + 1) % masks.length;
    faceMask.setAttribute("src", masks[currentMask]);
  });

});