const problems = [
  { topic: "HashMap", title: "Two Sum", color: "#ef4444" },
  { topic: "HashMap", title: "Contains Duplicate", color: "#ef4444" },
  { topic: "HashMap", title: "Valid Anagram", color: "#ef4444" },
  { topic: "HashMap", title: "First Unique Character", color: "#ef4444" },
  { topic: "HashMap", title: "Intersection of Two Arrays", color: "#ef4444" },
  
  { topic: "Two Pointers", title: "Valid Palindrome", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Reverse String", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Move Zeroes", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Squares of a Sorted Array", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Remove Element", color: "#3b82f6" },
  
  { topic: "Basics / Array", title: "Find Maximum and Minimum", color: "#10b981" },
  { topic: "Basics / String", title: "Count Vowels and Consonants", color: "#10b981" },
  { topic: "Basics / Math", title: "FizzBuzz", color: "#10b981" },
  { topic: "Basics / Array", title: "Running Sum of 1d Array", color: "#10b981" },
  { topic: "Basics / Math", title: "Check if a Number is Prime", color: "#10b981" },
  
  { topic: "Basics / Array", title: "Find the Missing Number", color: "#f59e0b" },
  { topic: "Basics / String", title: "Reverse Words in a String III", color: "#f59e0b" },
  { topic: "Basics / Array", title: "Majority Element", color: "#f59e0b" },
  { topic: "Basics / Two Pointers", title: "Merge Sorted Array", color: "#f59e0b" },
  { topic: "Basics / Array", title: "Single Number", color: "#f59e0b" }
];

const problemDisplay = document.getElementById("problem-display");
const conceptText = document.getElementById("concept-text");
const topicBadge = conceptText.querySelector(".topic-badge");
const problemTitle = conceptText.querySelector(".problem-title");
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

  // Pick a random problem
  const randomIndex = Math.floor(Math.random() * problems.length);
  const selected = problems[randomIndex];

  // Reset animation
  conceptText.classList.add("hidden");
  problemDisplay.classList.remove("active");

  // Add a slight delay for transition effect
  setTimeout(() => {
    // Change color
    problemDisplay.style.background = selected.color;
    problemDisplay.style.boxShadow = `0 0 40px ${selected.color}80, inset 0 2px 10px rgba(0,0,0,0.2)`;

    // Update text
    topicBadge.textContent = selected.topic;
    problemTitle.textContent = selected.title;

    // Show new problem
    conceptText.classList.remove("hidden");
    problemDisplay.classList.add("active");
  }, 300);
});
