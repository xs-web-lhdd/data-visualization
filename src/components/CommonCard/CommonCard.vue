<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">￥ {{value}}</div>
    <div class="chart">
      <slot name="chart"></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCard',
  props: {
    title: String,
    value: String
  }
}
</script>

<style scoped>
.title{
  font-size: 12px;
  color: #999;
}
.value{
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart{
  height: 50px;
  /* background-color: red; */
}
.line{
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total{
  font-size: 12px;
  color: #666;
}
</style>

<style lang="scss">
.emphasis{
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
// 向上的箭头
.increase{
  width: 0;
  height: 0;
  border-width: 4px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
// 向下的箭头
.decrease{
  width: 0;
  height: 0;
  border-width: 4px;
  border-color:green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
