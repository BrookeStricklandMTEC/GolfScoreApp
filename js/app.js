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
        })

        .catch(error => {
            console.log('error!');
            console.error(error)
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
    }
    courseSelected2();
});






// fetch('https://golf-courses-api.herokuapp.com/courses/:id' , 
// {method: 'GET' , 
//     headers: { 'Content-Type': 'application/json'},
// })
// .then(res => { 
// return res.json()  
// })  
// .then(data =>  {
// console.log(data); 
// renderCourses(data.courses)
// })

// return Promise.all(urls.map(url => fetch(url))).then(async (res) => {
//     const data = await Promise.all(res.map(r => r.json()))
//     data.forEach(d => {
//       console.log('[+]', content.data)
//       console.log('[-]', content.meta)
//     })
//     return data

// });


// courseSelect();


let i = 0
let newPlayerCounter = i++
$('body').ready(function () {
    $('#newPlayerInput').keyup(function (a) {
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
        teeBoxSelectHtml +=
            `

        <option value="${index}">${teeBox.teeType.toUpperCase()}, ${teeBox.totalYards} yards</option>
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










