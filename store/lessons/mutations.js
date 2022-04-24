export default {
    setCourses(state, courses) {
        state.courses = courses
    },
    setLessons(state, lessons) {
        state.lessons = lessons
    },
    setVideoKey(state, key) {
        state.videoKey = key
    },
    setCourse(state, course) {
        state.course = course
    },
    setError(state, error) {
        console.log(error);
        state.error = error
    }, 
    clearError(state) {
        state.error = {}
    },
    setTelegram(state, data) {
        state.telegram = data
    },
    setLessonsToken(state, token) {
        state.lessonsToken = token
    }


}