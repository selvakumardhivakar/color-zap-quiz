const concepts = [
  { name: "Array / List/ String", color: "#3b82f6" }, // Blue
  { name: "HashMap / Dictionary", color: "#ef4444" }, // Red
  { name: "HashSet / Set", color: "#8b5cf6" }, // Purple
  { name: "For", color: "#10b981" }, // Green
  { name: "While", color: "#f59e0b" }, // Orange
  { name: "i variable", color: "#06b6d4" }, // Cyan
  { name: "j variable", color: "#ec4899" }, // Pink
  { name: "If", color: "#84cc16" }, // Lime
  { name: "Else", color: "#14b8a6" }, // Teal
  { name: "Return / Print", color: "#f43f5e" }, // Rose
];

const colorDisplay = document.getElementById("color-display");
const conceptText = document.getElementById("concept-text");
const revealBtn = document.getElementById("reveal-btn");
const refreshCountDisplay = document.getElementById("refresh-count");

// Track refreshes in localStorage
let refreshCount = localStorage.getItem("refreshCount");
if (!refreshCount) {
  refreshCount = 0;
} else {
  refreshCount = parseInt(refreshCount);
}
refreshCount++;
localStorage.setItem("refreshCount", refreshCount);
if (refreshCountDisplay) {
  refreshCountDisplay.textContent = refreshCount;
}

revealBtn.addEventListener("click", () => {
  // Prevent multiple clicks by disabling the button
  revealBtn.disabled = true;

  // Pick a random concept
  const randomIndex = Math.floor(Math.random() * concepts.length);
  const selected = concepts[randomIndex];

  // Reset animation
  conceptText.classList.add("hidden");
  colorDisplay.classList.remove("active");

  // Add a slight delay for transition effect
  setTimeout(() => {
    // Change color
    colorDisplay.style.background = selected.color;
    colorDisplay.style.boxShadow = `0 0 40px ${selected.color}80, inset 0 2px 10px rgba(0,0,0,0.2)`;

    // Update text
    conceptText.textContent = selected.name;

    // Show new concept
    conceptText.classList.remove("hidden");
    colorDisplay.classList.add("active");
  }, 300);
});
