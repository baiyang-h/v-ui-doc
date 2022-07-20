<template>
  <p-form :option="option" />
</template>

<script setup>
const option = {
  showBtn: true,
  okText: '自定义按钮文本确认',
  cancelText: '自定义按钮文本取消',
  columns: []
}
</script>