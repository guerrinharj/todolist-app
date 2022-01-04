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

  },
  actions: {

  }
})

export default store
