$(document).ready(function () {
    var Random = Math.floor(Math.random() * 105 + 20)

    $('#randomnumber').text(Random);

    var num1 = Math.floor(Math.random() * 14 + 1)
    var num2 = Math.floor(Math.random() * 14 + 1)
    var num3 = Math.floor(Math.random() * 14 + 1)
    var num4 = Math.floor(Math.random() * 14 + 1)

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 105 + 20);
        //    console
        $('#randomnumber').text(Random);
        //    console
        num1 = Math.floor(Math.random() * 14 + 1);
        num2 = Math.floor(Math.random() * 14 + 1);
        num3 = Math.floor(Math.random() * 14 + 1);
        num4 = Math.floor(Math.random() * 14 + 1);
        yourScore = 0;
        $('#score').text(yourScore);
        consol.log(yourScore)
    }
    //    adds and lose
    function winner() {
        alert("You won");
        wins++;
        $('#wins').text(wins);
        reset();

    }

    function notawinner () {
        alert("You lose");
        losses++;
        $('#losses').text(losses);
        reset()
    }

    // cristals 
    $('#one').on('click', function () {
        yourScore = yourScore + num1;
        console.log("New userTotal= " + yourScore);
        $('#score').text(yourScore);
        //sets win/lose conditions
        if (yourScore == Random) {
            winner();
        } else if (yourScore > Random) {
            notawinner();
        }
    })
    $('#two').on('click', function () {
        yourScore = yourScore + num2;
        console.log("New userTotal= " + yourScore);
        $('#score').text(yourScore);
        if (yourScore == Random) {
            winner();
        } else if (yourScore > Random) {
            notawinner();
        }
    })
    $('#three').on('click', function () {
        yourScore = yourScore + num3;
        console.log("New userTotal= " + yourScore);
        $('#score').text(yourScore);
        //sets win/lose conditions
        if (yourScore == Random) {
            winner();
        } else if (yourScore > Random) {
            notawinner();
        }
    })
    $('#four').on('click', function () {
        yourScore = yourScore + num4;
        console.log("New userTotal= " + yourScore);
        $('#score').text(yourScore);

        if (yourScore == Random) {
            winner();
        } else if (yourScore > Random) {
            notawinner();
        }
    });


});