<template>
  <div class="card">
    <div class="title">
      <p :style="{color: color}">{{title}}</p>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String
    },
    color: {
      type: String,
      default: '#000'
    }
  }
}
</script>


<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  .title {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    height: 50px;
    display: flex;
    align-items: center;
  }
}
</style>

