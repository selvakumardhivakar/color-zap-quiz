const problems = [
  { desc: "I hand you a list of numbers and a magic target. Can you point out the two numbers that sum up to it?", input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
  { desc: "Are there any copycats in this array? Tell me if you spot a number sneaking in twice.", input: "nums = [1,2,3,1]", output: "true" },
  { desc: "If you scramble the letters of the first string, can you perfectly build the second one?", input: "s = 'anagram', t = 'nagaram'", output: "true" },
  { desc: "Scan this string and find the very first character that stands entirely alone with no duplicates.", input: "s = 'leetcode'", output: "0" },
  { desc: "I have two lists. What are the unique items they both share in common?", input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]" },
  
  { desc: "Read this sentence forwards. Now backwards. Is it exactly the same if you ignore spaces and symbols?", input: "s = 'A man, a plan, a canal: Panama'", output: "true" },
  { desc: "Take this array of characters and flip it completely upside down, in-place.", input: "s = ['h','e','l','l','o']", output: "['o','l','l','e','h']" },
  { desc: "Sweep through this array and push every single zero to the very end, but keep the other numbers in order.", input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" },
  { desc: "Take this sorted array, square every number, and give me a new sorted array.", input: "nums = [-4,-1,0,3,10]", output: "[0,1,9,16,100]" },
  { desc: "I hate a specific number. Scrub every instance of it from this array without making a new one.", input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]" },
  
  { desc: "Scan this array once and report back both the absolute biggest and smallest numbers you saw.", input: "nums = [3, 2, 1, 5, 6, 4]", output: "Max: 6, Min: 1" },
  { desc: "How many vowels (a, e, i, o, u) are hiding inside this string?", input: "s = 'hello world'", output: "3" },
  { desc: "Count to n! But wait, replace multiples of 3 with 'Fizz' and multiples of 5 with 'Buzz'.", input: "n = 3", output: "['1','2','Fizz']" },
  { desc: "Walk through this array and keep a running total of everything you've seen so far.", input: "nums = [1,2,3,4]", output: "[1,3,6,10]" },
  { desc: "Is this number only divisible by 1 and itself? Prove it.", input: "n = 11", output: "true" },
  
  { desc: "Someone stole exactly one number from this sequence of 0 to n. Which one is it?", input: "nums = [3,0,1]", output: "2" },
  { desc: "Keep the words in their original order, but spell each word completely backwards.", input: "s = 'Let\\'s take LeetCode contest'", output: "'s\\'teL ekat edoCteeL tsetnoc'" },
  { desc: "Who rules this array? Find the number that appears more than half the time.", input: "nums = [3,2,3]", output: "3" },
  { desc: "Take these two pre-sorted lists and zip them together into one giant sorted list.", input: "nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]", output: "[1,2,2,3,5,6]" },
  { desc: "Every number here brought a twin... except one. Who is the lonely number?", input: "nums = [4,1,2,1,2]", output: "4" }
];

const problemDisplay = document.getElementById("problem-display");
const conceptText = document.getElementById("concept-text");
const problemDesc = document.getElementById("problem-desc");
const problemInput = document.getElementById("problem-input");
const problemOutput = document.getElementById("problem-output");
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
    // Keep a consistent cool dark trivia card background
    problemDisplay.style.background = "#334155";
    problemDisplay.style.boxShadow = `inset 0 2px 10px rgba(0,0,0,0.2), 0 10px 30px rgba(0,0,0,0.3)`;

    // Update text
    problemDesc.textContent = selected.desc;
    problemInput.textContent = selected.input;
    problemOutput.textContent = selected.output;

    // Show new problem
    conceptText.classList.remove("hidden");
    problemDisplay.classList.add("active");
  }, 300);
});
