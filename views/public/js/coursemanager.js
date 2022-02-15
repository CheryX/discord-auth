function fetchJSON (name) {
    return fetch(`/courses/${name}.json`)
            .then(response => response.json())
            .then(data => console.log(data));
}

const courseButtons = document.getElementsByClassName("courseButton")

for (var i in courseButtons) {
    console.log(courseButtons.length)
    courseButtons[i].addEventListener("click", showCourseInfo)
}

function showCourseInfo (e) {
    console.log(e) 
    var data = fetchJSON(e.target.id)

    e.target.innerText = data.name
}