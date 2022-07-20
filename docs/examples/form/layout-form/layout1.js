const option = {
  columns: [
    {
      type: 'input',
      label: 'Input',
      prop: 'a1'
    },
    {
      type: 'input',
      label: 'Input',
      prop: 'a2'
    },
  ],
}

/*
 上面对应如下
 <template>
  <el-form>
    <el-form-item prop="a1" label="Input">
      <el-input />
    </el-form-item>
    <el-form-item prop="a2" label="Input">
      <el-input />
    </el-form-item>
  </el-form>
</template>
 */