function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform simple login check (you should implement proper authentication)
    if (username === "sharmila" && password === "sharmi") {
        document.getElementById("loginForm").reset();
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("examPage").style.display = "block";
        alert("You logged in");
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}

function submitAnswers() {
    var totalQuestions = 10; // Update this with total number of questions
    var score = 0;

    var answers = ["c", "b", "c", "a", "a", "c", "a", "b", "a", "c"]; // Update this with correct answers

    for (var i = 1; i <= totalQuestions; i++) {
        var selectedAnswer = document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[i - 1]) {
                score++;
            }
        }
    }

    var result = document.getElementById("results");
    result.innerHTML = "You scored " + score + " out of " + totalQuestions;
}