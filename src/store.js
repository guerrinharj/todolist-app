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

    },
    openTheEdit(state, payload) {
      console.log(state, payload)
    },
    deleteTheItem(state, payload) {

      const todosArray = state.todos
      const elForDelete = payload.item.target.parentElement.parentElement

      todosArray.forEach((todo) => {
        if (todo.id == elForDelete.id) {
          axios.delete(`https://todolist-api-gg.herokuapp.com/api/v1/todos/${todo.id}`)
        }
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
    },

    openingEdit(context, payload) {
      context.commit('openTheEdit', payload)
    },

    deletingItem(context, payload) {
      context.commit('deleteTheItem', payload)
      context.commit('fetchTheTodos')
      console.log(context)
    }

  }
})

export default store
