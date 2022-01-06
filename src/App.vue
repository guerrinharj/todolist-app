<template>
  <the-nav></the-nav>
  <the-list></the-list>
  <div @click="openForm"> create a todo </div>
  <the-form v-if="isFormOn"> </the-form>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheList from './components/TheList.vue'
import TheForm from './components/TheForm.vue'

export default {
  name: 'App',
  components: {
    TheNav,
    TheList,
    TheForm
  },
  computed: {
    isFormOn() {
      return this.$store.getters.isFormOn
    }
  },
  mounted() {
    return this.$store.dispatch('fetchingTodos')
  },
  methods: {
    openForm() {
      this.$store.dispatch('openingForm')
    }
  }
}
</script>

<style>

</style>
