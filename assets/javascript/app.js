$(document).ready( function() {
    console.log('I am linked');

    let questionNumber = 'Question: #';
    let intervalId;
    let clockRunning = false;




function renderGame() {
    $('game').html(`
    
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" id="initializer" data-toggle="modal" data-target="#exampleModalCenter">
            Start Game!
            </button>
        
            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle questionNumber">${questionNumber}</h5>
                    <!--<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>-->
                    <a href="#" class="btn btn-secondary btn-lg disabled" id="timer" tabindex="-1" role="button" aria-disabled="true">00:30</a>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="question"></div>
                    <button type="button" class="btn btn-outline-dark">${triviaKey.answers1.a1}</button>
                    <button type="button" class="btn btn-outline-dark">${triviaKey.answers1.b1}</button>
                    <button type="button" class="btn btn-outline-dark">${triviaKey.answers1.c1}</button>
                    <button type="button" class="btn btn-outline-dark">${triviaKey.answers1.d1}</button>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="giveUp" data-dismiss="modal">Quit</button>
                    <button type="button" class="btn btn-primary" id="next">Done</button>
                </div>
                </div>
            </div>
            </div>

    
    `);
};


let triviaKey = {
    
    question1: 'What is my favorite word?',
    answers1: {
        a1: 'blah',
        b1: 'duh',
        c1: 'boop',
        d1: 'biatch'
    },

    question2: 'Why you gotta say it like Short?',
    answers2: {
        a2: 'blah',
        b2: 'duh',
        c2: 'boop',
        d2: 'biotch'
    },

    question3: 'You know you cant play on my court?',
    answers3: {
        a3: 'blah',
        b3: 'duh',
        c3: 'boop',
        d3: 'swoop'
    },

    question4: 'what is question 3?',
    answers4: {
        a4: 'blah',
        b4: 'duh',
        c4: 'boop',
        d4: 'swoop'
    },

    question5: 'what is question 3?',
    answers5: {
        a5: 'blah',
        b5: 'duh',
        c5: 'boop',
        d5: 'swoop'
    },

    question6: 'what is question 3?',
    answers6: {
        a6: 'blah',
        b6: 'duh',
        c6: 'boop',
        d6: 'swoop'
    },

    question7: 'what is question 3?',
    answers7: {
        a7: 'blah',
        b7: 'duh',
        c7: 'boop',
        d7: 'swoop'
    },

    question8: 'what is question 3?',
    answers8: {
        a8: 'blah',
        b8: 'duh',
        c8: 'boop',
        d8: 'swoop'
    },

    question9: 'what is question 3?',
    answersLast: {
        a9: 'blah',
        b9: 'duh',
        c9: 'boop',
        d9: 'swoop'
    },

    question10: 'what is question 3?',
    answersLast: {
        aLast: 'blah',
        bLast: 'duh',
        cLast: 'boop',
        dLast: 'swoop'
    },

    questionsArray: ['What is my favorite word?', 'Why you gotta say it like Short?', 'You know you cant play on my court?', 'what is question 4?', 'what is question 5?', 'what is question 6?', 'what is question 7?', 'what is question 8?', 'what is question 9?', 'what is question 10?'],

    questionCounter: 0,
};



function gameTimer() {
    $('#initializer').on('click', function() {
        $('#question').html(triviaKey.questionsArray[0]);
    });
    $('#initializer').on('click', timer.start);
    $('#giveUp').on('click', timer.stop);
    $('#next').on('click', timer.reset).on('click', timer.start);
    console.log(timer.time);
    $('#next').on('click', function() {
        triviaKey.questionCounter++;
        console.log(triviaKey.questionsArray[triviaKey.questionCounter]);
        $('#question').html(triviaKey.questionsArray[triviaKey.questionCounter]);
        });
    };


// function gamePlay() {

// });
// };


//timer object
var timer = {
    time: 10,
  
    reset: function() {
      timer.time = 10;
      $("#timer").text("00:30");
    },

    start: function() {
      if (!clockRunning) {
        intervalId = setInterval(timer.count, 1000);
        clockRunning = true;
      }
    },

    stop: function() {
      clearInterval(intervalId);
      clockRunning = false;
    },

    count: function() {
      timer.time--;
      $("#timer").text('00:' + timer.time);
    }
};





//gamePlay();
renderGame();
gameTimer();




});