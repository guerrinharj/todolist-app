import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      teste: 'vuex funcionando',
      todos: null
    }
  },
  getters: {
    teste(state) {
      return state.teste
    },
    todos(state) {
      return state.todos
    }
  },
  mutations: {
    fetchTheTodos(state) {
      console.log('funcionando')
      fetch('https://todolist-api-gg.herokuapp.com/api/v1/todos')
        .then(response => response.json())
        .then(data => state.todos = data)
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }

  },
  actions: {

    fetchingTodos(context, payload) {
      context.commit('fetchTheTodos', payload)
    }

  }
})

export default store
