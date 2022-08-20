<template>
  <div>
    <!-- html -->
    <div class="demo">
      {{title}}
    </div>
    <span>我是demo.vue文件</span>
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

