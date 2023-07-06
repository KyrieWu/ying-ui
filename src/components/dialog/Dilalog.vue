<template>
  <teleport :disabled="!appendToBody" to='body'>
    <div class="y-dialog">
      <div class="y-dialog_content">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'YDialog'
}
</script>
<script setup lang="ts">
withDefaults(defineProps<{ appendToBody?: boolean }>(), {
  appendToBody: true
})
</script>

<style lang="scss">
.y-dialog {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);

  .y-dialog_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 800px;
    height: 400px;
    padding: 5px;
  }

  iframe {
    width: 600px;
    height: 300px;
  }
}
</style>