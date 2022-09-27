// Golf 

// import scoring from '/scoring.js' 


$('#newPlayerInput').keyup(function(a){

    if (a.key == "Enter"){

        let newPlayer = $('#newPlayerInput').val()

        console.log(newPlayer); 

        $('#newPlayer').append(
        `
        <div class="newPlayerWrapper"> 
            <div id="newPlayer">
            
                <span id="newPlayerText"> ${$('#newPlayerInput').val()} </span>
            
            </div>
        </div>
        
        `)

    }

})





//  Functions I wil need

// addList
// removeList
// addTodo
// removeTodo
// markTodoAsCompleted
// removeAllTodosCompleted


// Player Rows

    // class Player {
    // constructor(name, id = getNextId(), scores = []) {
    //     this.name = name;
    //     this.id = id;
    //     this.scores = scores;
    //   }
// }


// Notification for Finish
    // class Player {
    //     constructor(name, id = getNextId(), scores = []) {
    //       this.name = name;
    //       this.id = id;
    //       this.scores = scores;
    //     }
//   }




















