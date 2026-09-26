// Get the elements from the page
const submitBtn = document.getElementById("submitBtn");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");
// Find out which task we are on
const currentPage = window.location.pathname;
// Variables for the correct answer and next page
let correctCode;
let nextPage;
// TASK 1
if (currentPage.includes("task1")) {
    correctCode = "GAME";
    nextPage = "task2.html";
}
// TASK 2
else if (currentPage.includes("task2")) {
    correctCode = "DATE";
    nextPage = "task3.html";
}
// TASK 3
else if (currentPage.includes("task3")) {
    correctCode = "BIRTHDAY";
    nextPage = "final.html";
}

// When the Check button is clicked
submitBtn.addEventListener("click", () => {
    // Get what the player typed
    // Uppercase means GAME and game both work
    const userInput = codeInput.value.trim().toUpperCase();

    // Check if the answer is correct
    if (userInput === correctCode) {
        message.textContent = "Congrats! Let's go! ";

        // Wait 1 second, then go to the next page
        setTimeout(() => {
            window.location.href = nextPage;
        }, 1000);
    }
    // Wrong answer
    else {
        message.textContent = "Try again... ";
    }
});