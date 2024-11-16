const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");

function isPalindrome(text) {
    // Remove non-alphanumeric characters and make lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Check if the cleaned text reads the same backward
    return cleanText === cleanText.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    
    if (text === "") {
        alert("Please input a value");
        return;
    }

    if (isPalindrome(text)) {
        resultDisplay.textContent = `${text} is a palindrome`;
    } else {
        resultDisplay.textContent = `${text} is not a palindrome`;
    }
});
