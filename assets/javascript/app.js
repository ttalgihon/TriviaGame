log = console.log;


// Object of the game variables
var results = {
    correctAnswer: 0,
    wrongAnswer: 0,
    countdown () {
        let counter = 21
        log("outer", counter);
        setInterval(() => {
            if (counter >= 1) {
                counter--;
                $(".timerplaceholder").html('Timer: '+ counter);
                log("inner", counter);
                clearInterval();
            }
        } , 500)
        $("div#divdiv").fadeOut("slow").addClass("hiddenbody");
        $(".displaydiv").html('The timer is finished, press done to see your results!');
    }
}

// Start button press shows questions & more.
$(document).ready(function(){
    $(".btn-success").on("click", function(){
        $("div.hiddenbody").fadeIn("slow").removeClass("hiddenbody");
        $(".btn-warning").show();
        $(".btn-success").hide();
        log("you clicked this button.") //It works.
        results.countdown();
        
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