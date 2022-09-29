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

let i = 0
let newPlayerCounter = i++

$('body').ready(function(){ 
    $('#newPlayerInput' ).keyup(function(a,i){

        if (a.key == "Enter" && newPlayerCounter < 4) {

            let newPlayer = $('#newPlayerInput').val() 
            newPlayerCounter++
            console.log(newPlayerCounter); 

            console.log(newPlayer); 

            $('#newPlayerText').append(
            `
            <div class="newPlayerWrapper"> 
                <span id="newPlayerText"> ${$('#newPlayerInput').val()} </span>
            </div>
            `

            )
        }

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










