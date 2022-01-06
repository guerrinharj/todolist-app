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
      fetch('https://todolist-api-gg.herokuapp.com/api/v1/todos')
        .then(response => response.json())
        .then(data => state.todos = data)
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    },
    openTheForm(state) {
      state.isFormOn = !state.isFormOn
    },
    submitTheForm(state, payload) {

      const titleSubmitted = payload.form.target[0].value
      let completedSubmitted = payload.form.target[1].value

      if (completedSubmitted == 'on') {
        completedSubmitted = true
      } else {
        completedSubmitted = false
      }

      console.log(state, titleSubmitted, completedSubmitted)

      fetch('https://todolist-api-gg.herokuapp.com/api/v1/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: titleSubmitted,
          completed: payload.form.target[1].value
        })
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
    }

  }
})

export default store
