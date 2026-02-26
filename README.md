# AR Image Tracking — Spider-Man Multiverse Concept

## Chosen topic

For this project, I chose the **Spider-Man Multiverse** theme.
The goal of the AR experience is to reveal different Spider-Man scenes when the user scans specific movie-related image targets.

The experience focuses on:

* cinematic portal effects
* multiverse Spider-Man variants
* playful meme references
* interactive poster-style AR visuals

---

## Target overview

### Target 0 — Spider-Man No Way Home portal poster

**Description:**
A movie visual showing Spider-Man emerging from a Doctor Strange portal.

**AR behavior:**

* A portal video effect appears
* A floating Spider-Man cutout emerges in front of the portal

**How it was obtained:**
Screenshot of promotional movie artwork → cropped → exported as JPG → compiled as a MindAR target.

---

### Target 1 — Spider-Man pointing meme

**Description:**
The well-known meme featuring multiple Spider-Men pointing at each other.

**AR behavior:**

* Meme image appears with a subtle rotation animation

**How it was obtained:**
Internet screenshot → cropped → slight contrast adjustment for better tracking → compiled as a target.

---

### Target 2 — Spider-Man swing pose in Ghent

**Description:**
Illustration of Spider-Man in a jumping / swinging pose.

**AR behavior:**

* Floating Spider-Man animation above the marker

**How it was obtained:**
PNG image downloaded → background removed → separate JPG marker created for tracking.

---

### Target 3 — Spider-Man logo

**Description:**
Spider-Man No Way Home logo.

**AR behavior:**

* Logo
* Scale pop-in animation effect

**How it was obtained:**
Official logo image → contrast enhanced → exported as JPG marker.

---

## Target preparation process

All targets were prepared by:

1. Cropping the images to keep **high detail and contrast**
2. Exporting them as JPG files
3. Compiling them using the **MindAR Image Target Compiler**
4. Combining them into a single `targets.mind` file

---

## What needs to be printed or displayed during evaluation

For evaluation, the following visuals must be available:

* Spider-Man portal poster (Target 0)
* Spider-Man pointing meme (Target 1)
* Spider-Man swing pose marker (Target 2)
* Spider-Man logo (Target 3)

These can be shown either:

* printed on paper
* displayed on a laptop
* or shown on a smartphone screen

As long as the targets are clearly visible to the camera.

---

## Note

Targets with strong contrast and many unique visual details track more reliably.
Small adjustments such as cropping and contrast enhancement were applied to improve tracking stability.
