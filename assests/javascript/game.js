
// first: declare variables
    var exercises = ["squat", "pushup", "lunge", "pullup", "deadlift", "presses", "curls", "burpee", "plank", "inchworm", "jump", "superman", "crunch"];
    var wordSelected = "";
    var lettersInWord = [];
    var numBlanks = 0;
    var blanksAndCorrect = [];
    var wrongLettersPicked = [];
    const maxTries = 10;
    var guessesLeft = maxTries;
    // var gameStarted = false;
    // var gameHasFinished = false;
    var wins = 0;
    var losses = 0;

//    functions
    function reset() {
        guessesLeft = maxTries;
        wrongLettersPicked = [];
        blanksAndCorrect = [];
        }

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
        //  allow only letters
         var regex = /^[a-zA-Z]+$/;
         if (!letter.match(regex)) {
            alert("Please type a letter")
            guessesLeft = maxTries;
            wrongLettersPicked = [];
         }

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
                //  alert("correct guess");
             }
         }
     }
    //  if letter not found
     else {
         wrongLettersPicked.push(letter);
        //  alert("incorrect guess");
         guessesLeft --;

         console.log(guessesLeft);
         document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
         document.getElementById("lettersPicked").innerHTML = "Letters already picked: " + wrongLettersPicked;
         if(guessesLeft === 0) {
            reset(); 
            losses ++;
            // reset();
            alert("You lose");
            alert("The word was " + wordSelected);
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            
            
            // reset
             // reset
            //  guessesLeft = maxTries;
            //  wrongLettersPicked = [];
            //  blanksAndCorrect = [];
 
             
 
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
        if(lettersInWord.toString() === blanksAndCorrect.toString()) {
            // reset
            guessesLeft = maxTries;
            wrongLettersPicked = [];
            blanksAndCorrect = [];
            wins ++;
            alert("You won!");
            document.getElementById("wins").innerHTML = "Wins: " + wins;
        // figure out why I have to click another button for it to alert that I won instead
            

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
       

