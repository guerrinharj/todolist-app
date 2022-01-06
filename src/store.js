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
      console.log(state, payload.form.target[0].value)
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
