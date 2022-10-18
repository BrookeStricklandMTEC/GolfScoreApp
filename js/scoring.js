
playerOne = [] 
playerTwo = [] 
playerThree = [] 
playerFour= [] 

// only allows numerical entries 
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
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}

// if a score is entered, update current score for that player, store it in player array. 
let a = 0
let newRowCounter = a++

$(document).ready(function(){
    $('#playerOneRow').keyup(function(f){
        if (f.key == "Enter" && newRowCounter < 17){
         $('#playerOneRow').append(
         `
         <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerOneScore">
         `
         )
         newRowCounter++
        }
    });
    $('#playerTwoRow').keyup(function(f){
        if (f.key == "Enter" && newRowCounter < 17){
         $('#playerTwoRow').append(
         `
         <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerOneScore">
         `
         )
         newRowCounter++
        }
    });
    $('#playerThreeRow').keyup(function(f){
        if (f.key == "Enter" && newRowCounter < 17){
         $('#playerThreeRow').append(
         `
         <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerOneScore">
         `
         )
         newRowCounter++
        }
    });
    $('#playerFourRow').keyup(function(f){
        if (f.key == "Enter" && newRowCounter < 17){
         $('#playerFourRow').append(
         `
         <input type='text' onkeypress='validate(event)' class="row-sml-score" maxlength="4" id="playerOneScore">
         `
         )
         newRowCounter++
        }
    });

});


// console.log(scoring)

// Notification for Finish
    // class Player {
    //     constructor(name, id = getNextId(), scores = []) {
    //       this.name = name;
    //       this.id = id;
    //       this.scores = scores;
    //     }
//   }

