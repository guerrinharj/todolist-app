<template>
  <div>
   <form @submit.prevent="submitForm">
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
  methods: {
    submitForm(fo) {
      this.$store.dispatch('submitingForm', {
        form: fo
      })
    }
  }
}
</script>

<style scoped>
</style>
