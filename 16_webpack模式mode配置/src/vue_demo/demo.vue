<template>
  <div>
    <!-- html -->
    <div class="demo">
      {{title}}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "Hello vue"
      }
    }
  }
</script>

<style>
  .demo {
    background-color: pink;
    width: 200px;
    height: 200px;
    border-radius: 6px;
  }
</style>

