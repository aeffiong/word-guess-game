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
    var exercises = ["squat", "pushup", "lunge", "pullup", "deadlift", "presses", "curls", "burpee", "plank", "inchworm", "jump", "superman", "crunch"];
    var wordSelected = "";
    var lettersInWord = [];
    var numBlanks = 0;
    var blanksAndCorrect = [];
    var wrongLettersPicked = [];
    const maxTries = 10;
    var guessesLeft = 0;
    // var gameStarted = false;
    // var gameHasFinished = false;
    var wins = 0;
    var losses = 0;

   


// create key events (document.onkeyup)
    window.onload = function() {
        guessesLeft = maxTries;
        gameStarted = false;
        console.log(guessesLeft);
      
        wordSelected = exercises[Math.floor(Math.random () * exercises.length)]
        console.log(wordSelected);

        lettersInWord = wordSelected.split("");
        console.log(lettersInWord);

        numBlanks = lettersInWord.length;
        console.log(numBlanks);

        // reset
        // guessesLeft = 10;
        wrongLettersPicked = [];
        blanksAndCorrect = [];

        // populate blanks
        for (var i=0; i<numBlanks; i++) {
            blanksAndCorrect.push("_");
        }

        console.log(blanksAndCorrect);
         // html
         document.getElementById("gameSpace").innerHTML = blanksAndCorrect.join(" ");
         document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
         document.getElementById("wins").innerHTML = "Wins: " + wins;
         document.getElementById("losses").innerHTML = "Losses: " + wins;
         document.getElementById("lettersPicked").innerHTML = "Letters already picked: " + wrongLettersPicked;
 
 
    function checkLetters(letter) {
         var isLetterInWord = false;

         for(var i=0; i<numBlanks; i++) {
             if(wordSelected[i] == letter) {
                 isLetterInWord = true;
                 
             }
         }
        //  if letter found
         if(isLetterInWord) {
         for(var i=0; i<numBlanks; i++) {
             if (wordSelected[i] == letter) {
                 blanksAndCorrect[i] = letter;
                 alert("correct guess");
             }
         }
     }
    //  if letter not found
     else {
         wrongLettersPicked.push(letter);
         guessesLeft --;
         alert("incorrect guess");
     }
    }
    console.log(blanksAndCorrect);
    console.log(wrongLettersPicked);

document.onkeyup = function(event) {
        var guessLetter = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(guessLetter);


        console.log(guessLetter);
        document.getElementById("gameSpace").innerHTML = blanksAndCorrect.join(" ");
    }

        

    }
       

    

// resetGame();
    // document.onkeyup = function(event) {
    //     var guessLetter = String.fromCharCode(event.key)
    //     .toLowerCase();

    //     console.log(guessLetter);
       

    //     var guessLetter = event.key;
    //     console.log(guessLetter);

    //     document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft--;
    //     console.log (guessesLeft);

    //     document.getElementById("wins").innerHTML = "Wins: " + wins;
    //     console.log (wins);
    // }





// show word on document with dashes that fill in
    // document.getElementById('letter') .innerHTML = letter;
    // document.getElementById('letter') .style.visibility = "hidden";
    // document.getElementById('underline') .style.display = "block";
    // document.getElementById('underline') .style.borderBottom = "3px solid black";

// create conditions for them to guess the word (if, if else, else)
    // if userGuess is correct, then show that letter in the gameSpace box, else, show that letter under "letters guessed"
    // if userGuess guesses the word in less than the guesses, then display you win.
    // if userGuess doesn't guess the word within the amount of guesses, then display, you lose and show the word.
    // if userGuess incorrectly, then subtract 1 from guessesLeft. Game ends when guessesLeft = 0
    // if userGuess guesses correctly, then show letter in game space and keep guessesLeft the same


// show the correct letters on the document

// show the incorrect letters on the document

// pop up that says they won or lost

// go to the next word after won or loss stated: a reset

// keep tabs on page of wins and losses
    // var html =
    // document.getElementById()