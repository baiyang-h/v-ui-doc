<template>
  <p-form :option="option" />
</template>

<script setup>
const option = {
  columns: [
    {
      type: 'input',
      prop: 'input',
      label: '输入框',
      listeners: {
        blur(e) {
          console.log(e)
        }
      }
    },
    {
      type: 'custom',
      prop: 'custom',
      label: '自定义',
      listeners: {
        // 可以自定义事件，但是在表单组件内部必须注册该事件才会有效
        aaa(v) {},
        bbb(v) {},
      }
    }
  ]
}
</script>