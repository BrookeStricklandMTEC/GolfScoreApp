// Golf 

// const { data } = require("jquery");

// import scoring from '/scoring.js' 

function getAvailableCourses() {
    fetch('https://golf-courses-api.herokuapp.com/courses/',
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
            return res.json()
        })
        .then(data => {
            renderCourses(data.courses)
        })
        .catch(error => {
            console.error(error);
            console.log('error!');
        })
}
getAvailableCourses();

let courseDiv = document.getElementById('course-select');

courseDiv.addEventListener('change', function () {
    let courseId = $('#course-select').val();
    function courseSelected2() {
        fetch(`https://golf-courses-api.herokuapp.com/courses/${courseId}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.data.holes[0].teeBoxes);
                renderTee(data.data.holes[0].teeBoxes);
            })
            .catch(error => {
                console.error(error); 
                console.log('error!');
            })
    }
    courseSelected2();
});

// courseSelect();
let i = 0
let newPlayerCounter = i++
$('body').ready(function () {
    $('#newPlayerInput').keyup(function (a) {
        if (a.key == "Enter" && newPlayerCounter < 4) {
            let newPlayer = $('#newPlayerInput').val()
            newPlayerCounter++
            $('#newPlayerText').append(
            `
            <div class="newPlayerWrapper"> 
                 ${$('#newPlayerInput').val()} 
            </div>
            `
            )
        }
    })
})

// Course Select
function renderCourses(courses) {
    let courseOptionsHtml = '';
    courses.forEach((course) => {
        courseOptionsHtml += 
        `
        <option value="${course.id}">${course.name}</option>
        <option value="none" selected disabled hidden> Select Course </option>  
        `;
    });
    document.getElementById('course-select').innerHTML = courseOptionsHtml;
}

// Tee Box Select
function renderTee(teeBox) {
    let teeBoxSelectHtml = '';
    teeBox.forEach((teeBox, index) => {
        teeBoxSelectHtml +=
        `
        <option value="${index}">${teeBox.teeType.toUpperCase()}, ${teeBox.yards} yards</option>
        <option value="none" selected disabled hidden> Select Tshirt </option>
        `
    });
    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}




// Notification for Finish
    // class Player {
    //     constructor(name, id = getNextId(), scores = []) {
    //       this.name = name;
    //       this.id = id;
    //       this.scores = scores;
    //     }
//   }
