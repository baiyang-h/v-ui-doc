<template>
  <p-form
    v-model="form"
    :option="option"
  >
    <!--  2. 定义相应的插槽内容  -->
    <template #aaa>
      <el-form-item label="插槽" prop="slot1">
        <el-input v-model="form.slot1" />
      </el-form-item>
    </template>
    <template #bbb>
      <el-form-item>
        <el-form-item label="插槽2-1" prop="slot2">
          <el-input v-model="form.slot2" />
        </el-form-item>
        <el-form-item label="插槽2-2" prop="slot3">
          <el-input v-model="form.slot3" />
        </el-form-item>
      </el-form-item>
    </template>
    <template #ccc>
      <el-form-item label="嵌套插槽" prop="grid1.slot4">
        <el-input v-model="form.grid1.slot4" />
      </el-form-item>
    </template>
  </p-form>
</template>

<script setup>
import {ref} from "vue";

const formRef = ref(null)
// 3. 绑定相应表单的属性， 对应上面设置的插槽部分
const form = ref({
  slot1: '我是插槽1',
  slot2: '',
  slot3: '',
  grid1: {
    slot4: '我是嵌套插槽4',
  }
})

const option = {
  columns: [
    // 1. option 中设置插槽
    {
      type: 'slot',
      name: 'aaa',
    },
    {
      type: 'input',
      prop: 'input',
      label: '输入框',
    },
    {
      type: 'slot',
      name: 'bbb'
    },
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'RowInput',
          prop: 'row1',
          span: 6
        },
        {
          type: 'grid',
          label: 'RowGrid',
          prop: 'grid1',
          span: 18,
          children: [
            {
              type: 'input',
              prop: 'a'
            },
            {
              type: 'slot',
              name: 'ccc'
            },
            {
              type: 'input',
              prop: 'b'
            },
          ]
        },
      ]
    },
  ],
  rules: {
    input: [],
    'grid1.a': [],
    'grid1.slot4': [],
    slot1: []
  }
}

const setFieldsValue = () => {
  formRef.value.setFieldsValue((state) => ({
    ...state,
    input: '111',
    slot1: '222',
    slot2: '333',
    slot3: '444',
    row1: '555',
    grid1: {
      a: '11',
      slot4: '22',
      b: '33',
    }
  }))
}
</script>