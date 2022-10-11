// Golf 

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
            renderTee(data.teeBox)
        })

        .catch(error => {
            console.log('error!');
            console.error(error);
        })
}
getAvailableCourses();





let courseDiv = document.getElementById('course-select');

courseDiv.addEventListener('click', function () {
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
                console.log(data);
            })
            .catch(error => {
                console.log('error!');
        })


        if (courseId == '18300') {
        console.log('fox hollow was chosen');
        }
        else if (courseId == '11819'){
        console.log('thanksgiving point was chosen')
        }
        else if (courseId == '19002'){
        console.log('spanish oaks was chosen')
        }
        else {
        console.log('nothing was chosen')
        }

    }
    courseSelected2();
});

let teeBox = document.getElementById('tee-box-select')

teeBox.addEventListener('click', function() { 
    let teeBoxSelectHtml = document.getElementById('tee-box-select').innerHTML 
    fetch(`https://golf-courses-api.herokuapp.com/courses/${teeBoxSelectHtml}`,
    {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('error!');
    })
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
        courseOptionsHtml += `
        <option value="${course.id}">${course.name}</option>
        <option value="none" selected disabled hidden> Select Course </option>  
        `;
    });
    document.getElementById('course-select').innerHTML = courseOptionsHtml;
}

// Tee Box Select

let teeBoxSelectHtml = ''
function renderTee(teeBox) {
    teeBox.forEach(function (teeBox, index) {
        let teeBoxSelectHtml = document.getElementById('tee-box-select').innerHTML 
        teeBoxSelectHtml +=
        `
        <option value="${index}">${teeBox.teeType.toUpperCase()}, ${teeBox.totalYards} yards</option>
        <option value="none" selected disabled hidden> Select Tshirt </option>
        `
    });
}
console.log(teeBoxSelectHtml); 

// Notification for Finish
    // class Player {
    //     constructor(name, id = getNextId(), scores = []) {
    //       this.name = name;
    //       this.id = id;
    //       this.scores = scores;
    //     }
//   }










