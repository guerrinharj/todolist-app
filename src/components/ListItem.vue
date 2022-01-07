<template>
  <div :id="id">
  <p> {{ name }}: {{ completed }} </p>
  <the-form v-if="isEditOn"> </the-form>
  <p> <span @click="openEdit">EDIT</span> | <span @click="deleteItem">DELETE</span> </p>
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
    deleteItem(item) {
      this.$store.dispatch('deletingItem', {
        item: item
      })
    }
  }
}

</script>

<style scoped>

</style>
