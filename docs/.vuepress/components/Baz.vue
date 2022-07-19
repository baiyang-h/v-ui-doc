<template>
  <div>
    <el-button type="primary" @click="handleClick">Baz</el-button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log(123)
}
</script>
