const option = {
  columns: [
    {
      type: 'grid',
      prop: 'a',
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
    'a.a1':  [],
    'a.a2':  [],
  }
}

/*
 上面对应如下
 <template>
  <el-form>
    <el-form-item prop="a">
      <el-form-item prop="a.a1" label="Input">
        <el-input />
      </el-form-item>
      <el-form-item prop="a.a2" label="Input">
        <el-input />
      </el-form-item>
    </el-form-item>
  </el-form>
</template>
 */