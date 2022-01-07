<template>
  <div>
  <p> {{ name }}: {{ completed }} </p>
  <p> EDIT | DELETE </p>
  </div>
</template>

<script>
export default {
  props: ['name', 'completed']
}

</script>

<style scoped>

</style>
