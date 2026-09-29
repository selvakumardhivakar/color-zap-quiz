const problems = [
  { topic: "HashMap", title: "Two Sum", desc: "Find two numbers in an array that add up to a target sum.", color: "#ef4444" },
  { topic: "HashMap", title: "Contains Duplicate", desc: "Check if an array contains any duplicate elements.", color: "#ef4444" },
  { topic: "HashMap", title: "Valid Anagram", desc: "Determine if two strings are anagrams of each other.", color: "#ef4444" },
  { topic: "HashMap", title: "First Unique Character", desc: "Find the first non-repeating character in a string.", color: "#ef4444" },
  { topic: "HashMap", title: "Intersection of Two Arrays", desc: "Find the common elements between two arrays.", color: "#ef4444" },
  
  { topic: "Two Pointers", title: "Valid Palindrome", desc: "Check if a string reads the same forwards and backwards.", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Reverse String", desc: "Reverse a string in-place.", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Move Zeroes", desc: "Move all 0s to the end of an array while maintaining order.", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Squares of a Sorted Array", desc: "Return the squares of a sorted array, sorted in non-decreasing order.", color: "#3b82f6" },
  { topic: "Two Pointers", title: "Remove Element", desc: "Remove all instances of a value in-place from an array.", color: "#3b82f6" },
  
  { topic: "Basics / Array", title: "Find Maximum and Minimum", desc: "Find both the largest and smallest numbers in an array.", color: "#10b981" },
  { topic: "Basics / String", title: "Count Vowels", desc: "Count the number of vowels in a given string.", color: "#10b981" },
  { topic: "Basics / Math", title: "FizzBuzz", desc: "Print numbers 1 to n, replacing multiples of 3 and 5 with Fizz and Buzz.", color: "#10b981" },
  { topic: "Basics / Array", title: "Running Sum", desc: "Calculate the running sum of a 1D array.", color: "#10b981" },
  { topic: "Basics / Math", title: "Check Prime", desc: "Determine whether a given number is a prime number.", color: "#10b981" },
  
  { topic: "Basics / Array", title: "Missing Number", desc: "Find the missing number in an array containing n distinct numbers taken from 0 to n.", color: "#f59e0b" },
  { topic: "Basics / String", title: "Reverse Words", desc: "Reverse the order of characters in each word within a sentence.", color: "#f59e0b" },
  { topic: "Basics / Array", title: "Majority Element", desc: "Find the element that appears more than ⌊n / 2⌋ times.", color: "#f59e0b" },
  { topic: "Basics / Two Pointers", title: "Merge Sorted Array", desc: "Merge two sorted arrays into one sorted array.", color: "#f59e0b" },
  { topic: "Basics / Array", title: "Single Number", desc: "Find the single element in an array where every other element appears twice.", color: "#f59e0b" }
];

const problemDisplay = document.getElementById("problem-display");
const conceptText = document.getElementById("concept-text");
const topicBadge = conceptText.querySelector(".topic-badge");
const problemTitle = conceptText.querySelector(".problem-title");
const problemDesc = conceptText.querySelector(".problem-desc");
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
    problemDesc.textContent = selected.desc;

    // Show new problem
    conceptText.classList.remove("hidden");
    problemDisplay.classList.add("active");
  }, 300);
});
