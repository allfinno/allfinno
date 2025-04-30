console.log("Website loaded successfully!");
console.log("Script Loaded!");

// script.js

const typedTextElement = document.querySelector('.typed-text');

// Array of strings for multiple lines of text
const linesToType = [
  'Smart Debt Recovery',
  'Customer Support',
  'Email Chat Support',
  'AI-powered Communication',
  'Next-Gen BPO Solutions',
];

let lineIndex = 0;  // Track which line we're typing
let charIndex = 0;  // Track the current character for typing
let typing = true;   // Control whether we are typing or deleting

// Function to type the text
function typeText() {
    if (lineIndex < linesToType.length) {
        const currentLine = linesToType[lineIndex];

        if (typing) {
            // Typing effect: Type one character at a time
            if (charIndex < currentLine.length) {
                typedTextElement.innerHTML += currentLine.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100);  // Adjust the speed here (in ms)
            } else {
                // Once the line is fully typed, switch to deleting after a short delay
                setTimeout(function () {
                    typing = false;  // Switch to deleting
                    setTimeout(typeText, 500);  // Delay before starting to delete
                }, 1000);  // Wait 1 second before starting to delete
            }
        } else {
            // Deleting effect: Delete one character at a time
            if (charIndex > 0) {
                typedTextElement.innerHTML = currentLine.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeText, 50);  // Adjust the speed of deleting here (in ms)
            } else {
                // Once the line is fully deleted, move to the next line
                typing = true;  // Switch back to typing mode
                lineIndex++;     // Move to the next line
                setTimeout(typeText, 500);  // Short delay before starting the next line
            }
        }
    } else {
        // When all lines are completed, reset to the first line and repeat
        setTimeout(function () {
            lineIndex = 0;  // Reset the line index
            charIndex = 0;  // Reset the character index
            typing = true;  // Start typing again
            typedTextElement.innerHTML = '';  // Clear the text element
            setTimeout(typeText, 200);  // Start the typing effect again after a short delay
        }, 1000);  // Wait for 1 seconds before starting over
    }
}

// Start the typing effect when the page is loaded
window.onload = typeText;

// Select the ribbons container
const ribbonsContainer = document.getElementById('ribbons-container');

// Set up Intersection Observer to trigger visibility when scrolled into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add class to show ribbons
            ribbonsContainer.classList.add('visible');
            // Stop observing once it is visible
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // 50% of the ribbons should be in view to trigger

// Start observing the ribbons container
observer.observe(ribbonsContainer);

const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq => {
  faq.querySelector('.faq-question').addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
fetch(scriptURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
