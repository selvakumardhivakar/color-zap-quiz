const problems = [
  // --- INFOSYS SYSTEM ENGINEER (SE) INTERVIEW EASY PROBLEMS ---
  { desc: "Calculate the Nth Fibonacci number starting with 0 and 1.", input: "n = 6", output: "8 (Sequence: 0, 1, 1, 2, 3, 5, 8)", easy: true },
  { desc: "Calculate the factorial of a non-negative integer N.", input: "n = 5", output: "120 (5 × 4 × 3 × 2 × 1)", easy: true },
  { desc: "Check if a number is an Armstrong number (sum of digits raised to the power of number of digits equals the number).", input: "n = 153", output: "true (1³ + 5³ + 3³ = 153)", easy: true },
  { desc: "Reverse the digits of an integer without converting it to a string.", input: "n = -123", output: "-321", easy: true },
  { desc: "Find the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two numbers.", input: "a = 12, b = 18", output: "GCD: 6, LCM: 36", easy: true },
  { desc: "Find the second largest unique element in an unsorted array without sorting.", input: "nums = [12, 35, 1, 10, 34, 1]", output: "34", easy: true },
  { desc: "Swap two numbers in-place without using any third temporary variable.", input: "a = 5, b = 10", output: "a = 10, b = 5", easy: true },
  { desc: "Check if one string is a valid rotation of another string.", input: "s1 = 'waterbottle', s2 = 'erbottlewat'", output: "true", easy: true },
  { desc: "Sum up all individual digits of a given positive integer.", input: "n = 9875", output: "29 (9 + 8 + 7 + 5)", easy: true },
  { desc: "Count total number of even and odd integers in a given array.", input: "nums = [1, 2, 3, 4, 5, 6]", output: "Even: 3, Odd: 3", easy: true },
  { desc: "Check if a given year is a Leap Year according to Gregorian rules.", input: "year = 2024", output: "true (divisible by 4 and not 100, or by 400)", easy: true },
  { desc: "Determine if an array of numbers is sorted in non-decreasing order.", input: "nums = [1, 2, 4, 7, 10]", output: "true", easy: true },
  { desc: "Remove all whitespace and special characters from a sentence.", input: "s = 'Hello, World! 123'", output: "'HelloWorld123'", easy: true },
  { desc: "Find the single missing number in an array containing numbers from 1 to N.", input: "n = 5, nums = [1, 2, 4, 5]", output: "3", easy: true },
  { desc: "Check if a given string contains only numeric digits.", input: "s = '40592'", output: "true", easy: true },
  { desc: "Convert a Roman Numeral string to its corresponding integer value.", input: "s = 'MCMXCIV'", output: "1994", easy: true },
  { desc: "Determine if an integer is a power of two.", input: "n = 16", output: "true (2⁴ = 16)", easy: true },

  // --- CASUAL BASICS & TRIVIA ---
  { desc: "Take this array of characters and flip it completely upside down, in-place.", input: "s = ['h','e','l','l','o']", output: "['o','l','l','e','h']", easy: true },
  { desc: "I hate a specific number. Scrub every instance of it from this array without making a new one.", input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]", easy: true },
  { desc: "Scan this array once and report back both the absolute biggest and smallest numbers you saw.", input: "nums = [3, 2, 1, 5, 6, 4]", output: "Max: 6, Min: 1", easy: true },
  { desc: "How many vowels (a, e, i, o, u) are hiding inside this string?", input: "s = 'hello world'", output: "3", easy: true },
  { desc: "Count to n! But wait, replace multiples of 3 with 'Fizz' and multiples of 5 with 'Buzz'.", input: "n = 3", output: "['1','2','Fizz']", easy: true },
  { desc: "Is this number only divisible by 1 and itself? Prove it.", input: "n = 11", output: "true", easy: true },
  { desc: "Keep the words in their original order, but spell each word completely backwards.", input: "s = 'Let\\'s take LeetCode contest'", output: "'s\\'teL ekat edoCteeL tsetnoc'", easy: true },
  { desc: "Take these two pre-sorted lists and zip them together into one giant sorted list.", input: "nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]", output: "[1,2,2,3,5,6]", easy: true },
  { desc: "Repeatedly sum all digits of a non-negative integer until the result has only a single digit.", input: "num = 38", output: "2", easy: true },
  { desc: "You are climbing a staircase of n steps. You can take 1 or 2 steps at a time. How many distinct ways can you reach the top?", input: "n = 3", output: "3", easy: true },
  { desc: "Determine if an integer reads the same forwards and backwards without converting it to a string.", input: "x = 121", output: "true", easy: true },
  { desc: "A happy number replaces itself with the sum of squares of its digits iteratively. Does it eventually hit 1?", input: "n = 19", output: "true", easy: true },

  // --- TWO POINTERS ---
  { desc: "Given an array of sorted numbers and a target, find the 1-based indices of two numbers that add up to the target.", input: "numbers = [2,7,11,15], target = 9", output: "[1, 2]", easy: false },
  { desc: "Traverse a sorted array in-place and remove all duplicate elements so each unique element appears only once.", input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "5, nums = [0,1,2,3,4]", easy: false },
  { desc: "Given height lines, find two lines that together with the x-axis form a container holding the maximum volume of water.", input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", easy: false },
  { desc: "Given an array of integers, find all unique triplets [a, b, c] such that their sum equals zero.", input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2], [-1,0,1]]", easy: false },
  { desc: "Read a string forwards and backwards. Is it identical after ignoring case and removing all non-alphanumeric characters?", input: "s = 'A man, a plan, a canal: Panama'", output: "true", easy: false },
  { desc: "Take a sorted array of numbers (including negatives), square each number, and return a new array sorted in non-decreasing order.", input: "nums = [-4,-1,0,3,10]", output: "[0, 1, 9, 16, 100]", easy: false },
  { desc: "Move all zero values to the end of the array while maintaining the relative order of all non-zero elements in-place.", input: "nums = [0,1,0,3,12]", output: "[1, 3, 12, 0, 0]", easy: false },

  // --- SLIDING WINDOW ---
  { desc: "Find the length of the longest contiguous substring without any repeating characters.", input: "s = 'abcabcbb'", output: "3", easy: false },
  { desc: "Find the minimal length of a contiguous subarray of positive integers whose sum is greater than or equal to target.", input: "target = 7, nums = [2,3,1,2,4,3]", output: "2", easy: false },
  { desc: "Given an array of integers, find the maximum average value of any contiguous subarray of length k.", input: "nums = [1,12,-5,-6,50,3], k = 4", output: "12.75", easy: false },
  { desc: "Given binary array nums and integer k, return the maximum number of consecutive 1s if you can flip at most k zeros.", input: "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2", output: "6", easy: false },
  { desc: "Given strings s and p, find all start indices of p's anagrams in string s.", input: "s = 'cbaebabacd', p = 'abc'", output: "[0, 6]", easy: false },

  // --- HASH MAP & HASH SET ---
  { desc: "Given an array of integers, check if any value appears at least twice in the array.", input: "nums = [1,2,3,1]", output: "true", easy: false },
  { desc: "Determine if two strings are valid anagrams of each other by comparing character frequencies.", input: "s = 'anagram', t = 'nagaram'", output: "true", easy: false },
  { desc: "Find the index of the first character in a string that does not repeat anywhere else.", input: "s = 'leetcode'", output: "0", easy: false },
  { desc: "Given an array of strings, group all anagrams together into sublists.", input: "strs = ['eat','tea','tan','ate','nat','bat']", output: "[['bat'],['nat','tan'],['ate','eat','tea']]", easy: false },
  { desc: "Given an unsorted array of integers, find the length of the longest sequence of consecutive numbers.", input: "nums = [100, 4, 200, 1, 3, 2]", output: "4", easy: false },
  { desc: "Given two integer arrays, return an array of their intersection containing only unique elements.", input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2]", easy: false },

  // --- PREFIX SUM & ARRAY TRICKS ---
  { desc: "Calculate the maximum sum of a contiguous subarray using Kadane's Algorithm.", input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", easy: false },
  { desc: "Construct an array where output[i] is equal to the product of all elements except nums[i], without using division.", input: "nums = [1,2,3,4]", output: "[24, 12, 8, 6]", easy: false },
  { desc: "Given stock prices per day, calculate the maximum profit achievable from buying on one day and selling on a future day.", input: "prices = [7,1,5,3,6,4]", output: "5", easy: false },
  { desc: "Find the pivot index in an array where the sum of numbers to the left equals the sum of numbers to the right.", input: "nums = [1,7,3,6,5,6]", output: "3", easy: false },
  { desc: "Find the element that appears more than ⌊n / 2⌋ times in an array (Majority Element).", input: "nums = [3,2,3]", output: "3", easy: false },
  { desc: "Calculate a running cumulative sum array so every index holds the total accumulated up to that point.", input: "nums = [1,2,3,4]", output: "[1, 3, 6, 10]", easy: false },

  // --- STACK / MONOTONIC & FAST/SLOW POINTERS ---
  { desc: "Determine if an input string containing bracket characters '()[]{}' has valid and properly closed pairs.", input: "s = '()[]{}'", output: "true", easy: false },
  { desc: "Find the next greater element for each item in an array, or -1 if no greater element exists to its right.", input: "nums = [2,1,2,43,3]", output: "[43, 2, 43, -1, -1]", easy: false },
  { desc: "Determine if a linked list contains a cycle using Floyd's Tortoise and Hare algorithm.", input: "head = [3,2,0,-4], pos = 1", output: "true", easy: false },
  { desc: "Find the middle node of a singly linked list in a single pass using fast and slow pointers.", input: "head = [1,2,3,4,5]", output: "Node with val 3", easy: false },

  // --- BIT MANIPULATION & MATH ---
  { desc: "Find the single element in an array where every other element appears exactly twice.", input: "nums = [4,1,2,1,2]", output: "4", easy: false },
  { desc: "Given an array containing n distinct numbers in the range [0, n], find the single missing number.", input: "nums = [3,0,1]", output: "2", easy: false },
  { desc: "Count how many 1 bits (hamming weight) are present in the binary representation of a positive integer.", input: "n = 11 (binary 1011)", output: "3", easy: false },

  // --- INNOVATIVE PUZZLES & HARD ALGORITHMIC THINKING ---
  { desc: "Given elevation heights representing terrain, compute how much water is trapped after raining across the landscape.", input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6 units", easy: false },
  { desc: "Design a Least Recently Used (LRU) Cache data structure that evacuates the oldest accessed key when capacity is full.", input: "capacity = 2, actions: put(1,1), put(2,2), get(1), put(3,3)", output: "Key 2 evicted", easy: false },
  { desc: "Given daily temperatures, return an array of how many days you must wait until a warmer temperature occurs.", input: "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]", output: "[1, 1, 4, 2, 1, 1, 0, 0]", easy: false },
  { desc: "Find the total number of continuous subarrays whose sum equals exact target k using prefix sum hash mapping.", input: "nums = [1,1,1], k = 2", output: "2", easy: false },
  { desc: "Given a circular route of gas stations, find the starting station index to complete the full loop without running out of fuel.", input: "gas = [1,2,3,4,5], cost = [3,4,5,1,2]", output: "Index 3", easy: false },
  { desc: "Design a stateless protocol algorithm to encode a list of strings into a single string and decode it back safely without delimiter collision.", input: "strs = ['hello', 'world:special']", output: "'5#hello14#world:special'", easy: false },
  { desc: "Rotate an n x n 2D matrix representing an image by 90 degrees clockwise in-place without allocating another matrix.", input: "matrix = [[1,2],[3,4]]", output: "[[3,1],[4,2]]", easy: false },
  { desc: "Given a string, find the longest palindromic substring contained inside it.", input: "s = 'babad'", output: "'bab' (or 'aba')", easy: false }
];

const problemDisplay = document.getElementById("problem-display");
const conceptText = document.getElementById("concept-text");
const problemDesc = document.getElementById("problem-desc");
const problemInput = document.getElementById("problem-input");
const problemOutput = document.getElementById("problem-output");
const revealBtn = document.getElementById("reveal-btn");
const refreshCountDisplay = document.getElementById("refresh-count");
const easyToggle = document.getElementById("easy-toggle");
const toggleStatus = document.getElementById("toggle-status");
const difficultyBadge = document.getElementById("difficulty-badge");

// Flag variable to control easy questions vs all questions
let isEasyOnly = localStorage.getItem("isEasyOnly") === "true";

// Initialize Toggle Switch UI
if (easyToggle) {
  easyToggle.checked = isEasyOnly;
  updateToggleUI();

  easyToggle.addEventListener("change", (e) => {
    isEasyOnly = e.target.checked;
    localStorage.setItem("isEasyOnly", isEasyOnly);
    updateToggleUI();
  });
}

function updateToggleUI() {
  if (isEasyOnly) {
    if (toggleStatus) {
      toggleStatus.textContent = "ON";
      toggleStatus.className = "status-on";
    }
    if (difficultyBadge) {
      difficultyBadge.textContent = "Easy Questions Only Mode";
      difficultyBadge.className = "badge badge-easy";
    }
  } else {
    if (toggleStatus) {
      toggleStatus.textContent = "OFF";
      toggleStatus.className = "status-off";
    }
    if (difficultyBadge) {
      difficultyBadge.textContent = "All Questions Mode";
      difficultyBadge.className = "badge badge-all";
    }
  }
}

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

let lastIndex = -1;

revealBtn.addEventListener("click", () => {
  // Prevent multiple clicks by disabling the button
  revealBtn.disabled = true;

  // Filter questions pool based on flag variable (isEasyOnly)
  const pool = isEasyOnly ? problems.filter(p => p.easy) : problems;

  // Pick a random problem from filtered pool
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * pool.length);
  } while (randomIndex === lastIndex && pool.length > 1);
  lastIndex = randomIndex;

  const selected = pool[randomIndex];

  // Reset animation
  conceptText.classList.add("hidden");
  problemDisplay.classList.remove("active");

  // Add a slight delay for transition effect
  setTimeout(() => {
    // Update text
    problemDesc.textContent = selected.desc;
    problemInput.textContent = selected.input;
    problemOutput.textContent = selected.output;

    // Show new problem
    conceptText.classList.remove("hidden");
    problemDisplay.classList.add("active");

    // Re-enable button
    revealBtn.disabled = false;
  }, 250);
});
