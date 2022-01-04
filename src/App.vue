<template>
  <the-nav></the-nav>
  <the-list></the-list>
  {{ teste }}
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheList from './components/TheList.vue'

export default {
  name: 'App',
  components: {
    TheNav,
    TheList
  },
  computed: {
    teste() {
      return this.$store.getters.teste
    }
  },
  mounted() {
    return this.$store.dispatch('fetchingTodos')
  }
}
</script>

<style>

</style>
