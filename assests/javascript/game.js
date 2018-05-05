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

   


// create key events
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
        guessesLeft = maxTries;
        wrongLettersPicked = [];
        blanksAndCorrect = [];

        // populate blanks
        for (var i=0; i<numBlanks; i++) {
            blanksAndCorrect.push("_");
        }

        console.log(blanksAndCorrect);

        
 
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
         alert("incorrect guess");
         guessesLeft --;

         console.log(guessesLeft);
         document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
         document.getElementById("lettersPicked").innerHTML = "Letters already picked: " + wrongLettersPicked;
         if(guessesLeft == 0) {
            losses ++;
            alert("You lose");
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            // reset
             // reset
             guessesLeft = maxTries;
             wrongLettersPicked = [];
             blanksAndCorrect = [];
 
             
 
             // repopulate blanks
             wordSelected = exercises[Math.floor(Math.random () * exercises.length)]
             console.log(wordSelected);
             lettersInWord = wordSelected.split("");
             console.log(lettersInWord);
 
             numBlanks = lettersInWord.length;
             console.log(numBlanks);
             
             for (var i=0; i<numBlanks; i++) {
             blanksAndCorrect.push("_");
         }
        }
        // check if won
        if(lettersInWord.toString() == blanksAndCorrect.toString()) {
            wins ++;
            alert("You won!");
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            // reset
            guessesLeft = maxTries;
            wrongLettersPicked = [];
            blanksAndCorrect = [];

            

            // repopulate blanks
            wordSelected = exercises[Math.floor(Math.random () * exercises.length)]
            console.log(wordSelected);
            lettersInWord = wordSelected.split("");
            console.log(lettersInWord);

            numBlanks = lettersInWord.length;
            console.log(numBlanks);

            for (var i=0; i<numBlanks; i++) {
            blanksAndCorrect.push("_");
        }
           
    
    }
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

    // html to display on screen
    document.getElementById("gameSpace").innerHTML = blanksAndCorrect.join(" ");
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + wins;
    document.getElementById("lettersPicked").innerHTML = "Letters already picked: " + wrongLettersPicked;
 

    }
       

