# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```vue
<template>
  <el-button type="primary" @click="handleClick">111</el-button>
  <el-button type="success">Success</el-button>
</template>

<script setup>
const handleClick = () => {
  console.log(111)
}
</script>
```

:::




[comment]: <> (@[code]&#40;../../examples/table/base-table.vue&#41;)<script>
