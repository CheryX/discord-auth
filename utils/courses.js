
function getAllCourses() {

    return require('../courses/index.json')

}

function getCourse(id) {

    return require('../courses/' + id + '.json')

}


module.exports = {
    getAllCourses,
    getCourse
}