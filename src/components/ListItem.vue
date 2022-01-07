<template>
  <div>
  <p> {{ name }}: {{ completed }} </p>
  <p> <span>EDIT</span> | DELETE </p>
  </div>
</template>

<script>
export default {
  props: ['name', 'completed']
}

</script>

<style scoped>

</style>
