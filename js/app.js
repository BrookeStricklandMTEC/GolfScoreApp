// Golf 

// import scoring from '/scoring.js' 

function getAvailableCourses() {
fetch('https://golf-courses-api.herokuapp.com/courses/' , 
{method: 'GET' , 

    headers: { 'Content-Type': 'application/json'},

})
    .then(res => { 
    return res.json()  
})  
    .then(data => console.log(data)) 
}
getAvailableCourses();

// How to make it so if there is greater than four players window.alert too many players
$('body').ready(function(){ 
    $('#newPlayerInput').keyup(function(a){

        if (a.key == "Enter"){

            let newPlayer = $('#newPlayerInput').val()

            console.log(newPlayer); 

            $('#newPlayerText').append(
            `
            <div class="newPlayerWrapper"> 
                <span id="newPlayerText"> ${$('#newPlayerInput').val()} </span>
            </div>
            `
            )
        }

    //    else { 

    //     window.alert('Too many players!'); 

    //    }

    })
})




// Tee Box Select
// let teeBoxSelectHtml = ''
// teeBoxes.forEach(function (teeBox, index) {
//    teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
//      teeBox.totalYards
//    } yards</option>`
// });
// document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;


// Course Select
// let courseOptionsHtml = '';
// courses.forEach((course) => {
//  courseOptionsHtml += `<option value="${course.id}">${course.name}</option>`;
// });
// document.getElementById('course-select').innerHTML = courseOptionsHtml;
 

// Notification for Finish
    // class Player {
    //     constructor(name, id = getNextId(), scores = []) {
    //       this.name = name;
    //       this.id = id;
    //       this.scores = scores;
    //     }
//   }










