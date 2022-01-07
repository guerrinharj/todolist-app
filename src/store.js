import axios from "axios";
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isFormOn: false,
      todos: null
    }
  },
  getters: {
    isFormOn(state) {
      return state.isFormOn
    },
    todos(state) {
      return state.todos
    }
  },
  mutations: {
    fetchTheTodos(state) {
      axios.get("https://todolist-api-gg.herokuapp.com/api/v1/todos").then(res => {
        state.todos = res.data
      }).catch(error => {
        console.log(error)
      })
    },
    openTheForm(state) {
      state.isFormOn = !state.isFormOn
    },
    submitTheForm(state, payload) {


      const titleSubmitted = payload.form.target[0].value
      const completedSubmitted = payload.form.target[1].checked

      console.log(titleSubmitted, completedSubmitted)

      axios.post('https://todolist-api-gg.herokuapp.com/api/v1/todos', {
        title: titleSubmitted,
        completed: completedSubmitted
      })
    }

  },
  actions: {

    fetchingTodos(context, payload) {
      context.commit('fetchTheTodos', payload)
    },

    openingForm(context, payload) {
      context.commit('openTheForm', payload)
    },

    submitingForm(context, payload) {
      context.commit('submitTheForm', payload)
      context.commit('fetchTheTodos')
    }

  }
})

export default store
