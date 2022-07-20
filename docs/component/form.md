# Form 表单

表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 典型表单

@[code](../examples/form/base-form.vue)

## 表单控件事件

如果相对单个的表单增加组件事件，可以在配置中增加 `listeners` 事件配置项

@[code](../examples/form/listeners-form.vue)

## 布局

### 布局一

@[code](../examples/form/layout-form/layout1.js)

### 布局二

`type` 为 `grid` 时

#### grid上存在prop

@[code](../examples/form/layout-form/layout2.js)

#### grid上不存在prop

也可以选择 `grid` 对象上不增加 `prop`，那么就直接进行子集取值，跳过该对象

@[code](../examples/form/layout-form/layout3.js)

### 布局三

增加栅格，增加 `span` 属性，在对象中增加了 `element-ui` 栅格系统的相应属性

@[code](../examples/form/layout-form/layout4.js)

## 插槽

对于有些表复杂的表单形式，我们需要自定义表单，此时我们可以选择插槽的方式，主要有三点:

1. 在 `options` 中设置`{ type: 'slot', name: '插槽名' }`
2. 在 `template` 中写上相应的自定义插槽
3. 在表单组件上绑定 `v-model=form` 在 `form` 中写上表单绑定的参数

@[code](../examples/form/slot-form.vue)

## 默认按钮

除了在外部自定义按钮，如果想要显示配置好的按钮，存在两种方式。 

1. `option.showBtn = true` 的情况下会显示按钮
2. 使用插槽外部自定义按钮 `#button`
3. 直接在组件底部写按钮

#### 方式一
@[code](../examples/form/button-form/btn1.vue)

#### 方式二
@[code](../examples/form/button-form/btn2.vue)

#### 方式三
@[code](../examples/form/button-form/btn3.vue)