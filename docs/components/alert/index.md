# Alert 公告

### 基础用法

<div class="docs-preview-part">
  <sk-alert><b>好棒！</b> 你成功阅读了这条重要的信息。<a href="#">查看更多…</a></sk-alert>
</div>

```vue
<template>
  <div class="docs-preview-part">
    <sk-alert><b>好棒！</b> 你成功阅读了这条重要的信息。<a href="#">查看更多…</a></sk-alert>
  </div>
</template>
```

### 可关闭

<AlertClosable />

```vue
<template>
  <div class="docs-preview-part">
    <sk-alert v-if="show" closable @close="show = false">
      <b>好棒！</b> 你成功阅读了这条重要的信息。<a href="#">查看更多…</a>
    </sk-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
```

### 各种样式

<div class="docs-preview-part">
  <sk-row :gutter="24">
    <sk-col :span="24">
      <sk-alert type="warning" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
    <sk-col :span="8">
      <sk-alert type="danger" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
    <sk-col :span="8">
      <sk-alert type="success" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
    <sk-col :span="8">
      <sk-alert type="info" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
    <sk-col :span="8">
      <sk-alert type="primary" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
    <sk-col :span="8">
      <sk-alert type="secondary" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
    <sk-col :span="8">
      <sk-alert type="light" closable>
        <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
      </sk-alert>
    </sk-col>
  </sk-row>
</div>

```vue
<template>
  <div class="docs-preview-part">
    <sk-row :gutter="24">
      <sk-col :span="24">
        <sk-alert type="warning" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
      <sk-col :span="8">
        <sk-alert type="danger" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
      <sk-col :span="8">
        <sk-alert type="success" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
      <sk-col :span="8">
        <sk-alert type="info" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
      <sk-col :span="8">
        <sk-alert type="primary" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
      <sk-col :span="8">
        <sk-alert type="secondary" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
      <sk-col :span="8">
        <sk-alert type="light" closable>
          <b>好棒！</b> 你已经完成了我们的任务，获得10点奖励。<a href="#">查看更多…</a>
        </sk-alert>
      </sk-col>
    </sk-row>
  </div>
</template>
```

### API

| 参数     | 说明       | 类型   | 可选值                                                                          | 默认值  |
| -------- | ---------- | ------ | ------------------------------------------------------------------------------- | ------- |
| type     | 样式类型   | string | `primary`、`secondary`、`success`、`info`、`warning`、`danger`、`light`、`dark` | `info`  |
| closable | 是否可关闭 | string |                                                                                 | `false` |

### 事件

| 事件  | 说明                   | 携带参数 |
| ----- | ---------------------- | -------- |
| close | 点击关闭按钮触发的事件 | -        |
