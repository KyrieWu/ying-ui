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

  <hr>

  <Y-form ref="myForm" :model="model" :rules="rules">
    <Y-form-item label="用户名：" prop="username">
      <Y-input v-model="model.username" />
    </Y-form-item>
    <Y-form-item label="密码：" prop="password">
      <Y-input v-model="model.password" type="password" />
    </Y-form-item>
    <br>
    <Y-form-item>
      <Y-button type="primary">
        登 录
      </Y-button>
    </Y-form-item>
  </Y-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive({
  username: "",
  password: "",
})

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
})

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