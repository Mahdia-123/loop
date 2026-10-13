
console.log("JavaScript is connected!");

const numberInput = document.getElementById("number");
const analyzeBtn = document.getElementById("analyzeBtn");
const fullAnalysisBtn = document.getElementById("fullAnalysisBtn");
const guessBtn = document.getElementById("guessBtn");

// Analyze Button
analyzeBtn.addEventListener("click", function () {

    if (numberInput.value === "") {
        document.getElementById("message").textContent =
            "Please enter a number!";
        return;
    }

    const number = Number(numberInput.value);

    if (!Number.isInteger(number) || number < -1000 || number > 1000) {
        document.getElementById("message").textContent =
            "Enter a whole number between -1000 and 1000.";
        return;
    }

    document.getElementById("message").textContent =
        "Analysis completed successfully! ✨";

    // 1. Number Range
    if (number > 0) {
        document.getElementById("rangeResult").textContent =
            "Positive";
    } else if (number < 0) {
        document.getElementById("rangeResult").textContent =
            "Negative";
    } else {
        document.getElementById("rangeResult").textContent =
            "Zero";
    }

    // 2. Count from 1 to the number
    let count = "";

    for (let i = 1; i <= number; i++) {
        count += i + " ";
    }

    document.getElementById("countResult").textContent =
        count || "No numbers to display.";

    // 3. Even Numbers
    let even = "";

    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            continue;
        }

        even += i + " ";
    }

    document.getElementById("evenResult").textContent =
        even || "No even numbers.";

    // 4. Odd Numbers
    let odd = "";

    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            odd += i + " ";
        }
    }

    document.getElementById("oddResult").textContent =
        odd || "No odd numbers.";

    // 5. Multiplication Table
    let table = "";

    for (let i = 1; i <= 10; i++) {
        table += number + " × " + i + " = " +
            (number * i) + "\n";
    }

    document.getElementById("tableResult").textContent = table;

    // 6. Sum of Numbers
    let sum = 0;
    let sumText = "";

    for (let i = 1; i <= number; i++) {
        sum += i;

        if (i === 1) {
            sumText = "1";
        } else {
            sumText += " + " + i;
        }
    }

    if (number > 0) {
        sumText += " = " + sum;
    } else {
        sumText = "Sum = 0";
    }

    document.getElementById("sumResult").textContent = sumText;

    // 7. Numbers Divisible by 5
    let five = "";

    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            five += i + " ";
        }
    }

    document.getElementById("fiveResult").textContent =
        five || "No multiples of 5.";

    // 8. Countdown
    let countdown = "";

    for (let i = number; i >= 1; i--) {
        countdown += i + " ";
    }

    if (number > 0) {
        countdown += "Finished!";
    } else {
        countdown = "Enter a positive number.";
    }

    document.getElementById("countdownResult").textContent =
        countdown;

    // 9. Factorial
    if (number < 0) {
        document.getElementById("factorialResult").textContent =
            "Not defined for negative numbers.";
    } else {
        let factorial = 1;

        for (let i = 1; i <= number; i++) {
            factorial *= i;
        }

        document.getElementById("factorialResult").textContent =
            number + "! = " + factorial;
    }

    console.log("Number:", number);
    console.log("Sum:", sum);
});

// Mini Challenge — Run Full Analysis
fullAnalysisBtn.addEventListener("click", function () {
    analyzeBtn.click();
});

// Bonus Challenge — Guess Counter
guessBtn.addEventListener("click", function () {

    const secretNumber = 7;
    let guess = 0;
    let attempts = 0;

    while (true) {
        const answer = prompt(
            "Guess the secret number between 1 and 10:"
        );

        if (answer === null) {
            document.getElementById("guessResult").textContent =
                "Game cancelled. Try again anytime!";
            break;
        }

        if (answer.trim() === "") {
            alert("Please enter a number!");
            continue;
        }

        guess = Number(answer);

        if (!Number.isInteger(guess) || guess < 1 || guess > 10) {
            alert("Enter a whole number between 1 and 10.");
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            alert("Too low! Try again.");
        } else if (guess > secretNumber) {
            alert("Too high! Try again.");
        } else {
            document.getElementById("guessResult").textContent =
                "🎉 Correct! You won in " + attempts + " attempts!";

            alert("Correct! You guessed the secret number!");
            break;
        }
    }
});
