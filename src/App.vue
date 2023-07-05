<template>
  <y-container>
    <y-aside width="200px">
      Aside
    </y-aside>
    <y-container>
      <y-header>Header</y-header>
      <y-main>Main</y-main>
      <y-footer>Footer</y-footer>
    </y-container>
  </y-container>
  <hr>
  <y-button size="small" type="primary">搜索</y-button>
  <y-button size="medium" type="success">成功</y-button>
  <y-button size="large" type="danger">失败</y-button>
</template>

<script setup lang="ts">

</script>

<style>
body {
  width: 1000px;
  margin: 10px auto;
}

.y-header,
.y-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.y-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.y-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.y-container {
  margin-bottom: 40px;
}

.y-container:nth-child(5) .y-aside,
.y-container:nth-child(6) .y-aside {
  line-height: 260px;
}

.y-container:nth-child(7) .y-aside {
  line-height: 320px;
}
</style>