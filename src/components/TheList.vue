<template>
  <list-item> </list-item>
  <ul>
    <li v-for="todo in todos" :key="todo"> {{ todo.title }} </li>
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
