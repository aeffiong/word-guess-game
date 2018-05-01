//  <!-- 2. Choose a theme for your game! exercise moves
// 3. Use key events to listen for the letters that your players will type.
// document.onkeyup

// 4. Display the following on the page:

// Press any key to get started!

// Wins: (# of times user guessed the word correctly).

// * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

// * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

// Number of Guesses Remaining: (# of guesses remaining for the user).

// Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// After the user wins/loses the game should automatically choose another word and make the user play it. --> 

// first: declare variables
    var exercises = ["squat", "pushup", "lunge", "pullup", "deadlift", "presses", "curls", "burpee", "plank"];
    console.log(exercises);

    var guessesLeft = 10;


// create key events (document.onkeyup)
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.key)
        .toLowerCase();

        var userGuess = event.key;
        console.log(userGuess);
    }

// show word on document with dashes that fill in
    document.getElementById('letter') .innerHTML = letter;
    document.getElementById('letter') .style.visibility = "hidden";
    document.getElementById('underline') .style.display = "block";
    document.getElementById('underline') .style.borderBottom = "3px solid black";

// create conditions for them to guess the word (if, if else, else)

// create the number of guesses they are allowed

// show the correct letters on the document

// show the incorrect letters on the document

// pop up that says they won or lost

// go to the next word after won or loss stated

// keep tabs on page of wins and losses