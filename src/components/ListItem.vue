<template>
  <div :id="id">
  <p> {{ name }}: {{ completed }} </p>
  <div class="edit-form">
    <the-form isedit="true"> </the-form>
  </div>
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

.edit-form {
  display: none;
}

</style>
