const option = {
  columns: [
    {
      type: 'grid',
      children: [
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
      ]
    },
  ],
  rules: {
    a1:  [],
    a2:  [],
  }
}

/*
 上面对应如下
 <template>
  <el-form>
    <el-form-item>
      <el-form-item prop="a1" label="Input">
        <el-input />
      </el-form-item>
      <el-form-item prop="a2" label="Input">
        <el-input />
      </el-form-item>
    </el-form-item>
  </el-form>
</template>
 */