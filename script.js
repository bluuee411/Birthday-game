// Mapping the codes

const codes = {
    "Game": "index.html",      // Code to Index
    "Date": "task1.html",      // First code to Task 1
    "Blue": "task2.html",      // Second code to Task 2
    "Birthday": "task3.html"   // Third code to Task 3
};

const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
    const userInput = codeInput.value.trim().toUpperCase();

    if (codes[userInput]) {
        message.textContent = "Congrats! Let's go!";

        setTimeout(() => {
            window.location.href = codes[userInput];
        }, 2000);

    } else {
        message.textContent = "Try again...";
    }
});
