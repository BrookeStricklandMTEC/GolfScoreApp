
function validate(evt) {
    let theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    }
    else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

let a = 0
let rowOneCounter = a++
let rowTwoCounter = a++
let rowThreeCounter = a++
let rowFourCounter = a++

$(document).ready(function () {
    $('#playerOneRow').keyup(function (f) {
        if (f.key == "Enter" && rowOneCounter < 17) {
            $('#playerOneRow').append(
                `
         <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerOneScore">
         `
            )
            let playerOneScore = document.querySelectorAll('#playerOneScore'), sumVal = 0;
            for (let i = 0; i < playerOneScore.length; i++) {
                sumVal += parseInt(playerOneScore[i].value || 0);
            }
            let playerOneCurrent2 = document.querySelectorAll('#playerOneCurrent');
            playerOneCurrent2 +=
                `
         <div id="playerOneCurrent"> ${sumVal} </div>
         `
            rowOneCounter++
            document.getElementById('playerOneCurrent').innerHTML = sumVal;
            console.log(sumVal);
        }
    });
});
$(document).ready(function () {
    $('#playerTwoRow').keyup(function (f) {
        if (f.key == "Enter" && rowTwoCounter < 18) {
            $('#playerTwoRow').append(
                `
        <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerTwoScore">
        `
            )
            let playerTwoScore = document.querySelectorAll('#playerTwoScore'), sumVal1 = 0;
            for (let i = 0; i < playerTwoScore.length; i++) {
                sumVal1 += parseInt(playerTwoScore[i].value || 0);
            }
            let playerTwoCurrent2 = document.querySelectorAll('#playerTwoCurrent');
            playerTwoCurrent2 +=
                `
        <div id="playerTwoCurrent"> ${sumVal1} </div>
        `
            rowTwoCounter++
            document.getElementById('playerTwoCurrent').innerHTML = sumVal1;
            console.log(sumVal1);
        }
    });
});
$(document).ready(function () {
    $('#playerThreeRow').keyup(function (f) {
        if (f.key == "Enter" && rowThreeCounter < 19) {
            $('#playerThreeRow').append(
                `
        <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerThreeScore">
        `
            )
            let playerThreeScore = document.querySelectorAll('#playerThreeScore'), sumVal2 = 0;
            for (let i = 0; i < playerThreeScore.length; i++) {
                sumVal2 += parseInt(playerThreeScore[i].value || 0);
            }
            let playerThreeCurrent2 = document.querySelectorAll('#playerThreeCurrent');
            playerThreeCurrent2 +=
                `
        <div id="playerThreeCurrent"> ${sumVal2} </div>
        `
            document.getElementById('playerThreeCurrent').innerHTML = sumVal2;
            rowThreeCounter++
        }
    });
});
$(document).ready(function () {
    $('#playerFourRow').keyup(function (f) {
        if (f.key == "Enter" && rowFourCounter < 20) {
            $('#playerFourRow').append(
                `
        <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerFourScore">
        `
            )
            let playerFourScore = document.querySelectorAll('#playerFourScore'), sumVal3 = 0;
            for (let i = 0; i < playerFourScore.length; i++) {
                sumVal3 += parseInt(playerFourScore[i].value || 0);
            }
            let playerFourCurrent2 = document.querySelectorAll('#playerFourCurrent');
            playerFourCurrent2 +=
                `
        <div id="playerFourCurrent"> ${sumVal3} </div>
        `
            rowOneCounter++
            document.getElementById('playerFourCurrent').innerHTML = sumVal3;
        }
    });
});