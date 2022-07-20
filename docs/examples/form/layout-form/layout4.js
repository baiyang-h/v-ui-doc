const option = {
  columns: [
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'Input',
          prop: 'a1'
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'a2',
        }
      ]
    },
    {
      type: 'row',
      children: [
        {
          type: 'input',
          label: 'Input',
          prop: 'c1',
          span: 6
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'c2',
          span: 6
        },
        {
          type: 'input',
          label: 'Input',
          prop: 'c3',
          span: 12
        },
      ]
    },
  ],
}

/*
 上面对应如下
 <template>
  <el-form>
    <el-row>
      <el-col :span="12">
        <el-form-item prop="a1" label="Input"></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="a2" label="Input"></el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-form-item prop="c1" label="Input"></el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item prop="c2" label="Input"></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item prop="c3" label="Input"></el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
 */