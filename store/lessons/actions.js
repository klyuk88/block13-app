export default {
  //получить курсы
  async getCourses({
    commit
  }, data = {}) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.lessonsToken || ''}`
        }
      }
      const res = await this.$axios.get('/courses', config)
      commit('setCourses', res.data.courses)
    } catch (error) {
      console.log(error);
    }

  },
  //получаем уроки из первого курса
  async getLessons({
    state,
    commit,
    dispatch
  }, data = {}) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.lessonsToken || ''}`
        }
      }
      const courses = await this.$axios.get('/courses')
      const firstCourseId = courses.data.courses[0].id
      const lessons = await this.$axios.get(`courses/${firstCourseId}/lessons`, config)
      commit('setLessons', lessons.data.lessons)

    } catch (error) {
      console.log(error);
    }
  },
  //получаем ключ видео
  async getVideoKey({
    state,
    commit,
    dispatch
  }, data) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.lessonsToken}`
        }
      }
      const res = await this.$axios.get(`/video/${data.typeVideo}/${data.elementId}`, config)
      commit('setVideoKey', res.data.key)
    } catch (error) {
      console.log(error);
    }
  },

//получаем первый курс
  async getCourse({
    state,
    commit
  }, ) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.lessonsToken || ''}`
        },
      }
      const res = await this.$axios.get('/courses', config)
      const firstCourse = res.data.courses[0]
      commit('setCourse', firstCourse)
    } catch (error) {
      console.log(error);
    }
  },
//покупка продукта
  async buyProduct({state, commit, dispatch}, data) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.lessonsToken || ''}`
        },
      }
      await this.$axios.post('/buy', data, config)
    } catch (error) {
     commit('setError', error.response.data)
    }
  },
  //запрос цен на телеграм
  async getTelegramProduct({state, commit}) {
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${state.lessonsToken || ''}`
        },
      }
    const res = await this.$axios.get('/telegram/prices', config)
    commit('setTelegram', res.data)
    } catch (error) {
      console.log(error);
    }
  },


}
