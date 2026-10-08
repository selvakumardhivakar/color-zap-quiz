const concepts = [
  {
    id: "array",
    name: "Array / List / String",
    color: "#3b82f6",
    category: "Data Structure",
    complexity: "Access O(1) | Search O(n)",
    desc: "Contiguous memory blocks storing items sequentially. Ideal for direct indexed lookups.",
    code: `const arr = [10, 20, 30];\nconsole.log(arr[0]); // O(1) Access`,
  },
  {
    id: "hashmap",
    name: "HashMap / Dictionary",
    color: "#ef4444",
    category: "Data Structure",
    complexity: "Average Lookup O(1)",
    desc: "Key-value pair store using hash functions for ultra-fast data retrieval.",
    code: `const map = new Map();\nmap.set("key", "value");\nconsole.log(map.get("key"));`,
  },
  {
    id: "hashset",
    name: "HashSet / Set",
    color: "#8b5cf6",
    category: "Data Structure",
    complexity: "Lookup O(1)",
    desc: "Collection of unique values preventing duplicates. Efficient membership tests.",
    code: `const set = new Set([1, 2, 3]);\nset.add(4);\nconsole.log(set.has(2));`,
  },
  {
    id: "stack",
    name: "Stack (LIFO)",
    color: "#d97706",
    category: "Data Structure",
    complexity: "Push/Pop O(1)",
    desc: "Last-In-First-Out linear structure. Crucial for function call stacks and undo history.",
    code: `const stack = [];\nstack.push(1); // Push\nconst top = stack.pop(); // Pop`,
  },
  {
    id: "queue",
    name: "Queue (FIFO)",
    color: "#0284c7",
    category: "Data Structure",
    complexity: "Enqueue/Dequeue O(1)",
    desc: "First-In-First-Out linear structure used in BFS traversals and task scheduling.",
    code: `const queue = [1, 2, 3];\nqueue.push(4); // Enqueue\nconst front = queue.shift(); // Dequeue`,
  },
  {
    id: "for",
    name: "For Loop",
    color: "#10b981",
    category: "Control Flow",
    complexity: "O(n) Iteration",
    desc: "Definite iteration loop with explicit initialization, condition, and increment step.",
    code: `for (let i = 0; i < n; i++) {\n  // Execute block n times\n}`,
  },
  {
    id: "while",
    name: "While Loop",
    color: "#f59e0b",
    category: "Control Flow",
    complexity: "Conditional Iteration",
    desc: "Indefinite iteration executing as long as a specified boolean predicate stays true.",
    code: `let p = head;\nwhile (p !== null) {\n  p = p.next;\n}`,
  },
  {
    id: "i_var",
    name: "i variable (Outer Index)",
    color: "#06b6d4",
    category: "Pointer / State",
    complexity: "State Tracking",
    desc: "Primary loop counter or left/slow pointer in 2-pointer & array traversal techniques.",
    code: `let left = 0, right = arr.length - 1;\nwhile (left < right) { left++; }`,
  },
  {
    id: "j_var",
    name: "j variable (Inner Index)",
    color: "#ec4899",
    category: "Pointer / State",
    complexity: "Nested Traversal",
    desc: "Secondary loop pointer or right/fast pointer in matrix scans and window sliding.",
    code: `for (let i = 0; i < n; i++) {\n  for (let j = i + 1; j < n; j++) { ... }\n}`,
  },
  {
    id: "if",
    name: "If Statement",
    color: "#84cc16",
    category: "Control Flow",
    complexity: "O(1) Branching",
    desc: "Conditional branching construct executing code paths when conditions evaluate to true.",
    code: `if (arr[mid] === target) {\n  return mid;\n}`,
  },
  {
    id: "else",
    name: "Else Statement",
    color: "#14b8a6",
    category: "Control Flow",
    complexity: "O(1) Fallback",
    desc: "Alternative execution path triggered when preceding 'if' conditions fail.",
    code: `if (x > 0) { ... } else {\n  // Fallback branch\n}`,
  },
  {
    id: "return",
    name: "Return / Print",
    color: "#f43f5e",
    category: "Output / Exit",
    complexity: "Function Exit",
    desc: "Terminates function execution and passes back a result value or logs telemetry.",
    code: `return result;\n// or console.log(ans);`,
  },
];

// DOM Elements
const ambientGlow = document.getElementById("ambient-glow");
const colorDisplay = document.getElementById("color-display");
const conceptText = document.getElementById("concept-text");
const revealBtn = document.getElementById("reveal-btn");
const conceptDetails = document.getElementById("concept-details");
const conceptCategory = document.getElementById("concept-category");
const conceptComplexity = document.getElementById("concept-complexity");
const conceptDesc = document.getElementById("concept-desc");
const conceptCode = document.getElementById("concept-code");

// Stats Elements
const refreshCountDisplay = document.getElementById("refresh-count");
const revealCountDisplay = document.getElementById("reveal-count");
const soundToggleBtn = document.getElementById("sound-toggle");
const soundIcon = document.getElementById("sound-icon");

// Web Audio API Synthesizer
let soundEnabled = true;
let audioCtx = null;

function playRevealSound() {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    osc.type = "sine";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(640, now + 0.15);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {
    // Audio context unsupported or blocked
  }
}

// Sound toggle listener
if (soundToggleBtn) {
  soundToggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
    soundToggleBtn.classList.toggle("muted", !soundEnabled);
  });
}

// Refreshes & Reveal Count tracking
let refreshCount = parseInt(localStorage.getItem("refreshCount") || "0") + 1;
localStorage.setItem("refreshCount", refreshCount);
if (refreshCountDisplay) refreshCountDisplay.textContent = refreshCount;

let revealCount = parseInt(localStorage.getItem("revealCount") || "0");
if (revealCountDisplay) revealCountDisplay.textContent = revealCount;

let lastIndex = -1;

function revealConcept() {
  revealBtn.disabled = true;
  playRevealSound();

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * concepts.length);
  } while (randomIndex === lastIndex && concepts.length > 1);
  lastIndex = randomIndex;

  const selected = concepts[randomIndex];

  // Update total reveal count
  revealCount++;
  localStorage.setItem("revealCount", revealCount);
  if (revealCountDisplay) revealCountDisplay.textContent = revealCount;

  // Reset visual animations
  conceptText.classList.add("hidden");
  colorDisplay.classList.remove("active");
  conceptDetails.classList.add("hidden");

  setTimeout(() => {
    // Dynamically update background ambient glow and color sphere
    ambientGlow.style.background = `radial-gradient(circle at 50% 30%, ${selected.color}45 0%, transparent 70%)`;
    colorDisplay.style.background = `radial-gradient(circle at 35% 35%, #ffffff 0%, ${selected.color} 75%)`;
    colorDisplay.style.boxShadow = `0 0 50px ${selected.color}80, inset 0 2px 10px rgba(255,255,255,0.4)`;

    // Update concept content
    conceptText.textContent = selected.name;
    conceptCategory.textContent = selected.category;
    conceptComplexity.textContent = selected.complexity;
    conceptDesc.textContent = selected.desc;
    conceptCode.textContent = selected.code;

    // Show elements with smooth entry animation
    conceptText.classList.remove("hidden");
    colorDisplay.classList.add("active");
    conceptDetails.classList.remove("hidden");

    // RE-ENABLE BUTTON (Fixes previous bug)
    revealBtn.disabled = false;
  }, 300);
}

revealBtn.addEventListener("click", revealConcept);
