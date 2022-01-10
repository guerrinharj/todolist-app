<template>
  <div v-if="!isedit">
   <form @submit.prevent="submitForm">
    <label for="todo-name"> Name: </label>
    <input name="todo-name" type="text"/>
    <label for="todo-completed"> Completed? </label>
    <input name="todo-completed" type="checkbox">
    <button> Submit </button>
   </form>
  </div>
  <div v-if="isedit">
   <form @submit.prevent="submitEdit">
    <label for="todo-name"> Name: </label>
    <input name="todo-name" type="text"/>
    <label for="todo-completed"> Completed? </label>
    <input name="todo-completed" type="checkbox">
    <button> Submit </button>
   </form>
  </div>
</template>

<script>
export default {
  props: ['isedit'],
  methods: {
    async submitForm(fo) {
      await this.$store.dispatch('submitingForm', {
        form: fo
      })
      await this.$store.dispatch('fetchingTodos')
    }, async submitEdit(foed) {
      await this.$store.dispatch('submitingEdit', {
        form: foed
      })
      await this.$store.dispatch('fetchingTodos')
    }
  }
}
</script>

<style scoped>
</style>
