
let currentCourse = null;
let teeType = null;
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
                currentCourse = data.data;
                renderTee(data.data.holes[0].teeBoxes);
            })
            .catch(error => {
                console.error(error);
                console.log('error!');
            })
    }
    courseSelected2();
});
let i = 0
let newPlayerCounter = i++

$('body').ready(function () {
    $('#newPlayerInput').keyup(function (a) {
        if (a.key == "Enter" && newPlayerCounter < 4) {
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

function renderTee(teeBox) {
    let teeBoxSelectHtml = '';
    teeBox.forEach((teeBox) => {
        teeBoxSelectHtml +=
            `
        <option value="${teeBox.teeType}">${teeBox.teeType.toUpperCase()}</option>
        <option value="none" selected disabled hidden> Select TeeBox </option>
        `
    });

    document.getElementById('tee-box-select').innerHTML = teeBoxSelectHtml;
}
document.getElementById('tee-box-select').addEventListener('change', function (event) {
    teeType = event.target.value;
    renderYardage();
    renderPar();
    renderHCP();
});
function renderYardage() {
    const totalYardage = getTotalYardage();
    const yardageElement = document.querySelector('.yardage');

    yardageElement.textContent = totalYardage;

}
function getTotalYardage() {
    const holes = currentCourse.holes;
    const yards = holes.map(holeItem => holeItem.teeBoxes.find(teeBoxItem => teeBoxItem.teeType === teeType).yards);

    return yards.reduce((totalYards, yardItem) => totalYards + yardItem, 0)
}
function renderPar() {
    const totalPar = getTotalPar();
    const ParElement = document.querySelector('.par');

    ParElement.textContent = totalPar;

}
function getTotalPar() {
    const holes = currentCourse.holes;
    const par = holes.map(holeItem => holeItem.teeBoxes.find(teeBoxItem => teeBoxItem.teeType === teeType).par);

    return par.reduce((totalPar, parItem) => totalPar + parItem, 0)
}
function renderHCP() {
    const totalHCP = getTotalHCP();
    const HCPElement = document.querySelector('.hcp');

    HCPElement.textContent = totalHCP;

}
function getTotalHCP() {
    const holes = currentCourse.holes;
    const hcp = holes.map(holeItem => holeItem.teeBoxes.find(teeBoxItem => teeBoxItem.teeType === teeType).hcp);

    return hcp.reduce((totalHCP, HCPItem) => totalHCP + HCPItem, 0)
}