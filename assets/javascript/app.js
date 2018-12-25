log = console.log;

// Object of the game variables
var results = {
    correctAnswer: 0,
    wrongAnswer: 0,  
};

$(document).ready(function(){
    $(".btn-warning").click(function(){
        $(".displaydiv").hide();
        $(".divdiv").hide();
        $(".CAdiv").html('Correct Answer: ' + results.correctAnswer);
        $(".WAdiv").html('Wrong Answer: ' + results.wrongAnswer);
        log("done-button", 'banana');
    })
});

function countdown(){
    var counter = 21
    log("outer", counter); //timer: 21 doesn't show
    setInterval(() => {
        if (counter >= 1) {
            counter--;
            $(".timerplaceholder").html('Timer: '+ counter);
            log("inner", counter); //timer: 20-0 does show
            clearInterval();
        }
        if (counter === 0) {
            $("#divdiv").fadeOut("slow").addClass("hiddenbody");
            $(".displaydiv").html('The timer is finished, press done to see your results!');
            return;
        }
    } , 1000)
}
// The Done button shows the results of the game.

// Start button press shows questions & more.
$(document).ready(function(){
    $(".btn-success").on("click", function(){
        $("div.hiddenbody").fadeIn("slow").removeClass("hiddenbody");
        $(".btn-warning").show();
        $(".btn-success").hide();
        log("you clicked this button.") //It works.
        countdown();
        
    })
}); 

$(document).ready(function(){
    $(".btn-primary").on('click', function(){
        if ( ) {
            log('i love this thing')
            results.correctAnswer++;
            log(results.correctAnswer);    
        }
        else {
            log('this is so wrong');
            results.wrongAnswer++;
            log(results.wrongAnswer);
        }
    })
});



//    timer = 20

//(function x() {
   // function timer() {
       // if(timer >= 0) {
       //     time--
     //       clearInterval
 //   }   }
//    setInterval(timer, 1000)
//})();

// let x = 5

// (x, y) => {
//     x + 1
// }

// function x(x, y) {

// }