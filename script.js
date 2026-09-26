// Get the elements
const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");

// Get the current page
const currentPage = window.location.pathname;

// Set the correct code and next page
let correctCode;
let nextPage;

if (currentPage.includes("task1")) {
    correctCode = "GAME";
    nextPage = "task2.html";

} else if (currentPage.includes("task2")) {
    correctCode = "DATE";
    nextPage = "task3.html";

} else if (currentPage.includes("task3")) {
    correctCode = "BIRTHDAY";
    nextPage = "final.html";
}

// Check the code
submitBtn.addEventListener("click", () => {

    const userInput = codeInput.value.trim().toUpperCase();

    if (userInput === correctCode) {

        message.textContent = "Congrats! Let's go!";

        setTimeout(() => {
            window.location.href = nextPage;
        }, 1000);

    } else {

        message.textContent = "Try again...";

    }
});