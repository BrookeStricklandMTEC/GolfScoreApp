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
    .then(data =>  {
       renderCourses(data.courses) 
    })  
    
    .then( data => { 
        renderTee(data.tshirtSelect)
    })
}
getAvailableCourses();


let i = 0
let newPlayerCounter = i++

$('body').ready(function(){ 
    $('#newPlayerInput' ).keyup(function(a){
        if (a.key == "Enter" && newPlayerCounter < 4) {
            let newPlayer = $('#newPlayerInput').val() 
            console.log(newPlayer);
            newPlayerCounter++
            $('#newPlayerText').append(
            `
            <div class="newPlayerWrapper"> 
                 ${$('#newPlayerInput').val()} 
            </div>
            `
            )}
    })
})

// Course Select
function renderCourses (courses){
let courseOptionsHtml = '';
courses.forEach((course) => {
 courseOptionsHtml += `
 <option value="${course.id}">${course.name}</option>`;
});
document.getElementById('course-select').innerHTML = courseOptionsHtml;
}

// Tee Box Select
// let teeBoxSelectHtml = '';
// function renderTee(teeBoxes){
//     teeBoxes.forEach(function (teeBox, index) {
//     teeBoxSelectHtml += `<option value="${index}">${teeBox.teeType.toUpperCase()}, ${
//       teeBox.totalYards
// } yards</option>`
// });
// document.getElementById('tshirtSelect').innerHTML = teeBoxSelectHtml;
// }


// Notification for Finish
    // class Player {
    //     constructor(name, id = getNextId(), scores = []) {
    //       this.name = name;
    //       this.id = id;
    //       this.scores = scores;
    //     }
//   }










