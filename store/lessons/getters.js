export default {
    getCourses(state) {
        return state.courses
    },
    getLessons(state) {
        return state.lessons
    },
    getVideoKey(state) {
        return state.videoKey
    },
 
    getCourseDuration(state) {
        let time = state.course.duration
        let h = Math.floor(time / 60 / 60)
        let m = Math.floor(time / 60) - (h * 60)
        let s = Math.floor(time % 60)
        return [
            h.toString().padStart(2, '0'),
            m.toString().padStart(2, '0'),
            s.toString().padStart(2, '0'),
        ].join(':')
    },

    getCourse(state) {
        return state.course
    },
    getChanel(state) {
        return state.telegram.channel
    },
    getChat(state) {
        return state.telegram.chat
    }
}