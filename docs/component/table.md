# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

:::demo 使用 `data`、`option` 属性来定义 Table 表格

```vue
<template>
  <p-table
    :data="tableData"
    :option="option"
  ></p-table>
</template>

<script setup>
const option = {
  columns: [
    {
      prop: 'date',
      label: 'date',
    },
    {
      prop: 'name',
      label: 'name'
    },
    {
      prop: 'address',
      label: 'address',
    },
  ]
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
```

:::

## 带斑马纹表格

## 带边框表格
## 带状态表格
## 分页
## 固定表头
## 固定列
## 多级表头
## 单选
## 多选
## 排序
## 筛选
## 自定义列模板
## 自定义表头
## 展开行
## 树形数据与懒加载
## 表尾合计行
## 合并行或列
## 索引/自定义索引


