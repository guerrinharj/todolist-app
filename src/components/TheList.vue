<template>
  <ul>
    <li v-for="todo in todos" :key="todo">
    <list-item
    :name="todo.title"
    :completed="todo.completed"> </list-item>
    </li>
  </ul>

</template>

<script>
import ListItem from './ListItem.vue'

export default {
  components: {
    ListItem
  },
  computed: {
    todos() {
        return this.$store.getters.todos
    }
  }

}
</script>

<style>

</style>
