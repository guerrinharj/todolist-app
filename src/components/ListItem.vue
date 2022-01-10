<template>
  <div :id="id">
  <p> {{ name }}: {{ completed }} </p>
  <the-form v-if="isEditOn"> </the-form>
  <p> <button @click="openEdit">EDIT</button> |
  <button @click="deleteItem">DELETE</button> </p>
  </div>
</template>

<script>
import TheForm from './TheForm.vue'
export default {
  components: {
    TheForm
  },
  props: ['name', 'completed', 'id'],
  computed: {
    isEditOn() {
      return this.$store.getters.isEditOn
    }
  },
  methods: {
    openEdit(ed) {
      this.$store.dispatch('openingEdit', {
        edit: ed
      })
    },
    async deleteItem(item) {
      await this.$store.dispatch('deletingItem', {
        item: item
      })
      await this.$store.dispatch('fetchingTodos')
    }
  }
}

</script>

<style scoped>

</style>
