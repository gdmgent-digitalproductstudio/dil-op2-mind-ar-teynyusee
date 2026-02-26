document.addEventListener("DOMContentLoaded", () => {

  const video = document.querySelector("#portalVideo")
  const scene = document.querySelector("a-scene")

  if(!video || !scene) return

  const targets = document.querySelectorAll("[mindar-image-target]")

  targets.forEach(target => {

    target.addEventListener("targetFound", () => {
      video.currentTime = 0
      video.play().catch(() => {})
    })

    target.addEventListener("targetLost", () => {
      video.pause()
    })

  })

})