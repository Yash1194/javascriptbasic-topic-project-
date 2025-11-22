



function handleKey(letter) {
  letter = letter.toUpperCase();

  // 1️⃣ Play Sound
  let audio = new Audio(`./${letter}.mp3`);
  audio.play().catch(() => {});

  // 2️⃣ Highlight Matching Virtual Key
  let keyEl = document.querySelector(`.key[data-sound="${letter}"]`);
  if (!keyEl) return;

  keyEl.classList.add("active");

  // 3️⃣ Animation Remove
  setTimeout(() => {
    keyEl.classList.remove("active");
  }, 150);
}

// 4️⃣ Keyboard Press Event (Global)
document.addEventListener("keydown", (e) => {
  handleKey(e.key);
});

// 5️⃣ Mouse Click Event on Virtual Keys
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", () => {
    handleKey(key.getAttribute("data-sound"));
  });
});
