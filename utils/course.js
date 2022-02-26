

function getAllCourses() {
    return require('../courses/index.json'); 
}

function getCourse(courseID) {
    return require(`../courses/${courseID}.json`);
}

module.exports = {
    getAllCourses,
    getCourse
};